"use client";

import Camera from "@/app/component/camera";
import Header from "@/app/component/header";
import { useRouter } from "next/navigation";

export default function fotos() {
  const router = useRouter();

  return (
    <div className="h-screen bg-gradient-to-b from-terciary via-white to-terciary">
      <Header text="Inserir foto" onClick={() => router.back()} />
      <div className="flex flex-col items-center mt-[50%]">
        <div className="w-[325px] h-auto flex flex-col gap-2">
          <button className="h-[50px] bg-primary rounded-full text-white">
            Tirar foto
          </button>
          <div className="h-[50px] bg-white border-[1px] border-secundary text-secundary rounded-full flex justify-center items-center" >Selecionar da galeria<input type="file" className="hidden" /></div>
        </div>
      </div>
    </div>
  );
}
