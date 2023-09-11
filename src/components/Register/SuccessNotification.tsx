'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function SuccessNotification() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);

  return (
    <div className="register-backdrop animate-fade">
      <FiCheckCircle size={64} className="text-primary" />
      <p className="text-white text-3xl font-bold">
        Cadastro concluído!
      </p>
    </div>
  )
}