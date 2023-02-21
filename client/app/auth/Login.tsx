'use client'

import {signIn} from 'next-auth/react'

export default function Login(){
    return(
            <li className='list-none'>
                <button 
                onClick={() => signIn()} 
                className='text-sm font-bold bg-slate-700 text-white py-2 px-5 rounded-md
                disabled:opacity-25 hover:bg-white hover:text-slate-700 transition-all
                border-2 border-slate-700 duration-100'>Sign In</button>
            </li>
    )
}