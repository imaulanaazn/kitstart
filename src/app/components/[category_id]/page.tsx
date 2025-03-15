"use client";
import { IComponent } from "@/interfaces/ComponentInterface";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryComponent = () => {
  const { category_id } = useParams();
  const [components, setComponents] = useState<IComponent[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchComponents = async () => {
      const componentsRef = collection(db, "components");

      // Query to get components where categories array contains "footerId"
      const q = query(
        componentsRef,
        where("categories", "array-contains", category_id)
      );
      const querySnapshot = await getDocs(q);

      const componentList: IComponent[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        componentList.push({
          id: doc.id,
          name: data.name,
          description: data.description,
          thumbnail: data.thumbnail,
          code: data.code,
          categories: data.categories,
          created_at: data.created_at,
          updated_at: data.updated_at,
        });
      });

      setComponents(componentList);
    };

    fetchComponents();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

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
};

export default CategoryComponent;
