import { useScheduleStore } from "../../../../store/ScheduleStore";

const Interval = () => {

    const [selectedInterval, setSelectedInterval] = useScheduleStore((state) => [state.selectedHours, state.setSelectedHours]);

    const handleIntervalChange = (e) => {
        setSelectedInterval(parseInt(e.target.value));
    };

    return (
        <div className="mb-4 ">
            <label htmlFor="interval" className="text-lg font-semibold">Seleccionar intervalo:</label>
            <select
                id="interval"
                value={selectedInterval}
                onChange={handleIntervalChange}
                className="block border rounded px-3 py-2 mt-2"
            >
                <option value={15}>15 minutos</option>
                <option value={30}>30 minutos</option>
                <option value={45}>45 minutos</option>
                <option value={60}>1 hora</option>
            </select>
        </div>
    )
}

export default Interval