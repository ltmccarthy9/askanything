"use client"
import axios from "axios"
import React from 'react'
import OurQuestion from "../components/OurQuestion"
import { useQuery } from '@tanstack/react-query'
import { OurQuestionType } from "../types/OurQuestions"

async function ourQuestions() {
  const response = await axios.get("/api/questions/authQuestions")
  return response.data
}

export default function Home() {
  
  const { data, error, isInitialLoading, isLoading } = useQuery<OurQuestionType>({
    queryFn: ourQuestions, 
    queryKey: ["ourquestions"],
  })
  if (isInitialLoading || isLoading) return <div>Loading...</div>
  if (error) return <><div>{error.toString()}</div></>

  console.log(data)

  return (
    <div className="max-w-4xl mx-auto">
        <h2 className="text-lg font-bold">Your Questions</h2>
        {data?.questions?.map((question) => {
    return ( <OurQuestion
        comments={question.comments}
        key={question.id} 
        questionId={question.id}
        questionTitle={question.title} 
        name={data.name} 
        profilePic={data.image} 
        />
        )
        })}
    </div>
  )
}
