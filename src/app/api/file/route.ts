import { createFolderAndFile } from "@/utils/createFile";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const folderName = formData.get("folderName");
  const htmlContent = formData.get("htmlContent");
  const scriptContent = formData.get("scriptContent");

  if (!folderName || !htmlContent) {
    return NextResponse.json({
      message: "Missing required parameters",
      status: 400,
    });
  }

  try {
    await createFolderAndFile(
      folderName as string,
      htmlContent as string,
      scriptContent as string
    );
    return NextResponse.json({
      message: "File created successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      message: "Error creating file",
      status: 500,
    });
  }
};
