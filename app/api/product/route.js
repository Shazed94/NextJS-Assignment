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
        let result = await prisma.product.create({
            data: {
                firstName: formData.get("firstName"),
                metaTitle: formData.get("metaTitle"),
                slug: formData.get("slug"),
                summery: formData.get("summery"),
                price: Number(formData.get("price")),
                discount: Number(formData.get("discount")),
                userId: formData.get("userId"),
                startsAt: new Date(formData.get("startsAt")),
                endsdAt: new Date(formData.get("endsdAt")),
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
        let result = await prisma.product.update({
            where: { id: formData.get("id") },
            data: {
                price: Number(formData.get("price")),
                discount: Number(formData.get("discount")),
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

        let result = await prisma.product.delete({
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

export async function PATCH(req, res) {
    try {

        const prisma = new PrismaClient()

        let result = await prisma.product.aggregate({

            _avg: { price: true },
            _count: { id: true },
            _max: { price: true },
            _sum: { price: true },

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

export async function GET(req, res) {
    try {

        const prisma = new PrismaClient()

        let result = await prisma.product.groupBy({

            by: ['firstName'],
            _count: { userId: true }

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