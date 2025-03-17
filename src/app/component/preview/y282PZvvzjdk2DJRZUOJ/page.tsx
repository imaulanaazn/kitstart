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
      <section className="bg-blue-600 2xl:py-24 2xl:bg-white">
        <div className="px-4 mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8">
          <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  Use mobile app for better performance
                </h2>
                <p className="mt-4 text-base text-gray-50">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>

                <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                  <a href="#" title="" className="flex" role="button">
                    <img
                      className="w-auto h-14"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                      alt=""
                    />
                  </a>

                  <a href="#" title="" className="flex" role="button">
                    <img
                      className="w-auto h-14"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="relative px-12">
                <svg
                  className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="3" />
                </svg>
                <img
                  className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png"
                  alt=""
                />
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
            <section className="bg-blue-600 2xl:py-24 2xl:bg-white">
              <div className="px-4 mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8">
                <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
                  <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                    <div>
                      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                        Use mobile app for better performance
                      </h2>
                      <p className="mt-4 text-base text-gray-50">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                      </p>

                      <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                        <a href="#" title="" className="flex" role="button">
                          <img
                            className="w-auto h-14"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                            alt=""
                          />
                        </a>

                        <a href="#" title="" className="flex" role="button">
                          <img
                            className="w-auto h-14"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>

                    <div className="relative px-12">
                      <svg
                        className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      <img
                        className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/iphone-mockup.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            );
        }
    `;
}
