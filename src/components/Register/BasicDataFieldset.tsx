'use client';

import { ChangeEventHandler } from "react";
import FormInput from "./FormInput";

export default function BasicDataFieldSet({ onChange }: { onChange: ChangeEventHandler<HTMLInputElement> }) {

  return (
    <fieldset>
      <h2 className="fieldset-title">Dados</h2>
      <FormInput
        label="Nome do ponto"
        inputProps={{
          type: 'text',
          "aria-label":'Collect point name',
          name: 'name',
          onChange,
        }}
      />
      <FormInput
        label="E-mail"
        inputProps={{
          type: 'text',
          "aria-label": 'Email',
          name: 'email',
          onChange,
        }}
      />
      <FormInput
        label="Whatsapp"
        inputProps={{
          type: 'text',
          "aria-label": 'Whatsapp',
          name: 'whatsapp',
          onChange,
        }}
        className="w-3/6"
      />
    </fieldset>
  )
}