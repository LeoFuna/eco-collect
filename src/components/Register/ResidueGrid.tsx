import { IResidue } from "@/entities/Residue";
import ResidueCard from "./ResidueCard";

const getResidues = async () => {
  const response = await fetch('http://localhost:3000/api/residues', { cache: 'no-cache' });
  if (!response.ok) throw new Error('Error fetching residues');

  const data = await response.json();
  return data.residues as IResidue[];
}

export default async function ResidueGrid() {
  const residues = await getResidues();

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {residues.map(residue => <ResidueCard key={residue.id} image={residue.image} name={residue.name} />)}
    </div>
  )
}