import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  // const secret = request.nextUrl.searchParams.get("secret");

  // if (secret !== process.env.MY_SECRET_TOKEN) {
  //   return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  // }

  try {
    // Simulate a longer process
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Revalidate the entire site
    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
