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
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Trusted by <span className="text-blue-600">30k+</span> world class
              companies & design teams
            </h2>
          </div>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Jenny Wilson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Project Manager at Microsoft
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Robert Fox
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Founder at Brain.co
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <img
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                    alt=""
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg text-black">
                    “Amet minim mollit non deserunt ullam co est sit aliqua
                    dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Kristin Watson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  UX Designer at Google
                </p>
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
                <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                      <div className="max-w-2xl mx-auto text-center">
                          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">Trusted by <span className="text-blue-600">30k+</span> world class companies & design teams</h2>
                      </div>

                      <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
                          <div className="overflow-hidden bg-white rounded-md shadow">
                              <div className="px-8 py-12">
                                  <div className="relative w-24 h-24 mx-auto">
                                      <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="" />
                                      <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                              <path
                                                  d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                              ></path>
                                          </svg>
                                      </div>
                                  </div>
                                  <blockquote className="mt-7">
                                      <p className="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                                  </blockquote>
                                  <p className="text-base font-semibold tex-tblack mt-9">Jenny Wilson</p>
                                  <p className="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                              </div>
                          </div>

                          <div className="overflow-hidden bg-white rounded-md shadow">
                              <div className="px-8 py-12">
                                  <div className="relative w-24 h-24 mx-auto">
                                      <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg" alt="" />
                                      <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                              <path
                                                  d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                              ></path>
                                          </svg>
                                      </div>
                                  </div>
                                  <blockquote className="mt-7">
                                      <p className="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                                  </blockquote>
                                  <p className="text-base font-semibold tex-tblack mt-9">Robert Fox</p>
                                  <p className="mt-1 text-base text-gray-600">Founder at Brain.co</p>
                              </div>
                          </div>

                          <div className="overflow-hidden bg-white rounded-md shadow">
                              <div className="px-8 py-12">
                                  <div className="relative w-24 h-24 mx-auto">
                                      <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg" alt="" />
                                      <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                                          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                              <path
                                                  d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                              ></path>
                                          </svg>
                                      </div>
                                  </div>
                                  <blockquote className="mt-7">
                                      <p className="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                                  </blockquote>
                                  <p className="text-base font-semibold tex-tblack mt-9">Kristin Watson</p>
                                  <p className="mt-1 text-base text-gray-600">UX Designer at Google</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
            );
        }
    `;
}
