'use client'
import Image from "next/image"
import Link from "next/link"

// type EditProps = {
//     questionId: string
//     profilePic: string
//     name: string
//     questionTitle: string
//     comments?: {
//       id: string
//       postId: string
//       userId: string
//     }[]
//   }

export default function OurQuestion({profilePic, name, questionTitle, questionId, comments}){
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
            </div>
            <div className="flex gap-4 cursor-pointer items-center">
                <Link href={`/question/${questionId}`}>
                    <p className="text-sm font-bold text-gray-700">{comments?.length} comments</p>
                </Link>
            </div>
        </div>
    )
}