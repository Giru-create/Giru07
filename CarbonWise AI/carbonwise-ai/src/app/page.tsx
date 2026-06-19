import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
      <Leaf className="h-16 w-16 text-green-500 mb-6" />
      <h1 className="text-5xl font-bold mb-4">CarbonWise AI</h1>
      <p className="text-xl text-zinc-400 mb-8">Your personal AI sustainability platform.</p>
      <Link href="/onboarding">
        <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
          Start Prototype Demo
        </Button>
      </Link>
    </div>
  );
}
