'use client'

import Image from "next/image"

export default function Comment({ profilePic, username, createdAt, comment}){
    
    return(
        <div className=" bg-gray-200 rounded-lg p-2 m-2 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
                <Image
                width={24}
                height={24}
                src={profilePic}
                alt="profile picture"
                className="rounded-full"
                />
                <h3 className="text-sm">{username}</h3>
                <h2 className="text-sm">{createdAt}</h2>
            </div>
            <p className="p-2">{comment}</p>
        </div>
    )
}