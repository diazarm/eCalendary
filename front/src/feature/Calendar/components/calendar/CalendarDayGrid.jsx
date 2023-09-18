import { useCalendarStore } from "../../../../store/CalendarStore";
import { isWorkingDay } from "../../../../utils/workingDays";

export const CalendarDayGrid = () => {

    const [selectedDate, setSelectedDate] = useCalendarStore((state) => [ state.selectedDate, state.setSelectedDate]);
    const currentMonth = useCalendarStore((state) => state.currentMonth)

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const isDisabledDate = (date) => {
        // Agrega tu lógica para deshabilitar días específicos aquí.
        // Por ejemplo, si quieres deshabilitar fines de semana:
        return isWorkingDay(date);
    };

    const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const totalDays = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
    const days = [];



    // Agregar días en blanco para alinear con el día correcto de la semana.
    for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`blank-${i}`} className="p-2" />);
    }

    for (let i = 1; i <= totalDays; i++) {
        const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
        days.push(
            <button
                key={i}
                className={`p-2 rounded-full 
                    ${isDisabledDate(currentDate)
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                        : 'hover:text-blue-700 hover:bg-blue-200' } 
                    ${currentDate.getDate() === (selectedDate?.getDate() || -1) &&
                            currentDate.getMonth() === (selectedDate?.getMonth() || -1)
                        ? 'bg-blue-500 text-white transition duration-150 hover:bg-blue-500 hover:text-white '
                        : ' '}`}
                onClick={() => setSelectedDate(currentDate)}
                disabled={isDisabledDate(currentDate)}
            >
                {i}
            </button>
        );
    }

    return (
        <div className="grid grid-cols-7 gap-1 ">
            {days}
        </div>
    );
};