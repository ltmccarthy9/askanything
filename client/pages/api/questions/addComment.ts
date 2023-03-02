import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../prisma/client'

type Comment = {
  questionId: string
  comment: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "POST"){
    const session = await getServerSession(req, res, authOptions)
    if(!session) return res.status(401).json({message: "Please sign in"})

    const prismaUser = await prisma.user.findUnique({
        where: {email: session?.user?.email as string | undefined },
    })
    //add comment
    try{
       const {comment, questionId }:Comment = req.body.data

       if(!comment.length){
        return res.status(401).json({ err: "comment must have content"})
       }
       
       const result = await prisma.comment.create({
        data: {
            message: comment,
            userId: prismaUser?.id as string,
            questionId: questionId,
        }
       })
       
        res.status(200).json(result)
    } catch(err){
        res.status(403).json({error: 'Error occured while attempting to delete question'})
    }
  }
}