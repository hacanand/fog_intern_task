import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ArtistBanner } from "@/components/artist-banner"
import { PopularSongs } from "@/components/popular-songs"
import { NowPlaying } from "@/components/now-playing"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-background text-foreground">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={20}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="flex h-full flex-col">
            <Header />
            <main className="flex-1 overflow-auto p-6">
              <ArtistBanner />
              <PopularSongs />
            </main>
            <NowPlaying />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

