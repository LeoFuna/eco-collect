'use client';
import { ChangeEventHandler } from "react";
import FormInput from "./FormInput";
import { isValidValue } from "@/utils/input.utils";

export default function BasicDataFieldSet({ onChange }: { onChange: ChangeEventHandler<HTMLInputElement> }) {

  const onInputChange = (event: any) => {
    const target = event.target as HTMLInputElement;
    const { value } = target;

    if (isValidValue(target.name, target.value)) {
      onChange(event);
      return;
    }
    event.target.value = value.slice(0, -1);
  }

  return (
    <fieldset>
      <h2 className="fieldset-title">Dados</h2>
      <FormInput
        label="Nome do ponto"
        inputProps={{
          type: 'text',
          "aria-label":'Collect point name',
          name: 'name',
          onChange: onInputChange,
        }}
      />
      <FormInput
        label="E-mail"
        inputProps={{
          type: 'email',
          "aria-label": 'Email',
          name: 'email',
          onChange: onInputChange,
        }}
      />
      <FormInput
        label="Whatsapp"
        inputProps={{
          type: 'text',
          "aria-label": 'Whatsapp',
          name: 'whatsapp',
          onChange: onInputChange,
        }}
        className="w-3/6"
      />
    </fieldset>
  )
}