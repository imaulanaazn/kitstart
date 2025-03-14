"use client";
import { db } from "../../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getUserCred } from "@/utils/userCredential";
import { validateAdminAcc } from "@/utils/validateAccount";
import { useRouter } from "next/navigation";

interface ICategory {
  id: string;
  name?: string;
}

export default function AdminComponents() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [code, setCode] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  // const [script, setScript] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const cats = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(cats);
    };

    fetchCategories();
  }, []);

  const handleAdd = async () => {
    try {
      if (!name || !description || !selectedCategories) {
        alert("please fill out all the inputs");
        return;
      }

      const result = await addDoc(collection(db, "components"), {
        name,
        description,
        code,
        categories: selectedCategories,
        thumbnail: imageUrl,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      setName("");
      setDescription("");
      setCode("");
      setSelectedCategories([]);
      setImageUrl("");
      alert("Component added with ID: " + result.id);
    } catch (error) {
      console.error("Error adding component: ", error);
    }
  };

  function toggleCategories(categoryId: string) {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(categoryId)
        ? prevSelectedCategories.filter((id) => id !== categoryId)
        : [...prevSelectedCategories, categoryId]
    );
  }

  useEffect(() => {
    const credentials = getUserCred();
    const isValid = validateAdminAcc(credentials);
    if (isValid) {
      setIsLogin(true);
    }
    setIsLoading(false);
  }, []);

  if (!isLogin && !isLoading) {
    router.push("/admin/login");
  }

  return (
    <div className="w-full ">
      <form
        action="POST"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
          <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
            New Component
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            If you had any issues or you liked our product, please share with
            us!
          </p>
          <div className="mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="text-sm leading-7 text-gray-600"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="image">Thumbnail</label>
            <input
              type="text"
              id="image"
              name="image"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="script" className="text-sm leading-7 text-gray-600">
              Script :
            </label>
            <textarea
              id="script"
              name="script"
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="w-full min-h-48 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div> */}
          <div className="mb-4">
            <label htmlFor="code" className="text-sm leading-7 text-gray-600">
              Codes :
            </label>
            <textarea
              id="code"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full min-h-80 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4 flex flex-col gap-4">
            <label
              htmlFor="categories"
              className="text-sm leading-7 text-gray-600"
            >
              Categories
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <div
                  onClick={() => {
                    toggleCategories(category.id);
                  }}
                  key={category.id}
                  className={`py-1.5 px-3 rounded-full  text-sm hover:cursor-pointer ${
                    selectedCategories.includes(category.id)
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-200 text-gray-700"
                  }`}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleAdd}
            className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
          >
            Create Component
          </button>
        </div>
      </form>
    </div>
  );
}
