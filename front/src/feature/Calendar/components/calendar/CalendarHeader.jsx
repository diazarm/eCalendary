import React, { useCallback, useMemo } from 'react'
import { useCalendarStore } from '../../../../store/CalendarStore';
import { toPascalCase } from '../../../../utils/formaterString';

const CalendarHeader = () => {

    const   [currentMonth, setCurrentMonth] = useCalendarStore((state) => [ state.currentMonth, state.setCurrentMonth]);

    const changeMonth = useCallback((direction) => {
        const newMonth = new Date(currentMonth);
        if (direction === 'prev') {
            newMonth.setMonth(currentMonth.getMonth() - 1);
        } else {
            newMonth.setMonth(currentMonth.getMonth() + 1);
        }
        setCurrentMonth(newMonth);
    },[currentMonth]);

    const formattedMonth = useMemo(
        () =>
          toPascalCase(currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })),
        [currentMonth]
    );


    return (
        <div className="flex justify-between items-center mb-4">
            <button onClick={() => changeMonth('prev')} className="text-gray-600">
                {'<'}
            </button>
            <h2 className="text-lg font-semibold">
                {formattedMonth}
            </h2>
            <button onClick={() => changeMonth('next')} className="text-gray-600">
                {'>'}
            </button>
        </div>
    )
}

export default React.memo(CalendarHeader);