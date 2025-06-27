import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-4xl p-4">Hello World</h1>
      <Button variant="destructive" className="hover:bg-red-500 cursor-pointer">Click me</Button>
    </div>
  )
}
