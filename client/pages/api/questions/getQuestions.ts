//Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../app/prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "GET"){

    try{
       const data = await prisma.question.findMany({
        take: 200,
            include: {
                author: true,
                comments: true,
            },
            orderBy: {
                createdAt: "desc",
            }
       })
        res.status(200).json(data)
    } catch(err){
        res.status(403).json({error: 'Error fetching questions'})
    }
  }
}
