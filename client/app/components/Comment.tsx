'use client'

import { create } from "domain"
import Image from "next/image"

export default function Comment({ profilePic, username, createdAt, comment}){
    
    const commentDate = new Date(createdAt)

    const dateOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    }

    return(
        <div className=" bg-gray-200 rounded-xl p-2 m-2 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
                <Image
                width={24}
                height={24}
                src={profilePic}
                alt="profile picture"
                className="rounded-full"
                />
                <h3 className="text-sm">{username}</h3>
                <h2 className="text-sm ml-auto">{commentDate.toLocaleDateString('en-US', dateOptions)}</h2>
            </div>
            <p className="p-2">{comment}</p>
        </div>
    )
}