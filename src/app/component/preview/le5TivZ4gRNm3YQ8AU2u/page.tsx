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
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              What our customers say
            </h2>

            <div className="mt-20">
              <blockquote>
                <p className="text-2xl leading-relaxed text-black md:leading-relaxed md:text-3xl">
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save. No need to think twice before
                  making it”
                </p>
              </blockquote>
              <div className="flex items-center mt-16">
                <p className="text-lg font-semibold text-black">Jenny Wilson</p>
                <p className="ml-3 text-lg text-gray-600">Co-founder, Appson</p>
              </div>
            </div>

            <div className="flex items-center mt-12 space-x-4">
              <div className="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-fuchsia-600">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-1.jpg"
                  alt=""
                />
              </div>

              <div className="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-transparent">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-2.jpg"
                  alt=""
                />
              </div>

              <div className="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-transparent">
                <img
                  className="object-cover w-20 h-20 rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-3.jpg"
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
                <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                      <div className="lg:max-w-3xl">
                          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">What our customers say</h2>

                          <div className="mt-20">
                              <blockquote>
                                  <p className="text-2xl leading-relaxed text-black md:leading-relaxed md:text-3xl">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. No need to think twice before making it”</p>
                              </blockquote>
                              <div className="flex items-center mt-16">
                                  <p className="text-lg font-semibold text-black">Jenny Wilson</p>
                                  <p className="ml-3 text-lg text-gray-600">Co-founder, Appson</p>
                              </div>
                          </div>

                          <div className="flex items-center mt-12 space-x-4">
                              <div className="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-fuchsia-600">
                                  <img className="object-cover w-20 h-20 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-1.jpg" alt="" />
                              </div>

                              <div className="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-transparent">
                                  <img className="object-cover w-20 h-20 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-2.jpg" alt="" />
                              </div>

                              <div className="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-transparent">
                                  <img className="object-cover w-20 h-20 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-3.jpg" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
            );
        }
    `;
}
