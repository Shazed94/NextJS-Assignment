import { NextResponse } from 'next/server'

export async function GET(req, res) {
    const cookieData = req.cookies.get("theme")
    return NextResponse.json({ cookie: cookieData })
}
