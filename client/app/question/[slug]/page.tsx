'use client'

import Question from "@/app/components/Question"
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

export default function QuestionExpanded(url){
    const {data, isLoading} = useQuery({
        queryKey: ["expanded-question"],
        queryFn: () => getExpanded(url.params.slug),
    })

    if(isLoading) return "Loading..."

    console.log(data)
    
    return(
        <div>
            hello
        </div>
    )
}