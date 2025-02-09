"use client";
import React, { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface IComponent {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
}

export default function Page() {
  const [components, setComponents] = useState<IComponent[]>([]);
  const fetchComponents = async () => {
    try {
      let components = [];

      // No category ID provided, fetch all components
      const componentsQuery = collection(db, "components");
      const querySnapshot = await getDocs(componentsQuery);
      components = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as {
          name: string;
          thumbnail: string;
          description: string;
        }),
      }));

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
        <Link href={`/components/${component.id}`} key={component.id}>
          <div className="break-inside-avoid mb-4 p-4 bg-white rounded-xl">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={component.thumbnail}
              alt="Gallery image"
              width={500}
              height={200}
            />
            <p className="text-base font-semibold text-gray-700 mt-2">
              {component.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
