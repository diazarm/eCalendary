import React from "react";
import {Textarea} from "@nextui-org/react";

//Textarea

export function Textarea1() {

    return (
      <Textarea
        label="Nombre de usuario"
        labelPlacement="outside"
        placeholder="Descripcion"
        className="max-w-xs"
      />
  );
}



