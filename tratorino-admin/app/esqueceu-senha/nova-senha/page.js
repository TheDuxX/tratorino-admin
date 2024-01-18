"use client";
import Header from "@/app/component/header";
import Button from "@/app/component/button";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <Header text="Nova senha" onClick={() => router.back()} />
      <div className="mx-[24px] mt-[20px] flex flex-col justify-center gap-3">
        <input type="text" placeholder="Nova senha" className="w-full h-[48px] p-2 border border-strokes rounded-md text-sm" />
        <input type="text" placeholder="Repita a nova senha" className="w-full h-[48px] p-2 border border-strokes rounded-md text-sm"/>
        <Button
            text="Redefinir"
            onClick={() => router.push("/")}
          />
      </div>
    </div>
  );
}
