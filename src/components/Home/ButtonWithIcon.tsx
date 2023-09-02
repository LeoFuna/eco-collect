'use client'

import { useRouter } from "next/navigation"
import { FiLogIn } from "react-icons/fi"

export default function ButtonWithIcon() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/register')} className="hero-button">
      <div><FiLogIn size={22} /></div>
      <strong>Cadastre um ponto de coleta</strong>
    </button>
  )
}