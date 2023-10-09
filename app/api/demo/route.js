import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import React from 'react'

export async function GET() {

    const prisma = new PrismaClient()


    return NextResponse.json({ status: "success" })
}
