'use client'

import Image from "next/image"
import {signOut} from 'next-auth/react'
import Link from "next/link"

type User = {
    image: string
}

export default function Logged({image}: User){
    return(
        <li className="flex gap-8 items-center">
              <Link href={"/dashboard"}>
                <div className="flex justify-between p-2 
                rounded-lg h-12 hover:bg-gray-200 ease-in duration-100">
                    <p className="my-auto mx-1">Profile</p>
                    <Image 
                    width={30} 
                    height={30} 
                    className="rounded-full"
                    src={image}
                    alt="profile picture"
                    priority 
                    />
                </div>
                
            </Link>
                <button 
                onClick={() => signOut()} 
                className="h-12 py-2 px-5 rounded-lg
                 disabled:opacity-25 hover:bg-gray-200 transition-all
                 ease-in duration-100"
                >
                    Sign out
                </button>
        </li>
    )
}