'use client';
import dynamic from "next/dynamic";
import FormInput from "./FormInput";
import { ChangeEventHandler } from "react";
const DynamicMap = dynamic(() => import('@/components/Map'), { ssr: false });

// Utilizado nesse momento para rerenderizar o mapa e garantir que nao tenhamos o problema de já ter instancia do Map Container
// Situaçao possui algumas issues na lib sobre isso.
const random = Math.ceil((Math.random() * 100));

export default function AddressFieldset({ onChange }: { onChange: ChangeEventHandler<HTMLInputElement> }) {
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
            onChange,
          }}
          className="w-40"
        />
        <FormInput
          label="Cidade"
          inputProps={{
            type: 'text',
            "aria-label": 'city',
            name: 'city',
            onChange,
          }}
          className="w-full"
        />
      </div>
      <FormInput
        label="Estado"
        inputProps={{
          type: 'text',
          "aria-label": 'state',
          name: 'state',
          onChange,
        }}
        className="w-96"
      />
    </fieldset>
  )
}