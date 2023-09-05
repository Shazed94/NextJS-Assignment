import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
    pages: {
        signIn: "/",
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.JWT_KEY,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {
                let email = credentials.email;
                let password = credentials.password
                // DB Email Password check
                if (email === "ashraf.shazed@gmail.com" && password === "123456") {
                    const user = { id: 1, name: "Shazed Rafi", email: "ashraf.shazed@gmail.com" }
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };