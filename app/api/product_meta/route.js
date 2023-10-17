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
        let result = await prisma.product_meta.create({
            data: {
                key: formData.get("key"),
                content: formData.get("content"),
                productId: formData.get("productId"),
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
        let result = await prisma.product_meta.update({
            where: { id: formData.get("id") },
            data: {
                content: formData.get("content"),
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

        let result = await prisma.product_meta.delete({
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