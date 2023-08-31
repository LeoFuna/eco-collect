'use client'

import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex mt-11 ml-40 fixed">
        <div className="relative w-44 h-11">
          <Image src='/logo.svg' fill priority alt="Ecoleta logo" />
        </div>
      </div>
    </header>
  )
}