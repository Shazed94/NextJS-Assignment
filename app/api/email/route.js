import { SignJWT } from "jose";
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET(req, res) {
    const { searchParams } = new URL(req.url)
    let ToEmail = searchParams.get('email')

    // const key = new TextEncoder().encode(process.env.JWT_SECRET);
    // const payload = { email: ToEmail, user_id: "Abc123" }

    // let token = await new SignJWT(payload)
    //     .setProtectedHeader({ alg: "HS256" })
    //     .setIssuedAt()
    //     .setIssuer('https://localhost:3000')
    //     .setExpirationTime('2h')
    //     .sign(key)


    try {

        // Transporter 
        let Transporter = nodemailer.createTransport({
            host: "mail.teamrabbil.com",
            port: 25,
            secure: false,
            auth: {
                user: "info@teamrabbil.com",
                pass: "~sR4[bhaC[Qs",
            },
            tls: { rejectUnauthorized: false }
        })

        // Prepare Email 
        let myEmail = {
            from: "info@teamrabbil.com",
            to: ToEmail,
            subject: "Test Email From Next JS Application",
            text: "Mail with token",
            html: `<b>Token</b> : ${token}`,
            
        }

        await Transporter.sendMail(myEmail);
        return NextResponse.json({ msg: "success" })
    }

    catch (e) {
        return NextResponse.json({ msg: "Fail" })
    }


    // return NextResponse.json({ token: token })

}