'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import './header.css';

export default function Header({ showBackButton = false }) {
  const router = useRouter();
  return (
    <header>
        <div className="logo">
          <Image src='/logo.svg' fill priority alt="Ecoleta logo" />
        </div>
        { showBackButton && (
        <button onClick={router.back} className="prev-button">
          <span><FiArrowLeft size={20} /></span>
          <strong>Voltar para home</strong>
        </button>
        )}
    </header>
  )
}