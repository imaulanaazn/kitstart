"use client";
import Image from "next/image";
import { db } from "../../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
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
  const [categoryId, setCategoryId] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");
  const fileRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageRef = useRef<any>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [script, setScript] = useState("");

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
    const imageData = await saveImage();

    if (!name || !description || !categoryId || imageData.status !== 201)
      return;

    const result = await addDoc(collection(db, "components"), {
      name,
      description,
      category_id: categoryId,
      thumbnail: imageData.image,
    });
    setName("");
    setDescription("");
    setCategoryId("");
    setThumbnail(null);

    if (result.id) {
      await createFile(result.id);
    }
  };

  async function saveImage() {
    const formData = new FormData();
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    const uploadRes = await fetch("/api/images", {
      method: "POST",
      body: formData,
    });

    const uploadData = await uploadRes.json();
    return uploadData;
  }

  async function createFile(componentId: string) {
    const formData = new FormData();

    formData.append("folderName", componentId);
    formData.append("htmlContent", htmlContent);
    formData.append("scriptContent", script);

    const uploadRes = await fetch("/api/file", {
      method: "POST",
      body: formData,
    });

    const data = await uploadRes.json();
    return data;
  }

  // eslint-disable-next-line
  const handleFileChange = async (event: any) => {
    setThumbnail(event.target.files[0]);

    const file = event.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      if (imageRef.current) {
        imageRef.current.src = imgURL;
      }

      setImagePreview(imgURL);

      fileRef.current = file;
    }
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
          <div className="mb-4 flex flex-col gap-4">
            <label
              htmlFor="category"
              className="text-sm leading-7 text-gray-600"
            >
              Category
            </label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="py-2 px-4 bg-slate-200 rounded-md"
            >
              <option value="">Select Category</option>
              {categories.map((cat: ICategory) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="text-sm leading-7 text-gray-600"
            >
              Description
            </label>
            <input
              type="description"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="image">Thumbnail</label>
            <div className="rounded-xl bg-dark-1 text-white/90 mt-6 h-max">
              <div className="avatar relative aspect-video h-auto w-40 rounded-lg border-2 border-dashed border-slate-400 bg-[url('/add-personal.svg')] bg-center bg-no-repeat hover:cursor-pointer hover:brightness-50">
                <Image
                  src={imagePreview}
                  width={200}
                  height={200}
                  alt={""}
                  ref={imageRef}
                  className={`aspect-square h-auto w-full object-cover object-center ${
                    imagePreview ? "opacity-100" : "opacity-0"
                  }`}
                />
                <input
                  type="file"
                  className="absolute left-0 top-0 aspect-square h-auto w-40 opacity-0"
                  accept="image/*"
                  ref={fileRef}
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-4">
            <label
              htmlFor="htmlContent"
              className="text-sm leading-7 text-gray-600"
            >
              HTML Codes :
            </label>
            <textarea
              id="htmlContent"
              name="htmlContent"
              value={htmlContent}
              onChange={(e) => setHtmlContent(e.target.value)}
              className="w-full min-h-80 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
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
