
import Head from "next/head"
import React, { FC } from "react"
import { Navbar, Social } from "../ui"


interface Props {
    title: string,
    description: string,
    imageUrl?: string,
    children?: React.ReactNode
}

export const HomeLayout: FC<Props> = ({ children, title, description, imageUrl }) => {
  return (
    <>
    
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ description } />

            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ description } />
            {
                imageUrl && (
                    <meta name="og:image" content={ imageUrl } />
                )
            }
        </Head>




            <div className="container-fluid">


            <Navbar />

            <div className="container mt-5">
                { children }
            </div>

            <Social />


            </div>

    </>
  )
}
