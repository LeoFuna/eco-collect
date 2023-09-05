'use client';

import FormInput from "./FormInput";

export default function BasicDataFieldSet() {
  return (
    <fieldset>
      <h2 className="fieldset-title">Dados</h2>
      <FormInput
        label="Nome do ponto"
        inputProps={{ type: 'text', "aria-label": 'Collect point name' }}
      />
      <FormInput
        label="E-mail"
        inputProps={{ type: 'text', "aria-label": 'Email' }}
      />
      <FormInput
        label="Whatsapp"
        inputProps={{ type: 'text', "aria-label": 'Whatsapp' }}
        className="w-3/6"
      />
    </fieldset>
  )
}