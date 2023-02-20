'use client'
import axios from "axios"
import AskQuestion from "./components/AskQuestion"
import Question from "./components/Question"
import { useQuery } from '@tanstack/react-query'
import { QuestionType } from "./types/Questions"

const allQuestions = async () => {
  const response = await axios.get("/api/questions/getQuestions")
  return response.data
}

export default function Home() {
  
  const { data, error, isInitialLoading } = useQuery<QuestionType[]>({
    queryFn: allQuestions, 
    queryKey: ["questions"],
  })
  if (error) return error
  if (isInitialLoading) return "Loading..."

  return (
    <div>
      <AskQuestion />
      {data?.map((question) => (
        <Question
        comments={question.comments}
        key={question.id} 
        questionId={question.id}
        questionTitle={question.title} 
        name={question.author.name} 
        profilePic={question.author.image} 
        />
      ))}
    </div>
  )
}
