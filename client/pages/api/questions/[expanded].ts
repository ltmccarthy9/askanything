
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "GET"){
    try{        
        const data = await prisma.question.findUnique({
            where: {
                id: req.query.expanded as string
            },
            include: {
                author: true,
                comments: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        author: true,
                    },
                },
            },
        })
        res.status(200).json(data)
    } catch(err){
        res.status(403).json({error: 'Error occured while fetching user questions'})
    }
  }
}