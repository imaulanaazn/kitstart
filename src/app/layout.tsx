"use client";
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface ICategory {
  id: string;
  name?: string;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const router = useRouter();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [keyword, setKeyword] = useState("");

  const fetchCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const cats = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCategories(cats);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const shouldHideAside =
    path.startsWith("/admin/login") || path.startsWith("/component/preview");

  function handleSearch() {
    const category = categories.find((cat) =>
      cat.name?.toLowerCase().includes(keyword.toLowerCase())
    );
    if (category) {
      router.push(`/components/${category.id}`);
    } else {
      toast.error("Component not found");
    }
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-50 overflow-hidden`}
      >
        <ToastContainer />
        {!path.startsWith("/admin/login") && (
          <header className="bg-white fixed top-0 left-0 w-full z-40">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                  <Link href="/" title="" className="flex">
                    <Image
                      className="w-auto h-8"
                      src="/logo.svg"
                      alt=""
                      width={140}
                      height={50}
                    />
                  </Link>
                </div>

                <button
                  type="button"
                  className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                >
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8h16M4 16h16"
                    ></path>
                  </svg>

                  <svg
                    className="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                  <label
                    className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-1.5 px-1.5 rounded-xl gap-2 focus-within:border-gray-300"
                    htmlFor="search-bar"
                  >
                    <input
                      id="search-bar"
                      placeholder="Search Components"
                      value={keyword}
                      onChange={(e) => {
                        setKeyword(e.target.value);
                      }}
                      className="px-6 w-full rounded-md flex-1 outline-none bg-white"
                    />
                    <button
                      onClick={handleSearch}
                      className="w-full md:w-auto px-6 py-2 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-lg transition-all disabled:opacity-70"
                    >
                      <div className="relative">
                        <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                          <svg
                            className="opacity-0 animate-spin w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </div>

                        <div className="flex items-center transition-all opacity-1 valid:">
                          <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                          </span>
                        </div>
                      </div>
                    </button>
                  </label>
                </div>
                <a
                  href="#"
                  title=""
                  className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-gray-700 font-semibold text-white bg-black rounded-full"
                  role="button"
                >
                  Admin{" "}
                </a>
              </div>
            </div>
          </header>
        )}
        <main className="flex">
          {!shouldHideAside && (
            <aside className="w-64 md:block h-screen bg-white pt-20 overflow-y-auto">
              <nav className="text-sm text-gray-200">
                <ul className="flex flex-col p-4">
                  <li
                    className={`px-4 cursor-pointer rounded-lg ${
                      path == "/" && "bg-gray-800"
                    }`}
                  >
                    <Link
                      className={`py-3 flex items-center ${
                        path == "/" ? "text-white" : "text-gray-800"
                      }`}
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 mr-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>
                      New Components
                    </Link>
                  </li>
                  <li className="px-4 py-2 text-xs uppercase tracking-wider text-gray-400 font-bold mt-4">
                    Components
                  </li>
                  <li
                    className={`px-4 cursor-pointer rounded-lg ${
                      path === "/components" && "bg-gray-800"
                    }`}
                  >
                    <Link
                      className={`py-3 flex items-center text-gray-700 ${
                        path === "/components" && "text-white"
                      }`}
                      href={`/components`}
                    >
                      All Components
                    </Link>
                  </li>
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className={`px-4 cursor-pointer rounded-lg ${
                        path.includes(cat.id) && "bg-gray-800"
                      }`}
                    >
                      <Link
                        className={`py-3 flex items-center text-gray-700 ${
                          path.includes(cat.id) && "text-white"
                        }`}
                        href={`/components/${cat.id}`}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
          <div
            className={`w-full h-screen overflow-y-auto ${
              !path.includes("admin/login") ? "pt-20" : "pt-0"
            }`}
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
