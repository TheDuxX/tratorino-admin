'use client'

import Button from "../component/button";

export default function Page() {
  return (
    <div>
      <header className="w-screen bg-white h-[60px] flex items-center justify-center shadow-md">
        <button className="p-2 rounded-md absolute left-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h1 className="font-medium">Esqueceu sua senha?</h1>
      </header>
      <div className="mx-[24px] mt-[20px]">
        <p className="text-sm text-justify	">
          Por favor, indique o seu endereço de e-mail cadastrado. Você receberá
          um link para criar uma nova senha.
        </p>
        <input
          type="text"
          className="w-full h-[48px] mt-[20px] p-2 border border-gray-300 rounded-md"
          placeholder="Digite seu e-mail"
        />
        <div className="mt-[20px]"><Button text="Enviar" onClick={() => console.log("Button clicked!")}/></div>
      </div>
    </div>
  );
}
