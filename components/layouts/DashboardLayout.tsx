



import Head from "next/head"
import React, { FC } from "react"
import { Navbar2 } from "../ui/Navbar2";


interface Props {
    title: string,
    description: string,
    imageUrl?: string,
    children?: React.ReactNode,
    showNavbar: boolean;
}

export const DashboardLayout: FC<Props> = ({ children, title, description, imageUrl, showNavbar }) => {
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


            { showNavbar && ( <Navbar2 />)}

            <div className="container-fluid">

                <div className="container mt-5">
                    { children }
                </div>

            </div>

    </>
  )
}
