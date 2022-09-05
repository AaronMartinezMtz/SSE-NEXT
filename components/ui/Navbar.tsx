import Link from "next/link";
import { useRouter } from "next/router";






export const Navbar = () => {

    const router = useRouter();


  return (
     <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://www.cancun.tecnm.mx/wp-content/uploads/2017/09/LOGO-ITCANCUN-MARCA-REGISTRADA.png" alt="" width="30"  />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className={router.pathname == "/" ? "active nav-link" : "nav-link"} aria-current="page" href="#">Inicio</a>
              </li>

              <li className="nav-item">
                <a className={router.pathname == "/acerca-de" ? "active nav-link" : "nav-link"} href="#">Acerca de</a>
              </li>
              
              <li className="nav-item">
                <a className={router.pathname == "/contacto" ? "active nav-link" : "nav-link"}>Contacto</a>
              </li>

              <li className="nav-item">
                <a className="btn btn-outline-primary" href='/iniciar-sesion'>Iniciar sesión</a>
              </li>


            </ul>
            
          </div>
        </div>
      </nav>
  )
}
