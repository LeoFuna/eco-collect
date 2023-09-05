'use client'
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

type ResidueCardProps = {
  id: number;
  name: string;
  image: string;
  setSelectedResidues: Dispatch<SetStateAction<number[]>>;
}

export default function ResidueCard({ id, name, image, setSelectedResidues }: ResidueCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  const borderColor = isChecked ? 'border-primary' : 'border-inherit';

  const handleClickCard = () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    setSelectedResidues(prevState => {
      if (newCheckedStatus) return [...prevState, id];
      return prevState.filter(residueId => residueId !== id);
    });
  }

  return (
    <div
      className={`residue-card ${borderColor}`}
      onClick={handleClickCard}
    >
      <div className="relative h-2/5 w-full">
        <Image src={`/${image}`} fill alt={image} />
      </div>
      <h6 className="text-center">{name}</h6>
    </div>
  )
}