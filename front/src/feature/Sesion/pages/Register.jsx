import FormCustom from '../components/Form/index'
import { PATH_API_REGISTER } from '../../../routers/routerApi'


const Register = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <FormCustom title="Registro" ruta={PATH_API_REGISTER}/>
    </div>
  )
}

export default Register