'use client'
import axios from "axios"
import AskQuestion from "./components/AskQuestion"
import Question from "./components/Question"
import { useQuery } from '@tanstack/react-query'


const allQuestions = async () => {
  const response = await axios.get("/api/questions/getQuestions")
  return response.data
}

export default function Home() {
  
  const { data, error, isLoading } = useQuery({
    queryFn: allQuestions, 
    queryKey: ["questions"],
  })
  if (error) return error
  if (isLoading) return "Loading..."

  return (
    <div>
      <AskQuestion />
      {data?.map((question) => (
        <Question 
        key={question.id} 
        questionTitle={question.title} 
        name={question.author.name} 
        profilePic={question.author.image} 
        />
      ))}
    </div>
  )
}
