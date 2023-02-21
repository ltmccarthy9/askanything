import Link from 'next/link';
import Login from '../auth/Login';
import Logged from '../auth/Logged';
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

export default async function Nav(){
    const session = await getServerSession(authOptions)
    console.log(session)
    return(
        <nav className='flex justify-between items-center py-8 max-w-4xl mx-auto'>
            <Link href={'/'}>
                <h1 className='font-extrabold text-xl tracking-wide'>Ask Anything.</h1>
            </Link>
            <ul className='flex items-center gap-6'>
                {!session?.user && <Login/>}
                {session?.user && <Logged image={session.user?.image || ""} />}
            </ul>
        </nav>  
    )
}