import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";
import { Assistant } from "@/const/interfaces/interfaces";
import axiosInstance  from "@/libs/api/axiosInstance";
import axios from "axios";

export async function POST(request: NextApiRequest): Promise<NextResponse> {
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
    let response = await axiosInstance.post<Assistant>('/assistant/create-thread')
    let assistant = response.data;
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

    return new NextResponse(JSON.stringify({ data: assistant }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating assistant thread:", error);
    if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
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
