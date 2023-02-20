'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HiEllipsisVertical } from 'react-icons/hi2'
import { EditProps } from "../types/QuestionProps"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

export default function OurQuestion({profilePic, name, questionTitle, questionId, comments}: EditProps){
    
    //toggle question menu for delete
    const [ menu, setMenu] = useState(false);
    
    //delete question
    const {mutate} = useMutation(async (id: string) => {
        await axios.delete("/api/questions/deleteQuestion", { data: id}),
        {
            onError: (error) => {
                console.log(error)
            },
            onSuccess: (data) => {
                console.log(data)
            },
        }
    })

    const deleteQuestion = () => {
        mutate(questionId);
    }
    return (
        <div className="bg-white my-3 p-4 rounded-lg">
            <div className="flex items-center gap-2">
                <Image 
                    width={24} 
                    height={24} 
                    className="rounded-full"
                    src={profilePic}
                    alt="profile picture"
                />
                <p className="font-bold text-sm text-gray-700">{name}</p>
            <div className="ml-auto relative">
                <button type="button" onClick={() => setMenu(!menu)} className="h-fit w-fit hover:bg-slate-200 rounded-full p-1" >
                    <HiEllipsisVertical size={25} />
                </button>
                <button 
                type="button"
                onClick={deleteQuestion}
                className={
                    menu ? 'absolute z-20 bg-white px-4 py-2 rounded-lg border right-2 top-8 hover:bg-red-600 hover:text-white cursor pointer' 
                    : 'hidden'}>
                        delete
                </button>
            </div>
                
            </div>
            <div className="my-2">
                <p className="break-all">{questionTitle}</p>
            </div>
            <div className="flex gap-4 cursor-pointer items-center">
                <Link href={`/question/${questionId}`}>
                    <p className="text-sm font-bold text-gray-700">{comments?.length} comments</p>
                </Link>
            </div>
        </div>
    )
}