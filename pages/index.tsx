import type { NextPage } from 'next'
import { HomeLayout } from '../components/layouts'
import { Navbar, Social } from '../components/ui'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
   <HomeLayout 
    title='Sistema Seguimiento de Egresados | Instituto Tecnológico de Cancún.' 
    description='El sistema que permite el análisis del desempeño e impacto de los egresados en el sector productivo.'>


      <div className="row">

      
        <div className="col-md-6">
            <img style={{ width: '100%' }} src="https://raw.githubusercontent.com/MArianaOlivasGarcia/sse/main/src/assets/images/graduado2.webp" alt="" />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
            <h2>Sistema Seguimiento de <span className="text-primary">Egresados</span></h2>

            <p className="mt-3 mb-5">El SSE es el sistema que permite el análisis del desempeño e impacto de los egresados en el sector productivo.</p>
            

            <button className="btn btn-secondary">¡Conoce más!</button>
        </div>

      </div>


   </HomeLayout>
  )
}

export default Home
