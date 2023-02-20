'use client'

import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

export default function AskQuestion(){
    //State for input form
    const [question, setQuestion] = useState("")
    const [body, setBody] = useState("")
    const [isDisabled, setIsDisabled] = useState(false);
    let toastID: string
    
    const content = {title: question, body: body}

    type StringObject = {
        [key: string]: string
    }
    
    const { mutate } = useMutation(
        async (content: StringObject) => await axios.post("/api/questions/addQuestion", {content}),
        {
            onError: (error) => {
                if(error instanceof AxiosError){
                    toast.error(error?.response?.data.message, { id: toastID})
                }
                setIsDisabled(false);
            },
            onSuccess: (data) => {
                toast.success(`Thanks for asking a question!`, { id: toastID});
                setQuestion('');
                setBody('');
                setIsDisabled(false);
            }
        }
    )
    
    const submitQuestion = async (e: React.FormEvent) => {
        e.preventDefault()
        toastID = toast.loading("posting question", { id: toastID})
        setIsDisabled(true)
        mutate(content)
    }

    return (
        <form onSubmit={submitQuestion} className="bg-white my-8 p-4 rounded-md flex flex-col">
            <div className="flex flex-col my-2">
                <textarea 
                onChange={(e) => setQuestion(e.target.value)} 
                name="question" 
                value={question}
                placeholder="Ask a question."
                maxLength={150}
                className="py-3 px-4 align-middle text-m font-bold tracking-wide rounded-md my-2 h-12 resize-none overflow-hidden border"
                ></textarea>
                <p className="text-sm tracking-tight ml-auto">{`${question.length}/150`}</p>
            </div>
            <div className="flex flex-col my-2">
                <textarea 
                onChange={(e) => setBody(e.target.value)} 
                name="question" 
                value={body}
                placeholder="Text (optional)"
                maxLength={2000}
                className="py-3 px-4 align-middle text-md tracking-wide rounded-md my-2 overflow-hidden border"
                ></textarea>
                <p className="text-sm tracking-tight ml-auto">{`${body.length}/2000`}</p>
            </div>
            <div className="w-full flex">
                <button
                disabled={isDisabled}
                className="text-sm bg-lime-700 text-white py-3 px-4 rounded-lg hover:bg-lime-600 ml-auto disabled:opacity-25"
                type="submit"
                >
                    Post Question
                </button>
            </div>
        </form>
    )
}