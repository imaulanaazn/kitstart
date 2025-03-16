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
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Choose a plan
            </h2>
            <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="max-w-sm mx-auto mt-8 sm:mt-16">
            <div className="space-y-3">
              <div className="overflow-hidden transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div>
                      <input
                        type="checkbox"
                        name="plan"
                        id="monthlyPlan"
                        className="w-5 h-5 text-blue-600 border-gray-500 rounded-full"
                      />
                    </div>
                    <label htmlFor="monthlyPlan" className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        $29/month
                      </p>
                      <p className="text-sm text-gray-600">
                        Simple monthly billing
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden transition-all duration-200 bg-white border-2 border-blue-600 rounded-md hover:bg-gray-50">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div>
                      <input
                        type="checkbox"
                        name="plan"
                        id="yearlyPlan"
                        className="w-5 h-5 text-blue-600 border-gray-500 rounded-full"
                      />
                    </div>
                    <label htmlFor="yearlyPlan" className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        $19/month
                      </p>
                      <p className="text-sm text-gray-600">
                        $228 billed in a year
                      </p>
                    </label>
                    <span className="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 border border-green-600 rounded-full">
                      {" "}
                      Save 20%{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center w-full px-12 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
              role="button"
            >
              {" "}
              Start Building Website{" "}
            </a>

            <p className="mt-5 text-base text-center text-gray-600">
              Confused?{" "}
              <a
                href="#"
                title=""
                className="font-medium text-black hover:underline"
              >
                Check all features
              </a>
            </p>
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
                      Choose a plan
                    </h2>
                    <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                      amet sint. Velit officia consequat duis.
                    </p>
                  </div>

                  <div className="max-w-sm mx-auto mt-8 sm:mt-16">
                    <div className="space-y-3">
                      <div className="overflow-hidden transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50">
                        <div className="px-4 py-5 sm:p-6">
                          <div className="flex items-center">
                            <div>
                              <input
                                type="checkbox"
                                name="plan"
                                id="monthlyPlan"
                                className="w-5 h-5 text-blue-600 border-gray-500 rounded-full"
                              />
                            </div>
                            <label htmlFor="monthlyPlan" className="ml-5 mr-auto">
                              <p className="text-xl font-semibold text-black">
                                $29/month
                              </p>
                              <p className="text-sm text-gray-600">
                                Simple monthly billing
                              </p>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-hidden transition-all duration-200 bg-white border-2 border-blue-600 rounded-md hover:bg-gray-50">
                        <div className="px-4 py-5 sm:p-6">
                          <div className="flex items-center">
                            <div>
                              <input
                                type="checkbox"
                                name="plan"
                                id="yearlyPlan"
                                className="w-5 h-5 text-blue-600 border-gray-500 rounded-full"
                              />
                            </div>
                            <label htmlFor="yearlyPlan" className="ml-5 mr-auto">
                              <p className="text-xl font-semibold text-black">
                                $19/month
                              </p>
                              <p className="text-sm text-gray-600">
                                $228 billed in a year
                              </p>
                            </label>
                            <span className="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 border border-green-600 rounded-full">
                              {" "}
                              Save 20%{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center w-full px-12 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                      role="button"
                    >
                      {" "}
                      Start Building Website{" "}
                    </a>

                    <p className="mt-5 text-base text-center text-gray-600">
                      Confused?{" "}
                      <a
                        href="#"
                        title=""
                        className="font-medium text-black hover:underline"
                      >
                        Check all features
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            );
        }
    `;
}
