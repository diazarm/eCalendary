import React from 'react'
import CalendarCustom from '../components/calendar'
import {  Divider} from "@nextui-org/react";
import TimePicker from '../components/schedule';
import ModalDateConfirm from '../components/ModalDateConfirm';


const Calendar = () => {


    return (
        <div className="flex flex-col items-center justify-start min-h-screen gap-4 m-auto py-8">

            <h1 className='text-center text-2xl'>Peluqueria Don Juan</h1>
            <div className='w-full flex flex-col lg:flex-row justify-center align-middle  gap-4 mb:gap-0'>
                <CalendarCustom />
                <Divider orientation="horizontal" className='lg:hidden ' />
                <div className='flex flex-col w-full max-w-md mx-auto'>
                    <TimePicker />
                    <ModalDateConfirm/>
                </div>
            </div>
        </div>
    )
}

export default Calendar