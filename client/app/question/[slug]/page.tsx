'use client'

import QuestionWithContent from "@/app/components/QuestionWithContent"
import AddComment from "@/app/components/AddComment"
import Comment from "@/app/components/Comment"
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import { CommentType } from "@/app/types/CommentProps"

// Url type
type URL = {
    params: {
        slug: string
    }
    searchParams: string
}


// get request for question based on id of question
const getExpanded = async (slug: string) => {
    const response = await axios.get(`/api/questions/${slug}`)
    return response.data
}

// useQuery to get our question
export default function QuestionExpanded(url: URL){
    const { data, error, isInitialLoading, isLoading } = useQuery({
        queryKey: ["expanded-question"],
        queryFn: () => getExpanded(url.params.slug),
    })

if (isInitialLoading || isLoading) return <div>Loading...</div>
if (error) return <><div>{error.toString()}</div></>
  
    return(
        <div>
            <QuestionWithContent 
            id={data?.id} 
            name={data?.author.name}
            profilePic={data?.author.image}
            questionTitle={data?.title}
            content={data?.content}
            createdAt={data?.createdAt}
             />
             <AddComment id={data.id} />
            {data?.comments?.map((com: CommentType) => {
                return (<Comment 
                key={com.id}
                id={com.id}
                profilePic={com.author.image}
                username={com.author.name}
                createdAt={com.createdAt}
                comment={com.message}
                  />
                )
            })}
        </div>
    )
}