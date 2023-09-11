'use client';
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { FiUpload } from "react-icons/fi";

type BeforeUploadTypes = {
  onUpload: (event: ChangeEvent<HTMLInputElement>) => void
}

const BeforeUploadElement = ({ onUpload }: BeforeUploadTypes) => {
  return (
    <>
      <label className="text-primary hover:cursor-pointer">
        <input hidden type="file" alt="upload-point-img" onChange={onUpload} accept="image/jpeg, image/png" />
        <FiUpload size={24} />
      </label>
      <h6>Imagem do estabelecimento</h6>
    </>
  )
}

export default function ImageUploadFieldset({ onChange }: { onChange: (event: any) => void }) {
  const [collectPointImage, setCollectPointImage] = useState<string | null>();
  const onUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    const collectPointImg = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageInBase64 = reader.result;
      onChange({ target: { name: 'image', value: imageInBase64 } })
      setCollectPointImage(imageInBase64 as string);
    };
    reader.readAsDataURL(collectPointImg);
  }

  const onRemoveImage = () => {
    onChange({ target: { name: 'image', value: null } });
    setCollectPointImage(null);
  }

  return (
    <fieldset className="upload-fieldset">
      <div className="upload-box">
        {collectPointImage ? 
            <Image
              className="hover:cursor-pointer"
              onClick={onRemoveImage}
              src={collectPointImage}
              alt="Collect Point image"
              fill
            />
            : <BeforeUploadElement onUpload={onUploadImage} />
        }
      </div>
    </fieldset>
  )
}