"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from "next-auth/react"

export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={props.session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
