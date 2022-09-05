import { DashboardLayout } from "../components/layouts"



export const CompletedProfile = () => {
  return (
    <DashboardLayout 
      title="Completa tu perfil" 
      description="Completa tu perfil de egresado ITCancún."
      showNavbar={ false }>

      <h2>Completa tu perfil</h2>

      <h4>¡Estas a un paso!</h4>
      <p>Ayudanos a completar tus datos para que puedas disfrutar de los beneficios que tenemos para ti.</p>


      <div className="row justify-content-center">

        <form className="col-md-6">


          <div className="row">

            <h5 className="mt-3">Datos Personales</h5>

            <div className="col-12 mt-2">
              <label>Nombre(s)</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Nombre(s)" />
            </div>

            <div className="col-md-6 mt-2">
              <label>Apellido Paterno</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Apellido Paterno" />
            </div>

            <div className="col-md-6 mt-2">
              <label>Apellido Materno</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Apellido Materno" />
            </div>

            <div className="col-md-12 mt-2">
              <label>CURP</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Nombre(s)" />
            </div>

            <div className="col-md-9 mt-2">
              <label>Fecha de Nacimiento</label>
              <input 
                type="date"
                className="form-control" />
            </div>

            <div className="col-md-3 mt-2">
              <label>Edad</label>
              <input 
                type="number"
                className="form-control"
                placeholder="Edad" />
            </div>


            <h5 className="mt-3">Datos Académicos</h5>

            <div className="col-12 mt-2">
              <label>Carrera</label>
              <select className="form-control">
                <option value="">Selecciona una carrera</option>
                <option value="LA">Licenciatura en Administración</option>
                <option value="IA">Ingeniería en Administración</option>
                <option value="ISC">Ingeniería en Sistemas Computacionales</option>
                <option value="IM">Ingeniería Mecatronica</option>
              </select>
            </div>

            <div className="col-md-6 mt-2">
              <label>Fecha de Ingreso</label>
              <input 
                type="text"
                className="form-control"
                placeholder="MM/YYYY" />
            </div>

            <div className="col-md-6 mt-2">
              <label>Fecha de Egreso</label>
              <input 
                type="text"
                className="form-control"
                placeholder="MM/YYYY" />
            </div>



            <div className="mt-3 text-end">
              <a href="/completa-perfil2" className="btn btn-outline-primary">Siguiente</a>
            </div>

          </div>


        </form>

      </div>


    </DashboardLayout>
  )
}


export default CompletedProfile