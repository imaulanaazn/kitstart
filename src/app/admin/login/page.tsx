"use client";
import { validateAdminAcc } from "@/utils/validateAccount";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleLogin() {
    const isValid = validateAdminAcc({ username, password });
    if (isValid) {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      router.push("/admin/components");
    } else {
      alert("username atau password salah");
    }
  }

  return (
    <div>
      <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
            <div className="flex flex-col justify-center items-center h-full select-none">
              <div className="flex flex-col items-center justify-center gap-2 mb-8">
                <Image
                  src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-8"
                />
                <p className="m-0 text-[16px] font-semibold dark:text-white">
                  Login to your Account
                </p>
                <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                  Get started with our app, just start section and enjoy
                  experience.
                </span>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-400 ">
                  Username
                </label>
                <input
                  className="border text-white rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400 ">
                Password
              </label>
              <input
                type="password"
                className="border text-white rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                placeholder="••••••••"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mt-5">
              <button
                onClick={handleLogin}
                className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
