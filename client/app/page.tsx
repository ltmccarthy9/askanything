"use client"
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
  
  const { data, error, isInitialLoading, isLoading } = useQuery<QuestionType[]>({
    queryFn: allQuestions, 
    queryKey: ["questions"],
  })
  if (isInitialLoading || isLoading) return <div>Loading...</div>
  if (error) return <><div>{error.toString()}</div></>

  console.log(data)

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
