'use client';

import FormInput from "@/components/Register/FormInput";
import dynamic from "next/dynamic";
import { FiUpload } from "react-icons/fi";

const DynamicMap = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Register() {
  return (
    <main className="px-96 py-40 flex justify-center w-screen">
      <form className="bg-white p-16 w-full">
        {/* Título */}
        <h1 className="text-3xl font-bold">Cadastro do ponto de coleta</h1>
        {/* Upload */}
        <fieldset className="w-full bg-tertiary h-80 p-8 my-16 rounded-md">
          <div className="rounded-md border border-primary border-dashed h-full flex flex-col justify-center items-center gap-4">
            <button className="text-primary">
              <FiUpload size={24} />
            </button>
            <h6>Imagem do estabelecimento</h6>
          </div>
        </fieldset>
        {/* Formulário de Dados */}
        <div>
          <fieldset>
            <h2 className="text-2xl font-bold mb-8">Dados</h2>
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
          <fieldset>
            <h2 className="text-2xl font-bold my-8">Endereço</h2>
            <DynamicMap />
            <div className="flex w-full gap-6 mt-6">
              <FormInput
                label="Número"
                inputProps={{ type: 'text', "aria-label": 'number' }}
                className="w-40"
              />
              <FormInput
                label="Cidade"
                inputProps={{ type: 'text', "aria-label": 'city' }}
                className="w-full"
              />
            </div>
            <FormInput
              label="Estado"
              inputProps={{ type: 'text', "aria-label": 'state' }}
              className="w-96"
            />
          </fieldset>

          <fieldset>
            <h2 className="text-2xl font-bold my-8">Itens de coleta</h2>
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="h-40 bg-green-500 border rounded"></div>
              <div className="h-40 bg-green-500 border rounded"></div>
              <div className="h-40 bg-green-500 border rounded"></div>
              <div className="h-40 bg-green-500 border rounded"></div>
              <div className="h-40 bg-green-500 border rounded"></div>
              <div className="h-40 bg-green-500 border rounded"></div>
            </div>
          </fieldset>
        </div>
        <button className="p-4 mt-16 bg-primary block ml-auto">Cadastrar ponto de coleta</button>
      </form>
    </main>
  )
}