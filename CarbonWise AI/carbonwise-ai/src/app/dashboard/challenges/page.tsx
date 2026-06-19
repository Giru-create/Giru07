"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Zap, Clock, CheckCircle, Award } from "lucide-react";

const MOCK_CHALLENGES = [
  { id: 1, title: "No-Car Monday", desc: "Use public transport or bike instead of your car.", progress: 100, max: 100, xp: 50, gp: 20, type: "Weekly", status: "completed" },
  { id: 2, title: "Plant 5 Trees", desc: "Participate in a tree plantation drive and verify via photo.", progress: 3, max: 5, xp: 200, gp: 100, type: "Monthly", status: "active" },
  { id: 3, title: "Energy Saver Week", desc: "Keep daily electricity usage below 5 kWh for 7 days.", progress: 4, max: 7, xp: 150, gp: 75, type: "Weekly", status: "active" }
];

const MOCK_BADGES = [
  { name: "First Verification", icon: "🌱", earned: true },
  { name: "Eco Explorer", icon: "🌍", earned: true },
  { name: "Carbon Crusher", icon: "🔨", earned: false },
  { name: "Green Hero", icon: "🦸‍♂️", earned: false },
];

export default function ChallengesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <Target className="h-8 w-8 text-blue-500" /> Challenges & Achievements
          </h1>
          <p className="text-zinc-400 mt-1">Complete tasks to earn Green Points and level up.</p>
        </div>
      </div>

      {/* Badges Section */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Award className="h-5 w-5 text-amber-500" /> My Badges
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {MOCK_BADGES.map((badge, idx) => (
            <Card key={idx} className={`bg-zinc-900 border-zinc-800 flex flex-col items-center p-6 text-center ${!badge.earned && 'opacity-50 grayscale'}`}>
              <div className="text-4xl mb-2">{badge.icon}</div>
              <h3 className="font-semibold text-zinc-100">{badge.name}</h3>
              {badge.earned && <span className="text-xs text-green-500 mt-1 flex items-center gap-1 justify-center"><CheckCircle className="h-3 w-3" /> Unlocked</span>}
            </Card>
          ))}
        </div>
      </div>

      {/* Challenges Section */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-500" /> Active Challenges
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {MOCK_CHALLENGES.map((c) => (
            <Card key={c.id} className="bg-zinc-900 border-zinc-800 flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-zinc-800 text-zinc-400 mb-2 inline-block">{c.type}</span>
                    <CardTitle className="text-lg text-white">{c.title}</CardTitle>
                  </div>
                  {c.status === 'completed' && <CheckCircle className="h-6 w-6 text-green-500" />}
                </div>
                <p className="text-sm text-zinc-400 mt-1">{c.desc}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Progress</span>
                    <span className="text-white font-medium">{c.progress} / {c.max}</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 transition-all" style={{ width: `${(c.progress / c.max) * 100}%` }} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t border-zinc-800 bg-zinc-950/30 flex justify-between">
                <div className="flex gap-4">
                  <span className="flex items-center text-sm text-blue-400 font-medium">
                    +{c.xp} XP
                  </span>
                  <span className="flex items-center text-sm text-amber-500 font-medium">
                    <Zap className="h-3 w-3 mr-1" /> +{c.gp} GP
                  </span>
                </div>
                {c.status !== 'completed' && (
                  <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800">
                    Verify Action
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
