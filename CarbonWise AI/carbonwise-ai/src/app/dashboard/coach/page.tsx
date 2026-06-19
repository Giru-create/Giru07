"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send, User } from "lucide-react";

const MOCK_RESPONSES: Record<string, string> = {
  default: "Great question! Reducing your carbon footprint starts with understanding your biggest emission sources. I recommend tracking your transport, energy, and diet — those account for 80% of most people's footprint.",
  transport: "Transportation is one of the biggest carbon sources. Try using public transit, cycling, or carpooling a few days a week. Even one car-free day can save 2-4 kg CO₂ per week!",
  energy: "For energy savings: switch to LED bulbs, set your thermostat 1-2°C lower in winter, and consider a renewable energy plan with your utility provider. These changes alone can cut home emissions by 20%.",
  food: "Diet matters more than most people think. Reducing beef consumption just once a week saves ~500 kg CO₂ per year. Try plant-based Mondays — it's a great start!",
  solar: "Solar panels are an excellent long-term investment! A typical home system pays back in 6-8 years and lasts 25+ years. Check if your government offers installation subsidies.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("transport") || lower.includes("car") || lower.includes("driv")) return MOCK_RESPONSES.transport;
  if (lower.includes("energy") || lower.includes("electric") || lower.includes("power")) return MOCK_RESPONSES.energy;
  if (lower.includes("food") || lower.includes("diet") || lower.includes("meat") || lower.includes("vegan")) return MOCK_RESPONSES.food;
  if (lower.includes("solar") || lower.includes("panel") || lower.includes("renewable")) return MOCK_RESPONSES.solar;
  return MOCK_RESPONSES.default;
}

interface Message { id: number; role: "user" | "assistant"; content: string; }

export default function CoachPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", content: "Hi! I'm your personal Carbon Coach 🌱 Ask me anything about reducing your footprint — transport, energy, diet, or green tech!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { id: Date.now(), role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setTimeout(() => {
      const reply: Message = { id: Date.now() + 1, role: "assistant", content: getResponse(userMsg.content) };
      setMessages(prev => [...prev, reply]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto h-[80vh] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <Bot className="h-8 w-8 text-green-500" /> AI Carbon Coach
        </h1>
        <p className="text-zinc-400">Ask me anything about your footprint or reduction strategies!</p>
      </div>
      <Card className="flex-1 flex flex-col overflow-hidden border-zinc-800 bg-zinc-900/50">
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`flex gap-3 max-w-[80%] ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-blue-600" : "bg-green-600"}`}>
                  {m.role === "user" ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
                </div>
                <div className={`px-4 py-2 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-zinc-800 text-zinc-100 rounded-tl-none"}`}>
                  {m.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 bg-green-600">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-zinc-800 rounded-tl-none flex gap-1 items-center">
                  <span className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:0ms]" />
                  <span className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:150ms]" />
                  <span className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </CardContent>
        <CardFooter className="p-4 border-t border-zinc-800 bg-zinc-950/80">
          <form onSubmit={handleSubmit} className="flex w-full gap-2">
            <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about reducing your carbon footprint..." className="flex-1 bg-zinc-900 border-zinc-700 text-white" />
            <Button type="submit" disabled={isLoading} className="bg-green-600 hover:bg-green-700">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
