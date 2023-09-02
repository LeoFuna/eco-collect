import Image from "next/image";
import './home.css';
import ButtonWithIcon from "@/components/Home/ButtonWithIcon";

export default function Home() {
  return (
    <main className="w-screen h-screen flex">
      <div className="main-content">
        <div className="hero-informations">
          <h1 className="hero-title">Seu marketplace</h1>
          <h1 className="hero-title">de coleta de resíduos.</h1>
          <p className="hero-subtitle">
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </p>
          <ButtonWithIcon />
        </div>
        <div className="hero-banner">
          <Image
            src='/home-background.svg'
            priority
            fill
            alt="home image background"
          />
        </div>
      </div>
    </main>
  )
}
