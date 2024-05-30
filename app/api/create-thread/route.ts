import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { client } from "@/libs/aiInitializer";
import { NextApiRequest } from "next";

export async function POST(request: NextApiRequest) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return new NextResponse(JSON.stringify({ error: "Unauthroize" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    const assistant = await client.beta.threads.create({
      messages: [
        {
          role: "assistant",
          content: "What can I help you with?",
        },
      ],
    });
    console.log(assistant);
    if (!assistant) {
      console.log("An error occured while creating a thread");
      return new NextResponse(
        JSON.stringify({ error: "Failed to create assistant thread" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new NextResponse(JSON.stringify({ id: assistant.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating assistant thread:", error);

    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message: string }).message
        : "Internal Server Error";

    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
