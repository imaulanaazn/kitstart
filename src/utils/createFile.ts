import fs from "fs";
import path from "path";

/**
 * Create a folder and a .tsx file inside it, then write HTML content.
 * @param folderName - Name of the folder to create.
 * @param fileName - Name of the .tsx file to create.
 * @param htmlContent - HTML content to write in the file.
 */
export const createFolderAndFile = async (
  folderName: string,
  htmlContent: string,
  script: string
) => {
  const fileName = "page";

  try {
    const folderPath = path.join(
      process.cwd(),
      "src/app/components",
      folderName
    );
    const filePath = path.join(folderPath, `${fileName}.tsx`);

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const fileContent = `
      "use client";
      import React, { useState } from "react";
      import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
      import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
      

      const ${fileName.charAt(0).toUpperCase() + fileName.slice(1)} = () => {
        const [showCode, setShowCode] = useState(false);

        const code = \`const ${
          fileName.charAt(0).toUpperCase() + fileName.slice(1)
        } = () => {
          ${script}
        return (
          <>
            ${htmlContent}
          </>
        )}\`;

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
            ${htmlContent}
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

      export default ${fileName.charAt(0).toUpperCase() + fileName.slice(1)};
    `;

    fs.writeFileSync(filePath, fileContent.trim());

    console.log(`File created at ${filePath}`);
  } catch (error) {
    console.error("Error creating folder or file:", error);
  }
};
