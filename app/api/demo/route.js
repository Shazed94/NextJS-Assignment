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
                post: {
                    create: {
                        title: "post 1",
                        metaTitle: "post_1",
                        slug: "post_slug",
                        summery: "post_summery",
                        published: 1,
                        content: "post content",
                        parentId:"3"
                    }
                }
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

        let formData = await req.formData()

        const prisma = new PrismaClient()
        let result = await prisma.post.create({
            data: {
                title: formData.get("title"),
                metaTitle: formData.get("metaTitle"),
                slug: formData.get("slug"),
                published: formData.get("published"),
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
