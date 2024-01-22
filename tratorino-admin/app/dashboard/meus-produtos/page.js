"use client";

import Header from "@/app/component/header";
import { useRouter } from "next/navigation";

export default function novo() {
  const router = useRouter();

  return (
    <div className="h-auto w-screen flex flex-col">
      <Header text="Meus Produto" onClick={() => router.back()} />
    </div>
  );
}
