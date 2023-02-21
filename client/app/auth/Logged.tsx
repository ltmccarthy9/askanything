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
                <Image 
                width={45} 
                height={45} 
                className="rounded-full border-2 border-slate-100 hover:border-slate-700
                hover:border-2"
                src={image}
                alt="profile picture"
                priority 
                />
            </Link>
                <button 
                onClick={() => signOut()} 
                className="text-sm font-bold text-slate-700 py-2 px-5 rounded-md
                 disabled:opacity-25 hover:bg-slate-600 hover:text-white transition-all
                 border-2 border-slate-700 duration-100"
                >
                    Sign out
                </button>
        </li>
    )
}