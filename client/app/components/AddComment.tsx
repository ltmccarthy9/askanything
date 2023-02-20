'use client'
import { useState } from "react"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosError } from "axios"
import toast from 'react-hot-toast'

type QuestionProps = {
    id?: string
}

type Comment = {
    questionId?: string
    comment: string
}

export default function AddComment({ id } : QuestionProps){

    const [ comment, setComment] = useState('')
    const [ disabled, setDisabled] = useState(false)
    const queryClient = useQueryClient()
    let toastID: string

    const { mutate } = useMutation(
        async (data: Comment) => await axios.post('/api/questions/addComment', {data}),
        {
            onError: (error) => {
                setDisabled(false)
                if(error instanceof AxiosError){
                    toast.error(error?.response?.data.message, { id: toastID})
                }
            },
            onSuccess: (data) => {
                setComment('')
                setDisabled(false)
                toast.success("Comment added", { id: toastID })
            }
        }
    )

    const submitComment = async (e: React.FormEvent) => {
        e.preventDefault()
        setDisabled(true)
        toastID = toast.loading("Posting your comment", {id: toastID})
        mutate({comment, questionId: id})
    }
    return (
        <form onSubmit={submitComment} className="my-8">
            <h3>Add a comment</h3>
            <div>
                <input
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                type='text'
                name="comment"
                className="p-4 text-lg rounded-md my-2"
                />
            </div>
        <button 
        disabled={disabled} 
        type='submit'
        className="text-sm bg-lime-700 text-white py-3 px-4 rounded-lg hover:bg-lime-600 ml-auto disabled:opacity-25" 
        >Post Comment</button>
        </form>
    )
}