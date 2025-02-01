"use client";

import { db } from "../../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

interface IComponent {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
}

function ComponentsPage() {
  const params = useSearchParams();
  const searchQuery = params.get("search");
  const [components, setComponents] = useState<IComponent[]>([]);
  // const [categories, setCategories] = useState<unknown>([]);

  // const fetchCategories = async () => {
  //   const querySnapshot = await getDocs(collection(db, "categories"));
  //   const cats = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));

  //   setCategories(cats);
  // };

  const fetchComponents = async () => {
    try {
      let q;
      if (searchQuery) {
        // If a search query exists, filter by name or category_id
        q = query(
          collection(db, "components"),
          where("category_id", "==", searchQuery)
          // where("name", ">=", searchQuery),
          // where("name", "<=", searchQuery + "\uf8ff")
        );
      } else {
        // If no search query, fetch all components
        q = collection(db, "components");
      }

      const querySnapshot = await getDocs(q);
      const comps = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as {
          name: string;
          thumbnail: string;
          description: string;
        }),
      }));

      setComponents(comps);
    } catch (error) {
      console.error("Error fetching components:", error);
    }
  };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  useEffect(() => {
    fetchComponents();
  }, [searchQuery]);

  return (
    <div className="columns-1 md:columns-2 xl:columns-3 gap-5 m-10">
      {components.map((component) => (
        <Link href={`/components/${component.id}`} key={component.id}>
          <div className="break-inside-avoid mb-4 p-4 bg-white rounded-xl">
            <Image
              className="h-auto max-w-full rounded-lg"
              src={`/uploads/${component.thumbnail}`}
              alt="Gallery image"
              width={500}
              height={200}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentsPage />
    </Suspense>
  );
}
