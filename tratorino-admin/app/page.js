import Image from "next/image";
import Link from 'next/link'

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between">
      <div className="h-[530px] items-center justify-center flex">
        <Image
          src="/images/logo-tratorino.png"
          width={400}
          height={400}
          alt="Logo Tratorino"
        />
      </div>
      <form action="" className="w-[330px] h-[220px] mb-[55px] flex items-center justify-center flex-col gap-2">
        <input
          type="text"
          className="w-full h-[48px] rounded-md border-[1px] border-strokes px-3 text-sm"
          placeholder="E-mail"
        />
        <div className="w-full flex flex-col gap-2">
          <input
            type="password"
            className="w-full h-[48px] rounded-md border-[1px] border-strokes px-3 text-sm"
            placeholder="Senha"
          />
          <Link href="/esqueceu-a-senha">
            <p className="text-sm text-primary">Esqueceu sua senha?</p>
          </Link>
        </div>
        <button className="bg-primary w-[220px] h-[60px] rounded-[48px] text-white font-semibold tracking-wider text-lg">
           Login
        </button>
      </form>
    </div>
  );
}
