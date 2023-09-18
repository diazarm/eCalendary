import React, { useMemo } from 'react'
import { Button, Checkbox, CheckboxGroup, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useCalendarStore } from '../../../../store/CalendarStore';
import { useScheduleStore } from '../../../../store/ScheduleStore';
import {  formattedDailySchedules, toDateFormater, toInputDate } from '../../../../utils/formaterDate';
import { useForm, FormProvider} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './calendar-schema';
import { formValidation } from '../../../../componets/ErrorMessage';

const ModalDateConfirm = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const selectedDate = useCalendarStore((state) => state.selectedDate)
    const [selectedHours] = useScheduleStore((state) => [state.selectedHours]);
    const toggleButtonMode = selectedHours.length > 0

    const InputSelectedDate = useMemo(() => toInputDate(selectedDate), [selectedDate]);
    const descriptionDelectedDate = useMemo(() => toDateFormater(selectedDate), [selectedDate]);


    const formMethods  = useForm({
        defaultValues: {
            name: '',
            email: '',
        },
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const {
        register, 
        handleSubmit, 
        // watch, 
        formState : {isDirty, isValid,errors}, 
        reset
    } = formMethods;


    const onSubmit = async (data) => {

        if (data) {

            const newData = {...data, selectedHours, selectedDate};
            //enviamos NewData como post
        }

        reset();
    }


    return (
        <div>
            <Button onPress={onOpen} color="primary"
                variant={toggleButtonMode ? "shadow" : "flat"}
                isDisabled={!toggleButtonMode}
            >
                Reservar espacio
            </Button>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <FormProvider {...formMethods} >
                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                                    <ModalHeader className="flex flex-col gap-1">Detalles de la Reserva:</ModalHeader>
                                    <ModalBody className='flex gap-8'>


                                        <Input 
                                            type="text" variant='bordered'
                                            label="Nombre del cliente" placeholder="Juan Ramirez" required
                                            labelPlacement="outside"
                                            description="Es necesario que ingreses tu nombre para realizar el registro"
                                            {...register('name')}
                                            errorMessage={formValidation(errors, "name")}
                                        />

                                        {/* <Input type="text" variant='bordered'
                                    label="Asunto" placeholder="Ingresa un asunto"
                                    labelPlacement="outside"
                                    description="Indicar el asunto es opcional"
                                /> */}

                                        <Input type="email" variant='bordered'
                                            label="Email" placeholder="Ingresa un contacto"
                                            labelPlacement="outside"
                                            description="Indicar el contacto es opcional"
                                            {...register('email')}
                                            errorMessage={formValidation(errors, "email")}
                                        />

                                        <Divider/>

                                        <Input
                                            onlyRead={true} disabled={true}
                                            type="date" variant='bordered'
                                            label="Dia de la reserva" placeholder="fecha"
                                            value={InputSelectedDate}
                                            labelPlacement="outside"
                                            description={descriptionDelectedDate}
                                        />

                                        <CheckboxGroup
                                            label="Horarios seleccionados"
                                            defaultValue={selectedHours}
                                        >
                                            {selectedHours &&
                                                selectedHours.map((hour) => (
                                                    <Checkbox key={hour} value={hour} isDisabled defaultSelected>
                                                        {hour.toFixed(2)}
                                                    </Checkbox>
                                                ))
                                            }

                                        </CheckboxGroup>

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="light" onPress={onClose} type='button'>
                                            Elegir otro horario
                                        </Button>
                                        <Button color="primary" type='submit'>
                                            Reservar
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </FormProvider>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}


export default React.memo(ModalDateConfirm);