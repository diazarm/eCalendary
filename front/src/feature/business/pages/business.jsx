// import useSWR from "swr"; 
import { PATH_API_SERVICIO , PATH_API_GET_SERVICIO} from '../../../routers/routerApi';
import { fetchEndpoint, fetcherGetDataPrivate, getDataPrivate } from '../../../services/getData';
import MyBusinessInormation from '../components/MyBusiness';
import { useEffect, useState } from "react";
import FormBusiness from "../components/FormBusiness";
import { useBusinessStore } from "../../../store/BusinessStore";

const Business = () => {

    
    const setServiceResponse = useBusinessStore((state) => state.setServiceResponse)
    const [ hasBusiness, setHasBusiness] = useBusinessStore((state) => [ state.hasBusiness, state.setHasBusiness])


    useEffect(() => {
        // const getData = async () => {
        //     return await getDataPrivate(PATH_API_SERVICIO)
        // }
        getDataPrivate(PATH_API_SERVICIO).then((res)=>{
            console.log({res});
            if(res){
                ( res.message && res.message  === "No tienes ni un servicio creado" ) ? setHasBusiness(false)  : setHasBusiness(true)
                !res.message && setServiceResponse(res)
            }
        })
    
      return () => {
        
      }
    }, [])


    return (
        <div className='  flex flex-col w-full min-h-screen justify-center h-full'>

            {
                (hasBusiness)
                ? <MyBusinessInormation/>
                : <FormBusiness />
            }
            

        </div>
    )
}

export default Business
