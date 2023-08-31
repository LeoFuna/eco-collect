import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen flex">
      <div className="m-40 flex w-full justify-between items-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-extrabold break-words leading-snug">Seu marketplace</h1>
          <h1 className="text-6xl font-extrabold break-words leading-snug">de coleta de resíduos.</h1>
          <p className="my-10 text-2xl leading-snug">Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
          <button className="p-5 bg-green-500 rounded-lg text-white">Cadastre um ponto de coleta</button>
        </div>
        <div className="relative w-3/5 min-w-40 h-full">
          <Image src='/home-background.svg' priority fill alt="teste" />
        </div>
      </div>
    </main>
  )
}
