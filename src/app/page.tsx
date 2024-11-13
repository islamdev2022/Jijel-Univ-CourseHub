import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 gap-8 justify-items-center">
        <Image
          src="/logo.svg"
          alt="Jijel University Logo"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-bold text-center">Jijel Univ CourseHub</h1>
        <p className="text-lg text-center">
          This website is for university of jijel students that contains courses
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
