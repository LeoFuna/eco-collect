import Image from "next/image";
import { FiLogIn } from "react-icons/fi";

export default function Home() {
  return (
    <main className="w-screen h-screen flex">
      <div className="m-40 flex w-full justify-between items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold break-words leading-snug">Seu marketplace</h1>
          <h1 className="text-5xl font-extrabold break-words leading-snug">de coleta de resíduos.</h1>
          <p className="my-10 text-2xl leading-snug max-w-xl">Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <button className="rounded-lg w-4/6 text-white flex items-center bg-secondary hover:opacity-90">
            <div className="p-6">
              <FiLogIn size={22} />
            </div>
            <strong className="p-6 w-full bg-primary rounded-r-lg">Cadastre um ponto de coleta</strong>
          </button>
        </div>
        <div className="relative w-4/6 min-w-40 h-full mt-36">
          <Image src='/home-background.svg' priority fill alt="teste" />
        </div>
      </div>
    </main>
  )
}
