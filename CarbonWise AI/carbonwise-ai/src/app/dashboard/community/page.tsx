"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Heart, MessageCircle, Share2, Award, Trophy } from "lucide-react";

const MOCK_POSTS = [
  { id: 1, user: "Sarah Jenkins", avatar: "SJ", level: "Green Hero", time: "2 hours ago", content: "Just completed the 'Plant 5 Trees' challenge! Feeling great about giving back to nature. 🌱🌍", likes: 24, comments: 5 },
  { id: 2, user: "David Chen", avatar: "DC", level: "Eco Explorer", time: "5 hours ago", content: "Switched to a fully vegan diet this week. My daily footprint dropped by almost 40%. Highly recommend the switch if you're on the fence!", likes: 89, comments: 12 },
  { id: 3, user: "Emma Watson", avatar: "EW", level: "Sustainability Champion", time: "1 day ago", content: "Successfully lobbied my office to install solar panels! It took 6 months of presenting data but we finally did it. ☀️🔋", likes: 342, comments: 45 },
];

const LEADERBOARD = [
  { rank: 1, user: "Emma Watson", score: 98, gp: 12450 },
  { rank: 2, user: "Leo DiCaprio", score: 95, gp: 11200 },
  { rank: 3, user: "Sarah Jenkins", score: 88, gp: 8400 },
  { rank: 4, user: "You", score: 78, gp: 1250 },
  { rank: 5, user: "David Chen", score: 72, gp: 900 },
];

export default function CommunityPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <Users className="h-8 w-8 text-green-500" /> Community
          </h1>
          <p className="text-zinc-400 mt-1">Connect, share, and compete with other eco-warriors.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Main Feed */}
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-4 flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-400 shrink-0">ME</div>
              <Input placeholder="Share your latest eco-action..." className="flex-1 bg-zinc-950 border-zinc-800 text-white" />
              <Button className="bg-green-600 hover:bg-green-700">Post</Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {MOCK_POSTS.map(post => (
              <Card key={post.id} className="bg-zinc-900 border-zinc-800">
                <CardHeader className="pb-3 flex flex-row items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center font-bold shrink-0">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-white">{post.user}</h3>
                      <span className="text-xs text-zinc-500">{post.time}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Award className="h-3 w-3 text-amber-500" />
                      <span className="text-xs text-amber-500">{post.level}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-zinc-300">
                  <p>{post.content}</p>
                </CardContent>
                <CardFooter className="pt-3 border-t border-zinc-800 flex gap-6 text-zinc-400">
                  <button className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                    <Heart className="h-4 w-4" /> {post.likes}
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <MessageCircle className="h-4 w-4" /> {post.comments}
                  </button>
                  <button className="flex items-center gap-2 hover:text-green-500 transition-colors ml-auto">
                    <Share2 className="h-4 w-4" />
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar / Leaderboard */}
        <div className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800 sticky top-6">
            <CardHeader className="pb-4 border-b border-zinc-800">
              <CardTitle className="text-white flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-500" /> Global Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-zinc-800">
                {LEADERBOARD.map(user => (
                  <div key={user.rank} className={`flex items-center justify-between p-4 ${user.user === 'You' ? 'bg-zinc-800/50 border-l-2 border-green-500' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`font-bold w-5 text-center ${user.rank === 1 ? 'text-amber-400' : user.rank === 2 ? 'text-zinc-300' : user.rank === 3 ? 'text-amber-700' : 'text-zinc-500'}`}>
                        {user.rank}
                      </div>
                      <div className="font-medium text-zinc-200">{user.user}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-400">{user.score}</div>
                      <div className="text-xs text-zinc-500">{user.gp} GP</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 border-t border-zinc-800">
              <Button variant="outline" className="w-full border-zinc-700 text-zinc-300">View All Rankings</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
