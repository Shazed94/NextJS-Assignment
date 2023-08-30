import { NextResponse } from 'next/server'

export async function GET(req, res) {
    return NextResponse.json({},
        {
            status: 200,
            headers: {
                'token': 'XYZ-123',
                'Set-Cookie': "theme = dark ; path= api/cookies",
            }
        })
}
