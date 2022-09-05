

import { AuthLayout } from "../components/layouts"
import Link from 'next/link'

import { useFormik } from 'formik';
import * as Yup from 'yup';

const IniciarSesion = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            control: '',
            password: ''
        },
        onSubmit: ( {control, password} ) => {
    
        },
        validationSchema: Yup.object({
            control: Yup.string()
              .required('Este campo es requerido.'),
            password: Yup.string()
              .min( 6, 'Mínimo 6 carácteres.')
              .required('Este campo es requerido.')
        })
      })


  return (
    <AuthLayout 
        title='Iniciar Sesion' 
        description='Registrate en el Sistema Seguimiento de Egresados del ITCancún.'
        imageUrl="https://img.freepik.com/foto-gratis/grupo-personas-trabajando-plan-negocios-oficina_1303-15832.jpg?w=1800&t=st=1661480091~exp=1661480691~hmac=1eda7e57ce0e2d70ce6c280b24baba234138896ee75a2283d5f8c12d3ee823f9">
        
        <h5>¡Bienvenido de nuevo!</h5>

          <form 
              noValidate
              onSubmit={ handleSubmit }>

            <div className="mt-3">
              <label>No. Control</label>
              <input 
                type="text" 
                placeholder="17530051"
                className="form-control"
                { ...getFieldProps('control') }
              />
              { touched.control && errors.control && <span className="text-danger">{ errors.control }</span> }
            </div>

            <div className="mt-3">
              <label>Contraseña</label>
              <input 
                type="password" 
                placeholder="Contraseña"
                className="form-control" 
                { ...getFieldProps('password') }
              />
              { touched.password && errors.password && <span className="text-danger">{ errors.password }</span> }
            </div>


            <div className="d-grid gap-1 mt-3">
              <button  
                className="btn btn-primary" 
                type="submit">
                Iniciar sesión
              </button>
              
            </div>

          </form>

          <div className="mt-5">
              <p className="text-center">¿No tienes una cuenta?<br /><Link href='/registrarme'>Registrate aquí.</Link></p>
          </div>

    </AuthLayout>
  )
}



export default IniciarSesion;