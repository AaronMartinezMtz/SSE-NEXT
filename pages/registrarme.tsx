

import { AuthLayout } from "../components/layouts"
import Link from 'next/link'

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Registrarme = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            control: '',
            password: '',
            egreso: ''
        },
        onSubmit: ( {control, password, egreso} ) => {
            console.log({control, password, egreso} );
        },
        validationSchema: Yup.object({
            control: Yup.string()
              .email('Correo electrónico no válido.')
              .required('Este campo es requerido.'),
            password: Yup.string()
              .min( 6, 'Mínimo 6 carácteres.')
              .required('Este campo es requerido.'),
            egreso: Yup.string()
              .required('Este campo es requerido.')
        })
      })


  return (
    <AuthLayout 
        title='Iniciar Sesion' 
        description='Registrate en el Sistema Seguimiento de Egresados del ITCancún.'
        imageUrl="https://img.freepik.com/foto-gratis/grupo-diversos-graduados-tirando-gorras-cielo_53876-56031.jpg?w=1800&t=st=1661479511~exp=1661480111~hmac=456abc1f1e58c0a343e119231a9534dfde09fa19e5c4c59cddb602f7e9c2b4bd">

        <h5>¡Registrate ahora!</h5>

        <form noValidate
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
            <label>Año de egreso</label>
            <select className="form-control"
                { ...getFieldProps('egreso') }>
                <option value="">Seleccione su año de egreso</option>
                { [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 20,21,22,23,24,25,26,27,28,29,30,31,32].reverse().map( item => (
                    <option key={item} value={ item + 1990 }>{ item + 1990 }</option>
                ))}
            </select>
            { touched.egreso && errors.egreso && <span className="text-danger">{ errors.egreso }</span> }
        </div>


        <div className="mt-3 mb-2">
            <label>Contraseña</label>
            <input 
            type="password" 
            placeholder="Contraseña"
            className="form-control"
            { ...getFieldProps('password') }
            />
            { touched.password && errors.password && <span className="text-danger">{ errors.password }</span> }
        </div>

        {/* { errorMessage && (<span className="text-danger">{ errorMessage }</span>)} */}

        <div className="d-grid gap-1 mt-3">
            <button 
            className="btn btn-primary" 
            type="submit">
            Registrarme
            </button>
        </div>


        </form>

        <div className="mt-5">
            <p className="text-center">¿Ya tienes una cuenta?<br /><Link href='/iniciar-sesion'>Iniciar sesión.</Link></p>
        </div>


    </AuthLayout>
  )
}



export default Registrarme;