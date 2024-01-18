"use client";

import Button from "../component/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../component/header";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <Header text="Esqueceu sua senha?" onClick={() => router.back()} />
      <form className="mx-[24px] mt-[20px]" method="post">
        <p className="text-sm text-justify	">
          Por favor, indique o seu endereço de e-mail cadastrado. Você receberá
          um link para criar uma nova senha.
        </p>
        <input
          type="text"
          className="w-full h-[48px] mt-[20px] p-2 border border-strokes rounded-md text-sm"
          placeholder="Digite seu e-mail"
        />
        <div className="mt-[20px]">
          <Button
            text="Enviar"
            onClick={() => router.push("esqueceu-senha/nova-senha")}
          />
        </div>
      </form>
    </div>
  );
}
