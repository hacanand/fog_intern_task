"use client"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="flex max-md:flex-col items-center justify-between border-b p-4">
      <nav>
        <ul className="flex space-x-4 ">
          <li>
            <a href="#" className="text-base font-medium hover:text-primary">Music</a>
          </li>
          <li>
            <a href="#" className="text-base font-medium hover:text-primary">Podcast</a>
          </li>
          <li>
            <a href="#" className="text-base font-medium hover:text-primary">Live</a>
          </li>
          <li>
            <a href="#" className="text-base font-medium hover:text-primary">Radio</a>
          </li>
        </ul>
      </nav>
      <div className="relative">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-72 pl-8 opacity-70 rounded-full "
        />
      </div>
    </header>
  )
}

