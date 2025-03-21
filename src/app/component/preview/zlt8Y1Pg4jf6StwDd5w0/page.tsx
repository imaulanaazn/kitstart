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
          <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “You made it so simple. My new site is so much faster and
                      easier to work with than my old site. I just choose the
                      page, make the change and click save.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Devon Lane
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        President of Sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Simply the best. Better than all the rest. I’d recommend
                      this product to beginners and advanced users.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Ronald Richards
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Marketing Coordinator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “This is a top quality product. No need to think twice
                      before making it live on web.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Jane Cooper
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Dog Trainer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “Finally, I’ve found a template that covers all bases for
                      a bootstrapped startup. We were able to launch in days,
                      not months.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Theresa Webb
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “My new site is so much faster and easier to work with
                      than my old site. I just choose the page, make the change
                      and click save.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Darlene Robertson
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Medical Assistant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border border-gray-200 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “You made it so simple. My new site is so much faster and
                      easier to work with than my old site. I just choose the
                      page, make the change and click save.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg"
                      alt=""
                    />
                    <div className="min-w-0 ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        Floyd Miles
                      </p>
                      <p className="text-base text-gray-500 truncate">
                        Nursing Assistant
                      </p>
                    </div>
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
                  <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
                      <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                          <div className="flex flex-col justify-between flex-1 p-8">
                              <div className="flex-1">
                                  <blockquote>
                                      <p className="text-lg text-gray-800">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                                  </blockquote>
                              </div>

                              <div className="mt-8">
                                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                  <div className="flex items-center">
                                      <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg" alt="" />
                                      <div className="ml-3">
                                          <p className="text-base font-semibold text-gray-800 truncate">Devon Lane</p>
                                          <p className="text-base text-gray-500 truncate">President of Sales</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                          <div className="flex flex-col justify-between flex-1 p-8">
                              <div className="flex-1">
                                  <blockquote>
                                      <p className="text-lg text-gray-800">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                  </blockquote>
                              </div>

                              <div className="mt-8">
                                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                  <div className="flex items-center">
                                      <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg" alt="" />
                                      <div className="min-w-0 ml-3">
                                          <p className="text-base font-semibold text-gray-800 truncate">Ronald Richards</p>
                                          <p className="text-base text-gray-500 truncate">Marketing Coordinator</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                          <div className="flex flex-col justify-between flex-1 p-8">
                              <div className="flex-1">
                                  <blockquote>
                                      <p className="text-lg text-gray-800">“This is a top quality product. No need to think twice before making it live on web.”</p>
                                  </blockquote>
                              </div>

                              <div className="mt-8">
                                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                  <div className="flex items-center">
                                      <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg" alt="" />
                                      <div className="min-w-0 ml-3">
                                          <p className="text-base font-semibold text-gray-800 truncate">Jane Cooper</p>
                                          <p className="text-base text-gray-500 truncate">Dog Trainer</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                          <div className="flex flex-col justify-between flex-1 p-8">
                              <div className="flex-1">
                                  <blockquote>
                                      <p className="text-lg text-gray-800">“Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.”</p>
                                  </blockquote>
                              </div>

                              <div className="mt-8">
                                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                  <div className="flex items-center">
                                      <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg" alt="" />
                                      <div className="min-w-0 ml-3">
                                          <p className="text-base font-semibold text-gray-800 truncate">Theresa Webb</p>
                                          <p className="text-base text-gray-500 truncate">Web Designer</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                          <div className="flex flex-col justify-between flex-1 p-8">
                              <div className="flex-1">
                                  <blockquote>
                                      <p className="text-lg text-gray-800">“My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                                  </blockquote>
                              </div>

                              <div className="mt-8">
                                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                  <div className="flex items-center">
                                      <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg" alt="" />
                                      <div className="min-w-0 ml-3">
                                          <p className="text-base font-semibold text-gray-800 truncate">Darlene Robertson</p>
                                          <p className="text-base text-gray-500 truncate">Medical Assistant</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-col bg-white border border-gray-200 rounded-md">
                          <div className="flex flex-col justify-between flex-1 p-8">
                              <div className="flex-1">
                                  <blockquote>
                                      <p className="text-lg text-gray-800">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                                  </blockquote>
                              </div>

                              <div className="mt-8">
                                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                                  <div className="flex items-center">
                                      <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg" alt="" />
                                      <div className="min-w-0 ml-3">
                                          <p className="text-base font-semibold text-gray-800 truncate">Floyd Miles</p>
                                          <p className="text-base text-gray-500 truncate">Nursing Assistant</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
            );
        }
    `;
}
