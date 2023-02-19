import './globals.css'
import  { Karla } from '@next/font/google'
import Nav from './auth/Nav'

const karla = Karla({
  weight: ["200", "400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla"
})


export default function RootLayout({children}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${karla.className} mx-4 md:mx-48 xl:mx-96 bg-grey-200`}>
        <Nav />
        {children}
        </body>
    </html>
  )
}
