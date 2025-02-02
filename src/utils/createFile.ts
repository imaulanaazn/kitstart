import fs from "fs";
import path from "path";

/**
 * Create a folder and a .tsx file inside it, then write HTML content.
 * @param folderName - Name of the folder to create.
 * @param fileName - Name of the .tsx file to create.
 * @param htmlContent - HTML content to write in the file.
 */
export const createFolderAndFile = async (folderName: string) => {
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

    fs.writeFileSync(filePath, "");

    console.log(`File created at ${filePath}`);
  } catch (error) {
    console.error("Error creating folder or file:", error);
  }
};
