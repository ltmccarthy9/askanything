'use client'

import QuestionWithContent from "@/app/components/QuestionWithContent"
import AddComment from "@/app/components/AddComment"
import Comment from "@/app/components/Comment"
import { QuestionType } from "@/app/types/Questions"
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import { QuestionExpand } from "@/app/types/QuestionExpanded"

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
    const {data, isLoading} = useQuery({
        queryKey: ["expanded-question"],
        queryFn: () => getExpanded(url.params.slug),
    })

if(isLoading) return <p>Loading...</p>

    console.log(data)
    
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
            {data?.comments?.map(com => {
                return <Comment 
                key={com.id}
                profilePic={com.author.image}
                username={com.author.name}
                createdAt={com.createdAt}
                comment={com.message}
                  />
            })}
        </div>
    )
}