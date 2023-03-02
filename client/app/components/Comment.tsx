'use client'

import { create } from "domain"
import Image from "next/image"
import { CommentProps } from "../types/CommentProps"

export default function Comment({ profilePic, username, createdAt, comment }: CommentProps){
    
    const commentDate = new Date(createdAt)

    return(
        <div className=" bg-white rounded-xl p-2 m-2 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
                <Image
                width={24}
                height={24}
                src={profilePic}
                alt="profile picture"
                className="rounded-full"
                />
                <h3 className="text-sm">{username}</h3>
                <h2 className="text-sm ml-auto">{commentDate.toLocaleDateString()}</h2>
            </div>
            <p className="p-2">{comment}</p>
        </div>
    )
}