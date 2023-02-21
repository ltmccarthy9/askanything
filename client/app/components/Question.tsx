'use client'
import Image from "next/image"
import Link from "next/link"
import { EditProps } from "../types/QuestionProps"

export default function Question({profilePic, name, questionTitle, questionId, comments}: EditProps){
    
    //for conditional rendering of 'comment' vs 'comments'
    const oneComment = ' Comment'
    const pluralComment = ' Comments'

    const isOne = comments?.length === 1

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
                <p className="break-all font-bold">{questionTitle}</p>
            </div>
            <div className="flex gap-4 cursor-pointer items-center">
                <Link href={`/question/${questionId}`}>
                    <p className="text-sm font-bold text-gray-600 hover:text-black">{comments?.length}{isOne ? oneComment : pluralComment}</p>
                </Link>
            </div>
        </div>
    )
}