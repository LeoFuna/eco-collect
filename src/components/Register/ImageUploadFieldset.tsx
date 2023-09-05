import { FiUpload } from "react-icons/fi";

export default function ImageUploadFieldset() {
  return (
    <fieldset className="w-full bg-tertiary h-80 p-8 my-16 rounded-md">
      <div className="rounded-md border border-primary border-dashed h-full flex flex-col justify-center items-center gap-4">
        <button className="text-primary">
          <FiUpload size={24} />
        </button>
        <h6>Imagem do estabelecimento</h6>
      </div>
    </fieldset>
  )
}