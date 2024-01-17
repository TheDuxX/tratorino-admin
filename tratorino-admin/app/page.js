import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-between">
      <Image src="/images/logo-tratorino.png" width={300} height={300} alt="Logo Tratorino"/>
      <div className="w-[330px] h-[220px] mb-[55px] bg-yellow-400"> 
        
      </div>

    </div>
  );
}
