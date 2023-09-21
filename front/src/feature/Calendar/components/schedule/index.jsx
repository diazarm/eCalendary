import React, { useState } from 'react';
import { useScheduleStore } from '../../../../store/ScheduleStore';
import  RenderHours  from './RenderHours';
import { Chip, Code } from '@nextui-org/react';

const TimePicker = () => {
  const [selectedHours] = useScheduleStore((state) => [state.selectedHours]);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="mb-4">
        <label className="text-lg block font-semibold pb-4">Seleccionar horarios:</label>
        <RenderHours/>
      </div>
      <div className='min-h-unit-20'>
        <p className="text-lg font-semibold">Horarios seleccionados:</p>
        <ul className=''>
          {selectedHours.map((hour) => (
            <span key={hour} className=''> 
              {hour < 10 
                ? <Code color="success" > {`0${hour.toFixed(2)}`} </Code> 
                : <Code color="success" > {hour.toFixed(2)} </Code> } | </span>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimePicker;
