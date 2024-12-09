"use client"
import { Home, TrendingUp, Library, Compass, Settings, LogOutIcon, Music } from 'lucide-react'
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="flex h-full flex-col bg-card text-card-foreground pl-6 md:pl-4 sm:pl-2">
      <div className="p-4">
        <h1 className="md:text-2xl text-base  font-extrabold text-primary flex">
          <span>
            <Music className="w-10 h-10 text-red-500 mr-4" />
          </span>
          <span className="text-red-500 max-md:hidden"> Dream</span>
          <span className="max-md:hidden">Music</span>
        </h1>
      </div>
      <nav className="flex-1">
        <div className="text-small capitalize mt-8 md:pl-6 text-muted-foreground md:pl-4 sm:pl-2">
          Menu
        </div>
        <ul className="space-y-2 p-4 pt-2 font-bold">
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <Home className="h-5 w-5 text-red-500 " />
              <span className="max-md:hidden">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <TrendingUp className="h-5 w-5 text-red-500 " />
              <span className="max-md:hidden">Trends</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <Library className="h-5 w-5 text-red-500 " />
              <span className="max-md:hidden">Library</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <Compass className="h-5 w-5 text-red-500 " />
              <span className="max-md:hidden">Discover</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <div className="text-small mt-8 md:pl-2 capitalize text-muted-foreground">
          General
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-accent"
            >
              <Settings className="h-5 w-5 text-red-500 " />
              <span className="max-md:hidden">Settings</span>
            </Link>
          </li>
          <li>
            <button className="flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-accent">
              <LogOutIcon className="h-5 w-5 text-red-500 " />
              <span className="max-md:hidden">Log Out</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

