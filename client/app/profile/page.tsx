import { getServerSession } from "next-auth"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { redirect } from "next/navigation"
import MyQuestions from "./MyQuestions"
import axios from "axios"
import { useQuery } from '@tanstack/react-query'
import { QuestionType } from "../types/Questions"

const getAuthQuestions = async () => {
    const response = await axios.get("/api/questions/authQuestions")
    return response.data
}

export default async function Profile(){
    const session = await getServerSession(authOptions)
    if(!session){
        redirect('/api/auth/signin')
    }

    const { data, isInitialLoading } = useQuery<QuestionType[]>([
        getAuthQuestions,
        ["authquestions"],
    ])
    if (isInitialLoading) return <h1>Questions are loading...</h1>
    console.log(data)

    return(
        <main>
            <h1 className="text-2xl font-bold">Welcome back {session?.user?.name}</h1>
            {data?.map((question) => (
            <MyQuestions
            comments={question.comments}
            key={question.id} 
            id={question.id}
            title={question.title} 
            name={question.author.name} 
            profile={question.author.image} 
            />
            ))}
        </main>
    )
}