"use client";
import { getUserCred } from "@/utils/userCredential";
import { db } from "../../../lib/firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { validateAdminAcc } from "@/utils/validateAccount";
import { useRouter } from "next/navigation";

interface ICategory {
  id: string;
  name?: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const cats = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCategories(cats);
  };

  const handleAdd = async () => {
    if (!name) return;
    await addDoc(collection(db, "categories"), { name });
    setName("");
    fetchCategories();
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "categories", id));
    fetchCategories();
  };

  useEffect(() => {
    const credentials = getUserCred();
    console.log(credentials);
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
    <div className="w-full">
      <h1 className="text-center font-semibold text-2xl my-6">Categories</h1>
      <div className="flex w-full items-center justify-center">
        <div className="bg-white rounded-xl p-8 w-11/12">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            <button
              onClick={handleAdd}
              className="py-2 px-4 rounded-md bg-black text-white"
            >
              Add
            </button>
          </div>
          <ul className="w-full flex flex-wrap gap-4 mt-6">
            {categories.map((cat: ICategory) => (
              <li
                key={cat.id}
                className="py-2 px-4 bg-slate-100 rounded-md flex justify-between min-w-64"
              >
                <span className="text-gray-700 font-medium">{cat.name} </span>
                <button
                  onClick={() => handleDelete(cat.id)}
                  className="text-rose-600/60 hover:font-medium hover:text-rose-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
