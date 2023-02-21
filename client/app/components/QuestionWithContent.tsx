'use client'
import Image from "next/image"
import Link from "next/link"
import { ExpandedProps } from "../types/QuestionProps"

export default function QuestionWithContent({profilePic, name, questionTitle, questionId, comments, content}: ExpandedProps){
    
    return (
        <div className="bg-white my-3 p-4 rounded-xl max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
                <Image 
                    width={24} 
                    height={24} 
                    className="rounded-full"
                    src={profilePic}
                    alt="profile picture"
                />
                <p className="font-bold text-sm text-gray-700">{name}</p>
            </div>
            <div className="my-2">
                <h2 className="break-all font-bold my-2 text-xl">{questionTitle}</h2>
                <p className="break-all p-2">{content}</p>
            </div>
        </div>
    )
}