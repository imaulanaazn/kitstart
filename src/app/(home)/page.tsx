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
      let comps = [];

      if (searchQuery) {
        // 1. Search by component name
        const nameQuery = query(
          collection(db, "components"),
          where("name", ">=", searchQuery),
          where("name", "<=", searchQuery + "\uf8ff")
        );
        const nameSnapshot = await getDocs(nameQuery);
        comps = nameSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as {
            name: string;
            thumbnail: string;
            description: string;
          }),
        }));

        // 2. Search by category (if searchQuery is a category name)
        const categoryQuery = query(
          collection(db, "categories"),
          where("id", "==", searchQuery)
        );
        const categorySnapshot = await getDocs(categoryQuery);

        if (!categorySnapshot.empty) {
          const categoryId = categorySnapshot.docs[0].id;

          // Find components linked to this category in component_categories
          const componentCategoryQuery = query(
            collection(db, "component_categories"),
            where("category_id", "==", categoryId)
          );
          const componentCategorySnapshot = await getDocs(
            componentCategoryQuery
          );
          const componentIds = componentCategorySnapshot.docs.map(
            (doc) => doc.data().component_id
          );

          if (componentIds.length > 0) {
            const componentsQuery = query(
              collection(db, "components"),
              where("__name__", "in", componentIds) // Firestore uses __name__ for document IDs
            );
            const componentsSnapshot = await getDocs(componentsQuery);

            const categoryComponents = componentsSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...(doc.data() as {
                name: string;
                thumbnail: string;
                description: string;
              }),
            }));

            // Merge results from name search and category search
            comps = [...comps, ...categoryComponents];
          }
        }
      } else {
        // Get all components if no search query
        const allComponentsQuery = collection(db, "components");
        const querySnapshot = await getDocs(allComponentsQuery);
        comps = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as {
            name: string;
            thumbnail: string;
            description: string;
          }),
        }));
      }

      console.log(comps);
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
        <Link href={`/components/preview/${component.id}`} key={component.id}>
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

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentsPage />
    </Suspense>
  );
}
