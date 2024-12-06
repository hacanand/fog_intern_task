"use client"

import { useState } from "react"
import { Play, Pause } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const songs = [
  { id: 1, title: "Billie Jean", plays: "1,040,811,084", duration: "4:53", album: "Thriller 25 Super Deluxe Edition" },
  { id: 2, title: "Beat It", plays: "643,786,045", duration: "4:18", album: "Thriller 25 Super Deluxe Edition" },
  { id: 3, title: "Smooth Criminal - 2012 Remaster", plays: "407,234,004", duration: "4:17", album: "Thriller 25 Super Deluxe Edition" },
  { id: 4, title: "Don't Stop 'Til You Get Enough", plays: "316,391,952", duration: "6:05", album: "Bad 25th Anniversary" },
  { id: 5, title: "Rock With You - Single Version", plays: "268,187,218", duration: "3:40", album: "Off The Wall" },
]

export function PopularSongs() {
  const [playingId, setPlayingId] = useState<number | null>(null)

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id)
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Popular</h2>
        <a href="#" className="text-sm text-primary hover:underline">See All</a>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Plays</TableHead>
            <TableHead className="text-right">Duration</TableHead>
            <TableHead>Album</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {songs.map((song) => (
            <TableRow key={song.id} className="group cursor-pointer hover:bg-muted/50">
              <TableCell>
                <button
                  onClick={() => togglePlay(song.id)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {playingId === song.id ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </button>
              </TableCell>
              <TableCell>{song.title}</TableCell>
              <TableCell className="text-right">{song.plays}</TableCell>
              <TableCell className="text-right">{song.duration}</TableCell>
              <TableCell>{song.album}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

