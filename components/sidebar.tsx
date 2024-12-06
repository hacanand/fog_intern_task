import { Home, TrendingUp, Library, Compass, Settings, LogOutIcon,Music } from 'lucide-react'
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="flex h-full flex-col bg-card text-card-foreground">
      <div className="p-4">
        <h1 className="text-2xl font-extrabold text-primary flex">
          <span>
            <Music className="w-10 h-10 text-red-500 mr-4" />
          </span>
          <span className="text-red-500"> Dream</span>Music
        </h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <Home className="h-5 w-5 text-red-500 " />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/trends"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <TrendingUp className="h-5 w-5 text-red-500 " />
              <span>Trends</span>
            </Link>
          </li>
          <li>
            <Link
              href="/library"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <Library className="h-5 w-5 text-red-500 " />
              <span>Library</span>
            </Link>
          </li>
          <li>
            <Link
              href="/discover"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <Compass className="h-5 w-5 text-red-500 " />
              <span>Discover</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/settings"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <Settings className="h-5 w-5 text-red-500 " />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <button className="flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-accent">
              <LogOutIcon className="h-5 w-5 text-red-500 " />
              <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

