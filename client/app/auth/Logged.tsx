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
                <button onClick={() => signOut()} className="text-sm bg-slate-700 text-white py-2 px-5 rounded-md disabled:opacity-25 hover:bg-slate-600"
                >
                    Sign out
                </button>
            <Link href={"/dashboard"}>
                <Image 
                width={44} 
                height={44} 
                className="w-14 rounded-full"
                src={image}
                alt="profile picture"
                priority 
                />
            </Link>
        </li>
    )
}