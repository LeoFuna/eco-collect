import AddressFieldset from "@/components/Register/AddressFieldset";
import BasicDataFieldSet from "@/components/Register/BasicDataFieldset";
import ResiduesFieldset from "@/components/Register/ResiduesFieldset";
import ImageUploadFieldset from "@/components/Register/ImageUploadFieldset";
import './register.css';

export default function Register() {
  return (
    <main>
      <form>
        <h1 className="form-title">Cadastro do ponto de coleta</h1>
        <ImageUploadFieldset />

        <BasicDataFieldSet />

        <AddressFieldset />

        <ResiduesFieldset />
        <button className="submit-button" disabled>
          Cadastrar ponto de coleta
        </button>
      </form>
    </main>
  )
}