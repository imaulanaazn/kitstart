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
      <section className="py-10 bg-white sm:py-16 lg:py-20">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
            <h2 className="text-4xl font-bold text-black lg:max-w-md">
              Get full access to Celebration kit
            </h2>

            <form
              action="#"
              method="POST"
              className="px-10 mt-8 lg:mt-0 lg:px-0"
            >
              <div className="sm:flex sm:justify-center lg:justify-end">
                <div>
                  <label htmlFor="email" className="sr-only"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email to get started"
                    className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
                >
                  Get Started Free
                </button>
              </div>
            </form>
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
                <section className="py-10 bg-white sm:py-16 lg:py-20">
                  <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="text-center lg:flex lg:items-center lg:justify-between lg:text-left">
                      <h2 className="text-4xl font-bold text-black lg:max-w-md">
                        Get full access to Celebration kit
                      </h2>

                      <form
                        action="#"
                        method="POST"
                        className="px-10 mt-8 lg:mt-0 lg:px-0"
                      >
                        <div className="sm:flex sm:justify-center lg:justify-end">
                          <div>
                            <label htmlFor="email" className="sr-only"></label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Enter email to get started"
                              className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
                          >
                            Get Started Free
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
            );
        }
    `;
}
