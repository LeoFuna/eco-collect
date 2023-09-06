'use client';
import dynamic from "next/dynamic";
import FormInput from "./FormInput";
import { ChangeEventHandler } from "react";
import { isValidValue } from "@/utils/input.utils";
const DynamicMap = dynamic(() => import('@/components/Map'), { ssr: false });

// Utilizado nesse momento para rerenderizar o mapa e garantir que nao tenhamos o problema de já ter instancia do Map Container
// Situaçao possui algumas issues na lib sobre isso.
const random = Math.ceil((Math.random() * 100));

export default function AddressFieldset({ onChange }: { onChange: ChangeEventHandler<HTMLInputElement> }) {
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
      <div className="fieldset-title-div">
        <h2 className="fieldset-title">Endereço</h2>
        <p className="fieldset-p">Selecione o endereço no mapa</p>
      </div>
      <DynamicMap key={random} onChange={onChange} />
      <div className="flex w-full gap-6 mt-6">
        <FormInput
          label="Número"
          inputProps={{
            type: 'text',
            "aria-label": 'number',
            name: 'number',
            onChange: onInputChange,
          }}
          className="w-40"
        />
        <FormInput
          label="Cidade"
          inputProps={{
            type: 'text',
            "aria-label": 'city',
            name: 'city',
            onChange: onInputChange,
          }}
          className="w-full"
        />
      </div>
      <FormInput
        label="Estado"
        inputProps={{
          type: 'text',
          "aria-label": 'state',
          name: 'uf',
          onChange: onInputChange,
        }}
        className="w-96"
      />
    </fieldset>
  )
}