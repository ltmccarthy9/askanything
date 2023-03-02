// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "POST"){
    const session = await getServerSession(req, res, authOptions)
    if(!session) return res.status(401).json({message: "You must sign in to post a question"})

    const title = req.body.content.title
    const body = req.body.content.body

    //Get User
    const prismaUser = await prisma.user.findUnique({
        where: {email: session?.user?.email as string | undefined},
    })

    if(!title.length) {
        return res.status(403).json({ message: "Question must have a title!"})
    }

    try{
        const result = await prisma.question.create({
            data: {
                title: title,
                content: body,
                userId: prismaUser?.id as string,
            },
        })
        res.status(200).json(result)
    } catch(err){
        res.status(403).json({error: 'Error occured while posting question.'})
    }
  }
}
