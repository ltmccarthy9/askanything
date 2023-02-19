'use client'

import {signIn} from 'next-auth/react'

export default function Login(){
    return(
        <ul>
            <li className='list-none'>
                <button onClick={() => signIn()} className='text-sm bg-slate-500 text-white py-2 px-5 rounded-xl disabled:opacity-25'>Sign In</button>
            </li>
        </ul>
    )
}