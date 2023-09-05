'use client'
import Image from "next/image";
import { useState } from "react";

type ResidueCardProps = {
  name: string;
  image: string;
}

export default function ResidueCard({ name, image }: ResidueCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className={`h-40 border rounded flex flex-col justify-center items-center gap-5
       bg-tertiary ${isChecked ? 'border-primary' : ''}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <div className="relative h-2/5 w-full">
        <Image src={`/${image}`} fill alt={image} />
      </div>
      <h6 className="text-center">{name}</h6>
    </div>
  )
}