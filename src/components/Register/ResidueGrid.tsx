import { IResidue } from "@/entities/Residue";
import ResidueCard from "./ResidueCard";
import { ChangeEventHandler, useEffect, useState } from "react";

type ResidueGridProps = {
  residues: IResidue[];
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function ResidueGrid({ residues, onChange }: ResidueGridProps) {
  const [selectedResidues, setSelectedResidues] = useState<number[]>([]);

  useEffect(() => {
    onChange({ target: { name: 'residues', value: selectedResidues } } as any);
  }, [selectedResidues]);

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {residues.map(residue => (
        <ResidueCard
          key={residue.id}
          id={residue?.id || 0}
          image={residue.image}
          name={residue.name}
          setSelectedResidues={setSelectedResidues}
        />
      ))}
    </div>
  )
}