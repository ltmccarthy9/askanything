// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]'
import prisma from '../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "DELETE"){
    const session = await getServerSession(req, res, authOptions)
    if(!session) return res.status(401).json({message: "Please sign in"})

    //delete question
    try{
       const questionId = req.body
       const result = await prisma.question.delete({
        where: {
            id: questionId
        }
       })
        res.status(200).json(result)
    } catch(err){
        res.status(403).json({error: 'Error occured while attempting to delete question'})
    }
  }
}