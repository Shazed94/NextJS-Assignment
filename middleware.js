
import { NextResponse } from 'next/server'



export function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith('/api/middleware-redirect')) {
        return NextResponse.redirect(new URL('/', req.url))
    }
}
