'use client';
import { MouseEventHandler, useState } from "react";
import AddressFieldset from "./AddressFieldset";
import BasicDataFieldSet from "./BasicDataFieldset";
import ImageUploadFieldset from "./ImageUploadFieldset";
import ResiduesFieldset from "./ResiduesFieldset";
import { IResidue } from "@/entities/Residue";
import { ICollectPointToCreate } from "@/entities/CollectPoint";
import SuccessNotification from "./SuccessNotification";

type formData = {
  name?: string;
  email?: string;
  whatsapp?: string;
  image?: string;
  uf?: string;
  city?: string;
  latLng?: number[];
  residues?: number[];
}

export default function RegisterForm({ residues }: { residues: IResidue[] }) {
  const [formData, setFormData] = useState<formData>({});
  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);
  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();

    const collectPointToCreate: ICollectPointToCreate = {
      name: formData?.name || '',
      email: formData?.email ||  '',
      whatsapp: formData?.whatsapp || '',
      image: formData?.image || '',
      uf: formData?.uf || '',
      city: formData?.city || '',
      latitude: formData?.latLng ? formData?.latLng[0] : 0,
      longitude: formData?.latLng ? formData?.latLng[1] : 0,
      residues: formData?.residues || []
    }

    const response = await fetch('http://localhost:3000/api/collect-points', {
        method: 'POST',
        body: JSON.stringify(collectPointToCreate),
      }).then(response => response.json());
    //TO DO: Create a snackbar component to show error message
    if (response?.error) return alert('Erro ao cadastrar ponto de coleta');
    setOpenBackdrop(true);
  }

  const onChangeInput = (event: any) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      <form>
        <h1 className="form-title">Cadastro do ponto de coleta</h1>
        <ImageUploadFieldset onChange={onChangeInput} />

        <BasicDataFieldSet onChange={onChangeInput} />

        <AddressFieldset onChange={onChangeInput} />

        <ResiduesFieldset residues={residues} onChange={onChangeInput} />
        <button className="submit-button" type="submit" onClick={onSubmit}>
          Cadastrar ponto de coleta
        </button>
      </form>
      {openBackdrop && <SuccessNotification />}
    </>
  )
}