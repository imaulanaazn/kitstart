"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "react-toastify";

export default function Page() {
  const [showCode, setShowCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(getCode())
      .then(() => {
        toast.success("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <>
      <section className="relative py-10 overflow-hidden bg-blue-600 sm:py-16 lg:py-24">
        <div className="absolute bottom-0 right-0 -mb-48 md:inset-y-0">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/pricing/8/lines.svg"
            alt=""
          />
        </div>

        <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-end grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Join 35k+ web devs & build your next website fast
              </h2>
              <p className="mt-6 text-base leading-relaxed text-blue-100">
                Amet minim mollit non deserunt ullam co est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>

              <ul className="mt-12 space-y-4 md:mt-20">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Domain{" "}
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    120+ Coded Blocks{" "}
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Unlimited Exports{" "}
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Design Files Included{" "}
                  </span>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Commercial License{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:px-12">
              <div className="overflow-hidden text-center bg-white rounded-md shadow-md">
                <div className="px-12 py-10">
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-rose-400">
                    Full Pack
                  </h3>
                  <p className="mt-4 text-6xl font-bold text-black">$79</p>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center w-full px-4 py-4 mt-10 font-semibold text-white transition-all duration-200 rounded-full bg-rose-400 hover:bg-rose-500 focus:bg-rose-500"
                    role="button"
                  >
                    Get full access
                    <svg
                      className="w-5 h-5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <div className="flex items-center justify-center mt-5">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="ml-2 text-sm text-gray-500">
                      {" "}
                      14 Days Moneyback Guarantee{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-10 right-20 flex flex-col gap-2 z-50">
        <button
          onClick={() => {
            setShowCode((prev) => !prev);
          }}
          className="bg-black text-white py-3 px-4 rounded-full"
        >
          {showCode ? "Close Code" : "Show Code"}
        </button>
        <button
          onClick={handleCopy}
          className="border-2 border-dashed border-black py-2 px-4 rounded-full bg-white hover:bg-gray-200"
        >
          Copy Code
        </button>
      </div>
      {showCode && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/30 z-40">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-h-[90vh] w-10/12 overflow-y-auto rounded-lg">
            <SyntaxHighlighter
              showLineNumbers={true}
              language="html"
              style={oneDark}
            >
              {getCode()}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </>
  );
}

function getCode() {
  return `
        export default function Page() {
        return (
                <section className="py-10 bg-white sm:py-16 lg:py-24">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Pricing & Plans
                      </h2>
                      <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis.
                      </p>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
                      <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                        <div className="p-8 xl:px-12">
                          <h3 className="text-base font-semibold text-purple-600">
                            Standard
                          </h3>
                          <p className="text-5xl font-bold text-black mt-7">$29</p>
                          <p className="mt-3 text-base text-gray-600">One-time payment</p>

                          <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                1 Domain License{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                Full Celebration Library{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="h-5 text-indigo-500 flex-shrink-0w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                120+ Coded Blocks{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="h-5 text-indigo-500 flex-shrink-0w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                Design Files Included{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed">
                                {" "}
                                Premium Support{" "}
                              </span>
                            </li>
                          </ul>

                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                            role="button"
                          >
                            {" "}
                            Get full access{" "}
                          </a>
                          <p className="mt-4 text-sm text-gray-500">
                            14 Days Moneyback Guarantee
                          </p>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg">
                        <div className="p-8 xl:px-12">
                          <h3 className="text-base font-semibold text-purple-600">
                            Professional
                          </h3>
                          <p className="text-5xl font-bold text-black mt-7">$49</p>
                          <p className="mt-3 text-base text-gray-600">One-time payment</p>

                          <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                5 Domain License{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                Full Celebration Library{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                120+ Coded Blocks{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                Design Files Included{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed">
                                {" "}
                                Premium Support{" "}
                              </span>
                            </li>
                          </ul>

                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                            role="button"
                          >
                            {" "}
                            Get full access{" "}
                          </a>
                          <p className="mt-4 text-sm text-gray-500">
                            14 Days Moneyback Guarantee
                          </p>
                        </div>
                      </div>

                      <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                        <div className="p-8 xl:px-12">
                          <h3 className="text-base font-semibold text-purple-600">
                            Exclusive
                          </h3>
                          <p className="text-5xl font-bold text-black mt-7">$79</p>
                          <p className="mt-3 text-base text-gray-600">One-time payment</p>

                          <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                Unlimited Domain License{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                Full Celebration Library{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                120+ Coded Blocks{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-base font-medium text-gray-900">
                                {" "}
                                Design Files Included{" "}
                              </span>
                            </li>

                            <li className="inline-flex items-center space-x-2">
                              <svg
                                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed">
                                {" "}
                                Premium Support{" "}
                              </span>
                            </li>
                          </ul>

                          <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                            role="button"
                          >
                            {" "}
                            Get full access{" "}
                          </a>
                          <p className="mt-4 text-sm text-gray-500">
                            14 Days Moneyback Guarantee
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
            );
        }
    `;
}
