import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'


export async function POST(req, res) {
    try {
        //  ! Fix serialize a BigInt
        BigInt.prototype.toJSON = function () {
            return this.toString();
        }

        let formData = await req.formData()

        const prisma = new PrismaClient()
        let result = await prisma.cart.create({
            data: {
                title: formData.get("title"),
                sessionId: formData.get("sessionId"),
                token: formData.get("token"),
                status: formData.get("status"),
                firstName: formData.get("firstName"),
                middleName: formData.get("middleName"),
                lastName: formData.get("lastName"),
                mobile: formData.get("mobile"),
                email: formData.get("email"),
                city: formData.get("city"),
                country: formData.get("country"),
                userId: Number(formData.get("userId")),
            }
        })

        return NextResponse.json({
            status: "success", data: result
        })
    }
    catch (error) {
        return NextResponse.json({
            status: "success", data: error.toString()
        })
    }
}

export async function PUT(req, res) {
    try {
        //  ! Fix serialize a BigInt
        BigInt.prototype.toJSON = function () {
            return this.toString();
        }

        let formData = await req.formData()

        const prisma = new PrismaClient()
        let result = await prisma.cart.update({
            where: { id: formData.get("id") },
            data: {
                title: formData.get("title"),
            }
        })

        return NextResponse.json({
            status: "success", data: result
        })
    }
    catch (error) {
        return NextResponse.json({
            status: "success", data: error.toString()
        })
    }
}

export async function DELETE(req, res) {
    try {
        //  ! Fix serialize a BigInt
        BigInt.prototype.toJSON = function () {
            return this.toString();
        }

        const prisma = new PrismaClient()
        let formData = await req.formData()

        let result = await prisma.cart.delete({
            where: {
                id: formData.get("id")
            }
        })

        return NextResponse.json({
            status: "success", data: result
        })
    } catch (error) {
        return NextResponse.json({
            status: "success", data: error.toString()
        })
    }
}