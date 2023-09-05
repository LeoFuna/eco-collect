'use client';
import { IResidue } from "@/entities/Residue";
import ResidueGrid from "./ResidueGrid";
import { ChangeEventHandler } from "react";

type ResidueFieldsetProps = {
  residues: IResidue[];
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function ResiduesFieldset({ residues, onChange }: ResidueFieldsetProps) {
  return (
    <fieldset>
      <div className="fieldset-title-div">
        <h2 className="fieldset-title">Itens de coleta</h2>
        <p className="fieldset-p">Selecione um ou mais resíduos abaixo</p>
      </div>
      <ResidueGrid residues={residues} onChange={onChange} />
    </fieldset>
  )
}