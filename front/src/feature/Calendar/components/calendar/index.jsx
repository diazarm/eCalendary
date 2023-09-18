import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { WeekHeader } from './WeekHeader';
import { CalendarDayGrid } from './CalendarDayGrid';
import CalendarHeader from './CalendarHeader';
import { CalendarFooter } from './CalendarFooter';

const CalendarCustom = () => {

    return (
        <div className="w-full max-w-md mx-auto p-4 ">

            <CalendarHeader />
            <div className="mt-4">
                <WeekHeader />
                <CalendarDayGrid />
                <CalendarFooter />
                
            </div>
        </div>
    );
};

export default CalendarCustom;
