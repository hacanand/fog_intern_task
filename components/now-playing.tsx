"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Repeat,
  SkipBack,
  Play,
  SkipForward,
  Shuffle,
  Pause,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Song } from "./popular-songs";
import { useAtom } from "jotai";
import { PlayingAtom } from "@/lib/atom";

// interface Song {
//   id: any;
//   title: string;
//   artist?: string;
//   duration: number; // in seconds
//   coverUrl?: string;
//   plays?: string;
//   album?: string;
//   artists?: string;
// }

interface NowPlayingCardProps {
  song: Song;
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onShuffle?: () => void;
  onRepeat?: () => void;
  className?: string;
}

export function NowPlaying({
  song,
 
  onPlayPause,
  onNext,
  onPrevious,
  onShuffle,
  onRepeat,
  className,
}: NowPlayingCardProps) {
  const [currentTime, setCurrentTime] = useState(0);
const [isPlaying, setIsPlaying] = useAtom(PlayingAtom);
  // Reset progress when song changes
  useEffect(() => {
    setCurrentTime(0);
  }, [song.id]);

  // Simulate time progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentTime < song.duration) {
      interval = setInterval(() => {
        setCurrentTime((prev) => Math.min(prev + 1, song.duration));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, song.duration]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <Card className={cn("w-full bg-[#4A0404] text-white rounded-b-none", className)}>
      <CardContent className="p-6 space-y-4 w-full">
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4">Now Playing</h2>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <img
            src={song.coverUrl}
            alt={`${song.title} by ${song.artist}`}
            className="object-cover w-full"
          />
        </div>

        <div className="space-y-1 text-center">
          <h3 className="font-semibold text-lg">{song.title}</h3>
          <p className="text-sm text-gray-300">{song.artist}</p>
        </div>

        <div className="space-y-2">
          <Slider
            value={[currentTime]}
            max={song?.duration}
            step={1}
            className="cursor-pointer"
            onValueChange={([value]) => setCurrentTime(value)}
          />
          <div className="flex justify-between text-sm text-gray-300">
            <span>{ formatTime(currentTime)}</span>
            <span>{formatTime (song?.duration)}</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-4">
          <button
            onClick={onShuffle}
            className="hover:text-white text-gray-300 transition"
          >
            <Shuffle className="h-5 w-5" />
          </button>
          <button
            onClick={onPrevious}
            className="hover:text-white text-gray-300 transition"
          >
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white text-black rounded-full p-3 hover:scale-105 transition"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={onNext}
            className="hover:text-white text-gray-300 transition"
          >
            <SkipForward className="h-5 w-5" />
          </button>
          <button
            onClick={onRepeat}
            className="hover:text-white text-gray-300 transition"
          >
            <Repeat className="h-5 w-5" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
