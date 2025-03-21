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
          <div className="text-center">
            <img
              className="object-cover w-32 h-32 mx-auto rounded-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg"
              alt=""
            />
            <p className="mt-6 text-lg font-semibold text-black">
              Mark Tanker,{" "}
              <span className="font-normal text-gray-600">California</span>
            </p>
            <blockquote className="max-w-xl mx-auto mt-7">
              <p className="text-xl leading-relaxed text-black">
                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
            </blockquote>
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
                      <div className="text-center">
                          <img className="object-cover w-32 h-32 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/4/avatar.jpg" alt="" />
                          <p className="mt-6 text-lg font-semibold text-black">Mark Tanker, <span className="font-normal text-gray-600">California</span></p>
                          <blockquote className="max-w-xl mx-auto mt-7">
                              <p className="text-xl leading-relaxed text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”</p>
                          </blockquote>
                      </div>
                  </div>
              </section>
            );
        }
    `;
}
