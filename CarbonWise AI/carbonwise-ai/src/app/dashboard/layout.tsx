import { Leaf, LayoutDashboard, Target, Users, Settings, Bot, FileText, Camera, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 bg-zinc-950/50 backdrop-blur-md hidden md:flex flex-col">
        <div className="p-6 flex items-center gap-2 text-green-400 font-bold text-xl">
          <Leaf className="h-6 w-6" />
          <span>CarbonWise</span>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard/coach" className="flex items-center gap-3 px-3 py-2 text-green-400 bg-green-400/10 rounded-md">
            <Bot className="h-5 w-5" />
            <span>AI Coach</span>
          </Link>
          <Link href="/dashboard/scanner" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors">
            <FileText className="h-5 w-5" />
            <span>Scan Bills</span>
          </Link>
          <Link href="/dashboard/verify" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors">
            <Camera className="h-5 w-5" />
            <span>Verify Action</span>
          </Link>
          <Link href="/dashboard/challenges" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors">
            <Target className="h-5 w-5" />
            <span>Challenges</span>
          </Link>
          <Link href="/dashboard/community" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors">
            <Users className="h-5 w-5" />
            <span>Community</span>
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          <Link href="/dashboard/admin" className="flex items-center gap-3 px-3 py-2 text-red-400 hover:text-white hover:bg-red-900/20 rounded-md transition-colors mt-8">
            <ShieldAlert className="h-5 w-5" />
            <span>Admin</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-zinc-800 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-xs text-white">ME</div>
          <span className="text-sm text-zinc-400">My Account</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
          <div className="flex items-center gap-2 text-green-400 font-bold">
            <Leaf className="h-5 w-5" />
            <span>CarbonWise</span>
          </div>
          <div className="h-8 w-8 rounded-full bg-zinc-800" />
        </header>
        
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
