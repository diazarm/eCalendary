import FormCustom from '../components/Form/index'
import { PATH_API_LOGIN } from '../../../routers/routerApi'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <FormCustom title="Sesion" ruta={PATH_API_LOGIN}/>
    </div>
  )
}

export default Login