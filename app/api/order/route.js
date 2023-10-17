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
        let result = await prisma.order.create({
            data: {

                title: formData.get("title"),
                token: formData.get("token"),
                subTotal: parseInt(formData.get("subTotal")),
                itemDiscount: parseInt(formData.get("itemDiscount")),
                tax: parseInt(formData.get("tax")),
                total: parseInt(formData.get("total")),
                discount: parseInt(formData.get("discount")),
                grandTotal: parseInt(formData.get("grandTotal")),
                firstName: formData.get("firstName"),
                middleName: formData.get("middleName"),
                lastName: formData.get("lastName"),
                mobile: formData.get("mobile"),
                email: formData.get("email"),
                city: formData.get("city"),
                country: formData.get("country"),
                userId: Number(formData.get("userId"))
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
        let result = await prisma.order.update({
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

        let result = await prisma.order.delete({
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