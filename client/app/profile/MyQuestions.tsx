
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import { QuestionType } from '../types/Questions'
import EditQuestion from './EditQuestion'

const getAuthQuestions = async () => {
    const response = await axios.get("/api/questions/authQuestions")
    return response.data
}

export default function MyQuestions() {
    
    const { data, isLoading } = useQuery<QuestionType[]>({
        queryFn: getAuthQuestions,
        queryKey: ["auth-questions"],
    })

    if (isLoading) return <h1>Questions are loading...</h1>
    console.log(data)

    return (
        <div>
           
        </div>
    )
}