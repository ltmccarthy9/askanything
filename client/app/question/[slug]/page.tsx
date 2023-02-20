'use client'

import QuestionWithContent from "@/app/components/QuestionWithContent"
import AddComment from "@/app/components/AddComment"
import { QuestionType } from "@/app/types/Questions"
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import { QuestionExpand } from "@/app/types/QuestionExpanded"

type URL = {
    params: {
        slug: string
    }
    searchParams: string
}

const getExpanded = async (slug: string) => {
    const response = await axios.get(`/api/questions/${slug}`)
    return response.data
}

export default function QuestionExpanded(url: URL){
    const {data, isLoading} = useQuery({
        queryKey: ["expanded-question"],
        queryFn: () => getExpanded(url.params.slug),
    })

    if(isLoading) return "Loading..."

    console.log(data)
    
    return(
        <div>
            <QuestionWithContent 
            id={data?.id} 
            name={data?.author.name}
            profilePic={data?.author.image}
            title={data.title}
            content={data.content}
             />
             <AddComment id={data.id} />
            {data?.comments?.map(com => {
                return <div>{com.message}</div>
            })}
        </div>
    )
}