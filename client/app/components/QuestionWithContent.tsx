'use client'
import Image from "next/image"
import Link from "next/link"
import { ExpandedProps } from "../types/QuestionProps"

export default function QuestionWithContent({profilePic, name, questionTitle, questionId, comments, content}: ExpandedProps){
    
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
            </div>
            <div className="my-2">
                <p className="break-all">{questionTitle}</p>
                <p className="break-all">{content}</p>
            </div>
        </div>
    )
}