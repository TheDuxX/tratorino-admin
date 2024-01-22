"use client";

import Header from "@/app/component/header";
import { useRouter } from "next/navigation";

export default function novo() {
  const router = useRouter();

  return (
    <div>
      <Header text="Configurações" onClick={() => router.back()} />
    </div>
  );
}
