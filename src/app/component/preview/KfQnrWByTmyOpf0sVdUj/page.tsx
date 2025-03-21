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
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-center md:space-x-14">
            <div className="relative flex-shrink-0 w-48 h-48">
              <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
              <img
                className="relative object-cover w-48 h-48 rounded-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/2/avatar.jpg"
                alt=""
              />
            </div>

            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black mt-7">
                Jenny Wilson
              </p>
              <p className="mt-1 text-base text-gray-600">
                Project Manager at Microsoft
              </p>
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
                  <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                      <div className="md:flex md:items-center md:justify-center md:space-x-14">
                          <div className="relative flex-shrink-0 w-48 h-48">
                              <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
                              <img className="relative object-cover w-48 h-48 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/2/avatar.jpg" alt="" />
                          </div>

                          <div className="mt-10 md:mt-0">
                              <blockquote>
                                  <p className="text-xl text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                              </blockquote>
                              <p className="text-lg font-semibold text-black mt-7">Jenny Wilson</p>
                              <p className="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                          </div>
                      </div>
                  </div>
              </section>
            );
        }
    `;
}
