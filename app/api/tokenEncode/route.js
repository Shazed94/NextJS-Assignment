import { SignJWT } from "jose";
import {NextResponse } from "next/server";


export async function GET(req, res) {
    const { searchParams } = new URL(req.url)
    let email = searchParams.get('email')
console.log(email)
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        let token = await new SignJWT({ email: email })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setIssuer(process.env.JWT_ISSUER)
            .setExpirationTime(process.env.JWT_EXPIRATION)
            .sign(secret);
        return NextResponse.json({ status: "success", token: token })

    } catch (error) {
        return NextResponse.json({ status: "fail", error })

    }
}
