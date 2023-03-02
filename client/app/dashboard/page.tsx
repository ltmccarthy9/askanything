"use client"
import axios from "axios"
import OurQuestion from "../components/OurQuestion"
import { useQuery } from '@tanstack/react-query'
import { OurQuestionType } from "../types/OurQuestions"

async function ourQuestions() {
  const response = await axios.get("/api/questions/authQuestions")
  return response.data
}

type Ques = {
  id: string
  questionId: string
  title: string
  name: string
  profilePic: string
  comments?: {
    createdAt: string
    id: string
    questionId: string
    userId: string
}[] | undefined
}

export default function Home() {
  
  const { data, error, isInitialLoading, isLoading } = useQuery<OurQuestionType>({
    queryFn: ourQuestions, 
    queryKey: ["ourquestions"],
  })
  if (isInitialLoading || isLoading) return "Loading..."
  if (error) return error

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
