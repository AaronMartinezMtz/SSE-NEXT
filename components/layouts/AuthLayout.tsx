
import Head from "next/head"
import React, { FC } from "react"


interface Props {
    title: string,
    description: string,
    imageUrl?: string,
    children?: React.ReactNode
}

export const AuthLayout: FC<Props> = ({ children, title, description, imageUrl }) => {
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


        <div className="vw-100 vh-100 row m-0">

            <div className="col-md-8 d-flex justify-content-center" style={{ 
            backgroundSize: 'cover', 
            backgroundPosition: 'bottom',
            backgroundImage: `url("${imageUrl}")` 
            }}>
            <div className="mt-5">
                <h3 className="text-center text-primary">SSE ITCancún</h3>
                <p className="text-center">El sistema que permite el análisis del<br />desempeño e impacto de los <strong className="text-primary">egresados</strong> en el sector productivo.</p>
            </div>
            </div>

            <div className="col-md-4 d-flex flex-column justify-content-center">

            { children }


            </div>


        </div>

    </>
  )
}
