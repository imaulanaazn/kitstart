"use client";
import React, { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { IComponent } from "@/interfaces/ComponentInterface";

export default function Home() {
  const [components, setComponents] = useState<IComponent[]>([]);
  const fetchComponents = async () => {
    try {
      let components = [];

      // No category ID provided, fetch the 20 newest components
      const componentsQuery = collection(db, "components");
      const querySnapshot = await getDocs(componentsQuery);
      components = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...(doc.data() as {
            name: string;
            thumbnail: string;
            description: string;
            code: string;
            created_at: string;
            updated_at: string;
            categories: string[];
          }),
        }))
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .slice(0, 20);

      setComponents(components);
    } catch (error) {
      console.error("Error fetching components:", error);
      return { category: null, components: [] };
    }
  };

  useEffect(() => {
    fetchComponents();
  }, []);

  return (
    <div className="columns-1 md:columns-2 xl:columns-3 gap-5 m-10">
      {components.map((component) => (
        <Link href={`/component/preview/${component.id}`} key={component.id}>
          <div className="break-inside-avoid mb-4 p-4 bg-white rounded-xl">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={component.thumbnail}
              alt="Gallery image"
              width={500}
              height={200}
            />
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold text-gray-700 mt-2">
                {component.name}
              </p>
              <div className="flex gap-2">
                {component.categories.map((category) => (
                  <span
                    key={category}
                    className="py-1 px-3 bg-slate-200 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
