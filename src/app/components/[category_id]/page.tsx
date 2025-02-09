"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { db } from "../../../lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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
  const { category_id } = useParams();
  const [components, setComponents] = useState<IComponent[]>([]);
  const fetchComponents = async (categoryId?: string) => {
    try {
      let components: IComponent[] = [];
      // let categoryData = null;

      if (categoryId) {
        const categoryRef = doc(db, "categories", categoryId);
        const categorySnap = await getDoc(categoryRef);
        if (!categorySnap.exists()) {
          console.error("Category not found!");
          return { category: null, components: [] };
        }
        // categoryData = { id: categorySnap.id, ...categorySnap.data() };

        // Fetch components linked to this category
        const componentCategoryQuery = query(
          collection(db, "component_categories"),
          where("category_id", "==", categoryRef) // Query by reference
        );
        const componentCategorySnapshot = await getDocs(componentCategoryQuery);

        const componentRefs = componentCategorySnapshot.docs.map(
          (doc) => doc.data().component_id // This is a DocumentReference
        );

        // Fetch component details
        const componentPromises = componentRefs.map(async (componentRef) => {
          const componentSnap = await getDoc(componentRef);
          return componentSnap.exists()
            ? {
                id: componentSnap.id,
                ...(componentSnap.data() as {
                  name: string;
                  thumbnail: string;
                  description: string;
                }),
              }
            : { id: "", name: "", thumbnail: "", description: "" };
        });

        components = (await Promise.all(componentPromises)).filter(Boolean);
      } else {
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
      }

      setComponents(components);
    } catch (error) {
      console.error("Error fetching components:", error);
      return { category: null, components: [] };
    }
  };

  useEffect(() => {
    fetchComponents(category_id as string);
  }, []);

  console.log(components);

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
