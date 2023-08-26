
import React from 'react'
// import NextNProgress from 'nextjs-progressbar';
export default function Loading() {
    return (
        <main className="h-[calc(100vh-126px)] flex justify-center items-center">
            {/* <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} /> */}
            <h2 className="text-slate-800 text-4xl"> Loading...</h2>
        </main>
    )
}
