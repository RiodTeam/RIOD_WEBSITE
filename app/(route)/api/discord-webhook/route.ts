import { NextRequest, NextResponse } from "next/server";
import { sendDiscordNotification } from "@/app/lib/discord";

export async function POST(req: NextRequest) {
  try {
    const { formTitle, page, data } = await req.json();

    if (!formTitle || !data) {
      return NextResponse.json(
        { error: "formTitle and data are required." },
        { status: 400 }
      );
    }

    await sendDiscordNotification({ formTitle, page, data });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Discord webhook error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
