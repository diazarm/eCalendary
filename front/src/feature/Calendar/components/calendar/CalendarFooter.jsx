import React, { useMemo } from 'react'
import { useCalendarStore } from '../../../../store/CalendarStore';
import { toDateFormater } from '../../../../utils/formaterDate';

export const CalendarFooter = () => {

    const [selectedDate]
        = useCalendarStore((state) =>
            [state.selectedDate]);

    const dateString = useMemo(() => toDateFormater(selectedDate), [selectedDate])

    return (
        <div>
            {selectedDate && (
                <p className="my-4">
                    Fecha seleccionada: {dateString}
                </p>
            )}
        </div>
    )
}
