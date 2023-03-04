import Link from 'next/link';
import Login from '../auth/Login';
import Logged from '../auth/Logged';
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function Nav(){
    const session = await getServerSession(authOptions)
    console.log(session)
    return(
        <nav className='bg-white p-2 border-b border-gray-300 mb-12'>
            <div className='flex max-w-4xl justify-between mx-auto'>
                <Link href={'/'}>
                    <h1 className='font-extrabold text-2xl tracking-wide pt-2'>Ask Anything.</h1>
                </Link>
                <ul className='flex items-center gap-6'>
                    <Link href={'/'}>
                        <div className='flex p-2 rounded-lg hover:bg-gray-200 h-12'>
                            <h2 className='my-auto'>Questions</h2>
                        </div>
                    </Link>
                    {!session?.user && <Login/>}
                    {session?.user && <Logged image={session.user?.image || ""} />}
                </ul>
            </div>
        </nav>  
    )
}