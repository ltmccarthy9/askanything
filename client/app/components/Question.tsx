'use client'
import Image from "next/image"
import Link from "next/link"

export default function Question({profilePic, name, questionTitle}){
    return (
        <div className="bg-white my-8 p-8 rounded-lg">
            <div className="flex items-center gap-2">
                <Image 
                    width={32} 
                    height={32} 
                    className="rounded-full"
                    src={profilePic}
                    alt="profile picture"
                />
                <h3 className="font-bold text-gray-700">{name}</h3>
            </div>
            <div className="my-8">
                <p className="break-all">{questionTitle}</p>
            </div>
        </div>
    )
}