import {Select, SelectItem} from "@nextui-org/react";
import style from './style.module.css'
import { useFormContext } from "react-hook-form";
import { formValidation } from "../../../../componets/ErrorMessage";


  export default function  MySelect({
    name,
    lista = [],
    titulo = " ",
    seleccionMultiple = false
  }) {

    const {register, formState : {errors} } = useFormContext();

    return (
      <Select
        id={name}
        {...register(name)}
        label= {titulo}
        labelPlacement="outside"
        placeholder={titulo}
        selectionMode = {seleccionMultiple ? "multiple" : "single"}
        className=""
        errorMessage={formValidation(errors, name)}
      >
        {lista.map((item) => (
          <SelectItem key={item.value} textValue={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
  );
  
  }