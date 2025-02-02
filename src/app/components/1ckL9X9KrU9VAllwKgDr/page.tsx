"use client";
      import React, { useState } from "react";
      import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
      import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
      

      const Page = () => {
        const [showCode, setShowCode] = useState(false);

        const code = `const Page = () => {
          
        return (
          <>
            <div>Heheheh</div>
          </>
        )}`;

        const handleCopy = () => {
          navigator.clipboard
            .writeText(code)
            .then(() => {
              alert("Copied to clipboard!");
            })
            .catch((err) => {
              console.error("Failed to copy: ", err);
            });
        };

        return (
          <>
            <div>Heheheh</div>
              <div className="fixed bottom-10 right-20 flex flex-col gap-2 z-50">
                <button onClick={()=>{setShowCode(prev => !prev)}} className="bg-black text-white py-3 px-4 rounded-full">
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
              <div className="absolute top-0 left-0 w-full h-screen bg-black/30">
                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 max-h-[90vh] overflow-y-auto rounded-lg">
                  <SyntaxHighlighter
                    showLineNumbers={true}
                    language="html"
                    style={oneDark}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              </div>
            )}
          </>
        );
      };

      export default Page;