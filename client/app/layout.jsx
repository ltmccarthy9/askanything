import './globals.css'
import  { Raleway } from '@next/font/google'
import Nav from './components/Nav'
import QueryWrapper from './auth/QueryWrapper'

const raleway = Raleway({
  weight: ["200", "400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-raleway"
})


export default function RootLayout({children}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${raleway.className} bg-slate-100`}>
        <QueryWrapper>
        <Nav />
        <div className='mx-4 md:mx-48 xl:mx-96'>
        {children}
        
        </div>
        </QueryWrapper>
        </body>
    </html>
  )
}
