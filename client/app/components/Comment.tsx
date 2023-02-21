'use client'

import Image from "next/image"

export default function Comment({ profilePic, username, createdAt, comment}){
    
    return(
        <div className="bg-white p-8 m-2">
            <div className="flex items-center gap-2">
                <Image
                width={24}
                height={24}
                src={profilePic}
                alt="profile picture"
                />
                <h3 className="font-bold">{username}</h3>
                <h2 className="text-sm">{createdAt}</h2>
            </div>
            <p>{comment}</p>
        </div>
    )
}