"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Check, X, AlertTriangle, Users } from "lucide-react";

const PENDING_VERIFICATIONS = [
  { id: 1, user: "John Doe", activity: "Tree Plantation", confidence: 92, image: "tree.jpg", date: "2 hours ago" },
  { id: 2, user: "Jane Smith", activity: "Recycling Station", confidence: 45, image: "recycle.jpg", date: "5 hours ago" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          <ShieldAlert className="h-8 w-8 text-red-500" /> Admin Console
        </h1>
        <p className="text-zinc-400 mt-1">Manage users, review low-confidence AI verifications, and monitor platform health.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" /> Verification Review Queue
            </CardTitle>
            <CardDescription>AI confidence below 80% requires manual review.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {PENDING_VERIFICATIONS.map(v => (
              <div key={v.id} className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-zinc-200">{v.activity}</h4>
                  <p className="text-sm text-zinc-400">By {v.user} • {v.date}</p>
                  <p className="text-xs mt-1 font-mono text-amber-500">AI Confidence: {v.confidence}%</p>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" className="h-8 w-8 bg-green-600 hover:bg-green-700">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button size="icon" className="h-8 w-8 bg-red-600 hover:bg-red-700">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" /> Platform Statistics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                 <p className="text-sm text-zinc-400">Total Users</p>
                 <p className="text-2xl font-bold text-white mt-1">1,245</p>
               </div>
               <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                 <p className="text-sm text-zinc-400">Total Carbon Offset</p>
                 <p className="text-2xl font-bold text-green-400 mt-1">45.2 Tons</p>
               </div>
               <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                 <p className="text-sm text-zinc-400">Active Challenges</p>
                 <p className="text-2xl font-bold text-white mt-1">12</p>
               </div>
               <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-800">
                 <p className="text-sm text-zinc-400">Reported Posts</p>
                 <p className="text-2xl font-bold text-red-400 mt-1">3</p>
               </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
