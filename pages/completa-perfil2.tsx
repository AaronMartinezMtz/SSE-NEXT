import { DashboardLayout } from "../components/layouts"

import confetti from 'canvas-confetti';

export const CompletedProfile = () => {

  const handleClick = () => {
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 120,
      angle: 100,
      origin: {
        x: 0,
        y:1
      }
    })
  }

  return (
    <DashboardLayout 
      title="Completa tu perfil" 
      description="Completa tu perfil de egresado ITCancún."
      showNavbar={false}>

      <h2>Completa tu perfil</h2>

      <h4>¡Estas a un paso!</h4>
      <p>Ayudanos a completar tus datos para que puedas disfrutar de los beneficios que tenemos para ti.</p>


      <div className="row ">

        <form className="col-md-6">


          <div className="row">

            <h5 className="mt-3">Experiencia Laboral</h5>

            <h6>2.</h6>

            <div className="col-12">
              <label>Nombre de la empresa</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Nombre(s)" />
            </div>

            <div className="col-md-12 mt-2">
              <label>Puesto</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Puesto" />
            </div>

            <div className="col-md-6 mt-2">
              <label>Fecha de inicio</label>
              <input 
                type="date"
                className="form-control"/>
            </div>

            <div className="col-md-6 mt-2">
              <label>Fecha de termino</label>
              <input 
                type="date"
                className="form-control" />
            </div>

            
            <div className="my-3 text-end">
              <button className="btn btn-sm btn-outline-primary">Añadir otro</button>
            </div>


            <hr />

            <div className="mt-2 text-end">
              <button className="btn btn-outline-secondary me-2">Omitir</button>
              <button  
                className="btn btn-primary"
                type="button"
                onClick={ handleClick }>¡Completar perfil!</button>
            </div>

          </div>


        </form>



        <div className="col-md-6">

          <div className="card p-2">
            <p>1. <span className="fw-bold">Programador FrontEnd</span> | AX Online SA. de VC.</p>
            <p><small>Noviembre, 2020 - Septiembre 2022</small></p>
            <p>Desarrollado de CRM IMMO Market. Migración de sitio web de Vue a NuxtJs. Integración de plugins de terceros con npm. Implementación de buenas practicas SEO.</p>
            <div>
              <button className="btn btn-outline-danger"><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>

        </div>

      </div>


    </DashboardLayout>
  )
}


export default CompletedProfile