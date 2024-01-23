"use client";

import Header from "@/app/component/header";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function novo() {
  const router = useRouter();

  return (
    <div className="h-auto w-screen flex flex-col gap-2">
      <Header text="Cadastrar Produto" onClick={() => router.back()} />
      <form className="flex flex-col mx-6">
        {/* Adicionar imagem  */}

        <div className="flex items-center justify-center w-full">
          <label
            className="border-[2px] border-secundary border-dashed rounded-[10px] w-[155px] h-[155px] flex justify-center items-center"
            for="dropzone-file"
          >
            <Link href="/dashboard/criar-produto/inserir-foto">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8333 10.4167C20.8333 10.9692 20.6138 11.4991 20.2231 11.8898C19.8324 12.2805 19.3025 12.5 18.75 12.5H12.5V18.75C12.5 19.3025 12.2805 19.8324 11.8898 20.2231C11.4991 20.6138 10.9692 20.8333 10.4167 20.8333C9.86413 20.8333 9.33423 20.6138 8.94353 20.2231C8.55283 19.8324 8.33333 19.3025 8.33333 18.75V12.5H2.08333C1.5308 12.5 1.0009 12.2805 0.610195 11.8898C0.219494 11.4991 0 10.9692 0 10.4167C0 9.86413 0.219494 9.33423 0.610195 8.94353C1.0009 8.55283 1.5308 8.33333 2.08333 8.33333H8.33333V2.08333C8.33333 1.5308 8.55283 1.0009 8.94353 0.610195C9.33423 0.219494 9.86413 0 10.4167 0C10.9692 0 11.4991 0.219494 11.8898 0.610195C12.2805 1.0009 12.5 1.5308 12.5 2.08333V8.33333H18.75C19.3025 8.33333 19.8324 8.55283 20.2231 8.94353C20.6138 9.33423 20.8333 9.86413 20.8333 10.4167Z"
                  fill="#374957"
                />
              </svg>
            </Link>
            
          </label>
        </div>

        {/* Nome do produto  */}
        <label name="nome" className="text-sm font-normal mt-[10px] mb-[5px]">
          Nome do produto{" "}
        </label>
        <input
          type="text"
          placeholder="Insira o nome do produto"
          name="nome"
          className="w-[325px] h-[35px] rounded-[5px] text-xs font-light bg-strokes pl-2 "
        />

        {/* Categoria */}
        <label
          name="categoria"
          className="text-sm font-normal mt-[10px] mb-[5px]"
        >
          Categoria
        </label>
        <input
          list="categoria"
          placeholder="Selecione uma opção"
          className="w-[325px] h-[35px] rounded-[5px] text-xs font-light bg-strokes pl-2 "
        />
        <datalist id="categoria" name="categoria">
          <option value="categoria1"></option>
          <option value="categoria2"></option>
          <option value="categoria3"></option>
          <option value="categoria4"></option>
          <option value="categoria5"></option>
        </datalist>

        {/* Marca */}
        <label name="marca" className="text-sm font-normal mt-[10px] mb-[5px]">
          Marca
        </label>
        <input
          list="marca"
          placeholder="Selecione uma opção"
          className="w-[325px] h-[35px] rounded-[5px] text-xs font-light bg-strokes pl-2 "
        />
        <datalist id="marca" name="categoria">
          <option value="marca 1"></option>
          <option value="marca 2"></option>
          <option value="marca 3"></option>
          <option value="marca 4"></option>
          <option value="marca 5"></option>
        </datalist>

        {/* Preço unitário e referência  */}
        <div className="flex justify-between">
          <div className="flex flex-col text-sm font-normal mt-[10px] mb-[5px] ">
            <label name="preco">Preço Unitário</label>
            <input
              type="number"
              placeholder="R$ 0,00"
              name="preco"
              className="w-[150px] h-[35px] rounded-[5px] text-xs font-light bg-strokes pl-2 "
            />
          </div>
          <div className="flex flex-col text-sm font-normal mt-[10px] mb-[5px]">
            <label name="ref">Referência</label>
            <input
              type="text"
              placeholder="Insira o cód de ref"
              name="ref"
              className="w-[150px] h-[35px] rounded-[5px] text-xs font-light bg-strokes pl-2 "
            />
          </div>
        </div>

        {/* Preço com desconto e preço no pix */}
        <div className="flex justify-between">
          <div className="flex flex-col text-sm font-normal mt-[10px] mb-[5px]">
            <label name="preco">Preço com Desconto</label>
            <input
              type="number"
              placeholder="R$ 0,00"
              name="preco"
              className="w-[150px] h-[35px] rounded-[5px] text-xs font-light bg-strokes pl-2 "
            />
          </div>
          <div className="flex flex-col text-sm font-normal mt-[10px] mb-[5px]">
            <label name="ref">Preço no Pix</label>
            <input
              type="text"
              placeholder="R$ 0,00"
              name="ref"
              className="w-[150px] h-[35px] rounded-[5px] text-xs font-light bg-strokes pl-2 "
            />
          </div>
        </div>
        <label
          name="descricao"
          className="text-sm font-normal mt-[10px] mb-[5px]"
        >
          Descrição{" "}
        </label>
        <textarea
          name="descricao"
          placeholder="Descrição do produto"
          minlength="20"
          maxlength="255"
          className="w-[325px] h-[70px] rounded-[5px] text-xs font-light bg-strokes pl-2 pt-2"
        />
        <div className="w-full gap-5 h-[50px] flex mt-[10px]">
          <button
            type="reset"
            className="w-full bg-white border border-secundary text-secundary rounded-[5px]"
          >
            Limpar
          </button>
          <button
            type="submit"
            className="w-full bg-primary rounded-[5px] text-white"
          >
            Cadastrar
          </button>
        </div>
      </form>
      <div className="h-[75px] w-full"></div>
    </div>
  );
}
