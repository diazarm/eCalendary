import React from 'react'
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { mapDataMyBusinessShow } from '../../../../utils/business-map'
import { myBussinesData } from '../../../../_mocks_/bussinessMocks'
import { Code } from '@nextui-org/code'
import { Button } from '@nextui-org/button'
import { useClipboard } from '../../../../hooks/useClipboard'
import { useBusinessStore } from '../../../../store/BusinessStore';
import { Link } from "react-router-dom";
import { PATH_CALENDAR } from '../../../../routers/routerPaths';


const MyBusinessInormation = () => {

    const serviceResponse = useBusinessStore((state) => state.serviceResponse)
    const { name, month, days, hora_ini, hora_fin, public_rout } = mapDataMyBusinessShow(serviceResponse)
    const { ref, copied, onCopy } = useClipboard({ duration: 4000 });

    return (

        <Card className='w-full md:w-3/4 m-auto'>
            <h2 className='text-center text-xl pt-4'>Mi Servicio</h2>
            <CardBody className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 divide-y divide-gray-200 dark:text-white dark:divide-gray-700'>


                <div className='pt-6 flex flex-col gap-2'>
                    <p className='text-large' > Nombre del servicio:</p>
                    <h1 className='ml-8'> {name}</h1>
                </div>

                <div className='pt-6 flex flex-col gap-2'>
                    <span className='text-large' >Horario de atención:</span>
                    <p className='ml-8'> {hora_ini[0]} a {hora_fin[0]}</p>
                </div>

                <div className='pt-6 flex flex-col gap-2'>
                    <p className='text-large' > Meses a trabajar:</p>
                    <ul className='ml-8'>
                        {month && month.map((month) => (
                            <li className="flex items-center space-x-3" key={month}>
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span>{month}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='pt-6 flex flex-col gap-2'>
                    <p className='text-large' > Dias de la semana a trabajar:</p>
                    <ul className='ml-8'>
                        {days && days.map((day) => (
                            <li className="flex items-center space-x-3" key={day}>
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span>{day}</span>
                            </li>
                        ))}
                    </ul>
                </div>



                <div className=' w-full pt-6 flex flex-col gap-2 md:col-span-2'>
                    <span className='text-large' >Link a compartir:</span>
                    <div className='flex flex-col md:flex-row gap-4 justify-center items-center ' >

                        <Code className='w-full overflow-y-hidden' color="primary" size="md" ref={ref}>{public_rout} </Code>
                        <Button color="primary"
                            onClick={onCopy}
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </Button>
                    </div>
                </div>


                <div className=' w-full pt-6 md:col-span-2'>
                    <p>Gestiona tus reuniones con {` `}

                        <Link className='text-blue-600' color="foreground" to={`${PATH_CALENDAR}/${serviceResponse.identificador}`}>
                            eCalendary
                        </Link>
                    </p>
                </div>

            </CardBody>
        </Card>

    )
}

export default MyBusinessInormation