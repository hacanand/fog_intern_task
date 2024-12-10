"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ArtistBanner } from "@/components/artist-banner";
import { PopularSongs, Song } from "@/components/popular-songs";
import { NowPlaying } from "@/components/now-playing";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
// console.log(currentSong)
  return (
    <div className="h-screen overflow-hidden bg-background text-foreground">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={20}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="flex h-full flex-col bg-gradient-to-b from-[#5f0505] to-[#220202]">
            <Header />
            <main className="flex-1 overflow-auto p-6">
              <ArtistBanner />
              <PopularSongs onPlay={setCurrentSong} />
              <div className="max-md:block md:hidden">
                {currentSong && <NowPlaying
                  song={currentSong}
                  isPlaying={true}
                  // onPlayPause={() => { }}
                  onNext={() => { }}
                  onPrevious={() => { }}
                  onShuffle={() => { }}
                  onRepeat={() => { }}
                />
                }
              </div>
            </main>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        {currentSong && (
          <>
            <ResizablePanel defaultSize={20} minSize={20} maxSize={20} className="max-md:hidden">
              <div className="w-full h-full bg-gradient-to-b from-[#270101] to-[#240101]">
                <div className=" absolute bottom-0 w-[20%]">
                  <NowPlaying
                    song={currentSong}
                    isPlaying={true}
                    // onPlayPause={() => { }}
                    onNext={() => { }}
                    onPrevious={() => { }}
                    onShuffle={() => { }}
                    onRepeat={() => { }}
                  />
                </div>
              </div>
            </ResizablePanel>
            {/* <ResizableHandle /> */}
          </>
        )}
      </ResizablePanelGroup>
    </div>
  );
}
