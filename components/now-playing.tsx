"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react'
import { Slider } from "@/components/ui/slider"

export function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="flex items-center justify-between border-t bg-card p-4">
      <div className="flex items-center space-x-4">
        <img
          src="/placeholder.svg"
          alt="Album cover"
          className="h-12 w-12 rounded-md"
        />
        <div>
          <h3 className="font-medium">Beat It</h3>
          <p className="text-sm text-muted-foreground">Michael Jackson</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-4">
          <button className="text-muted-foreground hover:text-foreground">
            <Shuffle className="h-5 w-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <Repeat className="h-5 w-5" />
          </button>
        </div>
        <div className="flex w-full max-w-md items-center space-x-2">
          <span className="text-xs text-muted-foreground">2:15</span>
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
          />
          <span className="text-xs text-muted-foreground">4:18</span>
        </div>
      </div>
      <div className="w-48"></div>
    </div>
  )
}

