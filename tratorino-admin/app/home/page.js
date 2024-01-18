"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Pesquisar from "../component/pesquisar";

export default function home() {
  return (
    <div className="bg-zinc-50 h-screen" >
        <Pesquisar />
        <div className="mx-[24px] mt-[10px]">
            <p className="text-[16px]">Produtos</p>
            <div className="bg-white w-full h-[200px] mt-[5px] rounded-[10px] shadow-md">

            </div>
        </div>
    </div>
  );
}
