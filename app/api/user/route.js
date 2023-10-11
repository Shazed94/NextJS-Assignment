import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'


export async function POST(req, res) {
    try {
        //  ! Fix serialize a BigInt
        BigInt.prototype.toJSON = function () {
            return this.toString();
        }

        let formData = await req.formData();
        const prisma = new PrismaClient()
        let result = await prisma.user.create({
            data: {
                firstName: formData.get("firstName"),
                middleName: formData?.get("middleName"),
                lastName: formData.get("lastName"),
                mobile: formData.get("mobile"),
                email: formData.get("middleName"),
                passwordHash: formData.get("passwordHash"),
                intro: formData.get("intro"),
                profile: formData.get("profile"),
                lastLogin: new Date(formData.get("lastLogin")),
                // post: {
                //     create: {
                //         title: "post 1",
                //         metaTitle: "post_1",
                //         slug: "post_slug",
                //         summery: "post_summery",
                //         published: 1,
                //         content: "post content",
                //         parentId:"3"
                //     }
                // }
            }

        })
        console.log(result)
        return NextResponse.json({
            status: "success", data: result
        })
    } catch (error) {
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

        const prisma = new PrismaClient()
        let formData = await req.formData()

        let result = await prisma.user.update({
            where: { id: formData.get("id") },
            data: { middleName: formData.get("middleName") }
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

export async function DELETE(req, res) {
    try {
        //  ! Fix serialize a BigInt
        BigInt.prototype.toJSON = function () {
            return this.toString();
        }

        const prisma = new PrismaClient()
        let formData = await req.formData()


        let result = await prisma.user.delete({
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