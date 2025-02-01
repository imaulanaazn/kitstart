import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const POST = async (req: NextRequest, _res: NextResponse) => {
  const formData = await req.formData();

  const file = formData.get("thumbnail");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    return NextResponse.json({
      Message: "Success",
      status: 201,
      image: filename,
    });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
