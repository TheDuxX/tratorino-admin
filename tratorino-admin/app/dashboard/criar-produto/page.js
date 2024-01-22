"use client";

import Header from "@/app/component/header";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/react";

export default function novo() {
  const router = useRouter();

  return (
    <div className="h-auto w-screen flex flex-col gap-2">
      <Header text="Cadastrar Produto" onClick={() => router.back()} />
      <form className="flex flex-col mx-6">
        <input type="file" placeholder="Nome" name="imagens" />
        <label name="nome">Nome do produto </label>
        <input type="text" placeholder="Insira o nome do produto" name="nome" />
        <label name="categoria">Categoria</label>
        <input list="categoria" placeholder="Selecione uma opção" />
        <datalist id="categoria" name="categoria">
          <option value="categoria1"></option>
          <option value="categoria2"></option>
          <option value="categoria3"></option>
          <option value="categoria4"></option>
          <option value="categoria5"></option>
        </datalist>
        <label name="marca">Marca</label>
        <input list="marca" placeholder="Selecione uma opção" />
        <datalist id="marca" name="categoria">
          <option value="marca 1"></option>
          <option value="marca 2"></option>
          <option value="marca 3"></option>
          <option value="marca 4"></option>
          <option value="marca 5"></option>
        </datalist>
        <div>
          <label name="preco">Preço </label>
          <input type="number" placeholder="Preço" name="preco" />
        </div>
        <label name="descricao">Descrição </label>
        <input type="text" placeholder="Descrição" name="descricao" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
