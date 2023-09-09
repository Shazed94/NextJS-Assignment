import { jwtVerify } from "jose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    const { searchParams } = new URL(req.url)
    let token = searchParams.get('token')

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        let decoded = await jwtVerify(token, secret)
        return NextResponse.json({ status: "success", decoded: decoded['payload'] })
    } catch (error) {
        return NextResponse.json({ status: "fail", error })

    }
}
