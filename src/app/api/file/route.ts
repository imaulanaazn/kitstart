import { createFolderAndFile } from "@/utils/createFile";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const folderName = formData.get("folderName");

  if (!folderName) {
    return NextResponse.json({
      message: "Missing folder name",
      status: 400,
    });
  }

  try {
    await createFolderAndFile(folderName as string);
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
