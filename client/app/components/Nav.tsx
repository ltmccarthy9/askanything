import Link from 'next/link';
import Login from '../auth/Login';
import Logged from '../auth/Logged';
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

export default async function Nav(){
    const session = await getServerSession(authOptions)
    console.log(session)
    return(
        <nav className='bg-white py-2 border-b border-gray-300'>
            <div className='flex max-w-4xl justify-between mx-auto'>
                <Link href={'/'}>
                    <h1 className='font-extrabold text-xl tracking-wide pt-2'>Ask Anything.</h1>
                </Link>
                <ul className='flex items-center gap-6'>
                    {!session?.user && <Login/>}
                    {session?.user && <Logged image={session.user?.image || ""} />}
                </ul>
            </div>
        </nav>  
    )
}