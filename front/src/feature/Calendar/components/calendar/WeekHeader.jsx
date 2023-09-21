import React from "react";

export const WeekHeader = React.memo(() => {
    const weekDays = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    return (
        <header className='grid grid-cols-7 gap-1'>
            {
                weekDays.map((day, index) => (
                    <div key={index} className="text-center font-semibold">
                        {day}
                    </div>
                ))
            }
        </header>
    )
});

