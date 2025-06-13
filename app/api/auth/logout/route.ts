import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    cookieStore.delete("userId");
    return NextResponse.json({ message: "Logout successful" });
}