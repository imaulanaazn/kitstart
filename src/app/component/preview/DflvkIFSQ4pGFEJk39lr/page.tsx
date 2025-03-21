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
      <section>
        <div className="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold leading-tight text-center text-white sm:text-4xl lg:text-5xl">
              You’ll be in great company
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-11">
          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-1.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-2.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-orange-500 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Floyd Miles
                </p>
                <p className="mt-2 text-sm text-white truncate">Designer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-5.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-6.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-7.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-8.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-9.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-10.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-11.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-12.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-blue-500 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Bessie Cooper
                </p>
                <p className="mt-2 text-sm text-white truncate">Marketer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-13.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-14.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-15.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-16.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-gray-700 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Annette Black
                </p>
                <p className="mt-2 text-sm text-white truncate">Photographer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-17.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-18.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-19.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-20.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-21.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-22.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-23.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-24.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-green-400 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Leslie Alexander
                </p>
                <p className="mt-2 text-sm text-white truncate">Developer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-25.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-26.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-27.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-red-500 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Wade Warren
                </p>
                <p className="mt-2 text-sm text-white truncate">Founder</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-28.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-29.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-gray-800 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Guy Hawkins
                </p>
                <p className="mt-2 text-sm text-white truncate">SaaS Founder</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-30.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-31.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-32.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-33.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-34.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="bg-indigo-500 aspect-w-1 aspect-h-1">
              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">
                  Ralph Edwards
                </p>
                <p className="mt-2 text-sm text-white truncate">Freelancer</p>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-35.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-200"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="bg-gray-300"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg"
                alt=""
              />
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
                <section>
                  <div className="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600">
                      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                          <h2 className="text-3xl font-bold leading-tight text-center text-white sm:text-4xl lg:text-5xl">You’ll be in great company</h2>
                      </div>
                  </div>

                  <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-11">
                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-1.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-2.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="bg-orange-500 aspect-w-1 aspect-h-1">
                              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                                  <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Floyd Miles</p>
                                  <p className="mt-2 text-sm text-white truncate">Designer</p>
                              </div>
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-5.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-6.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-7.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-8.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-9.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-10.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-11.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-12.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="bg-blue-500 aspect-w-1 aspect-h-1">
                              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                                  <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Bessie Cooper</p>
                                  <p className="mt-2 text-sm text-white truncate">Marketer</p>
                              </div>
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-13.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-14.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-15.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-16.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="bg-gray-700 aspect-w-1 aspect-h-1">
                              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                                  <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Annette Black</p>
                                  <p className="mt-2 text-sm text-white truncate">Photographer</p>
                              </div>
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-17.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-18.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-19.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-20.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-21.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-22.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-23.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-24.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="bg-green-400 aspect-w-1 aspect-h-1">
                              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                                  <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Leslie Alexander</p>
                                  <p className="mt-2 text-sm text-white truncate">Developer</p>
                              </div>
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-25.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-26.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-27.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="bg-red-500 aspect-w-1 aspect-h-1">
                              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                                  <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Wade Warren</p>
                                  <p className="mt-2 text-sm text-white truncate">Founder</p>
                              </div>
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-28.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-29.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="bg-gray-800 aspect-w-1 aspect-h-1">
                              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                                  <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Guy Hawkins</p>
                                  <p className="mt-2 text-sm text-white truncate">SaaS Founder</p>
                              </div>
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-30.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-31.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-32.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-33.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-34.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="bg-indigo-500 aspect-w-1 aspect-h-1">
                              <div className="p-3 sm:p-5 xl:py-6 2xl:py-8 2xl:px-5">
                                  <p className="text-sm font-semibold leading-tight text-white sm:text-lg sm:leading-tight">Ralph Edwards</p>
                                  <p className="mt-2 text-sm text-white truncate">Freelancer</p>
                              </div>
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-35.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-200" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg" alt="" />
                          </div>
                      </div>

                      <div>
                          <div className="aspect-w-1 aspect-h-1">
                              <img className="bg-gray-300" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </section>
            );
        }
    `;
}
