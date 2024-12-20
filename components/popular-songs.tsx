"use client";
import { useState } from "react";
import { Play, Pause } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  sortableKeyboardCoordinates,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { useAtom } from "jotai";
import { PlayingAtom } from "@/lib/atom";

export interface Song {
  id: number;
  title: string;
  artist?: string;
  duration: number ; // in seconds
  coverUrl: string;
  plays?: string;
  album?: string;
  artists?: string;
}

const initialSongs: Song[] = [
  {
    id: 1,
    title: "Billie Jean",
    plays: "1,040,811,084",
    duration: 293,
    album: "Thriller 25 Super Deluxe Edition",
    coverUrl: "https://picsum.photos/1080/720?random=2",
  },
  {
    id: 2,
    title: "Beat It",
    plays: "643,786,045",
    duration: 258,
    album: "Thriller 25 Super Deluxe Edition",
    coverUrl: "https://picsum.photos/1080/720?random=2",
  },
  {
    id: 3,
    title: "Smooth Criminal - 2012 Remaster",
    plays: "407,234,004",
    duration: 257,
    album: "Thriller 25 Super Deluxe Edition",
    coverUrl: "https://picsum.photos/1080/720?random=2",
  },
  {
    id: 4,
    title: "Don't Stop 'Til You Get Enough",
    plays: "316,391,952",
    duration: 365,
    album: "Bad 25th Anniversary",
    coverUrl: "https://picsum.photos/1080/720?random=2",
  },
  {
    id: 5,
    title: "Rock With You - Single Version",
    plays: "268,187,218",
    duration: 220,
    album: "Off The Wall",
    coverUrl: "https://picsum.photos/1080/720?random=2",
  },
];

interface SortableRowProps {
  songNo: number;
  song: Song;
  playingId: number | null;
  togglePlay: (id: number) => void;
}

function SortableRow({
  songNo,
  song,
  playingId,
  togglePlay,
}: SortableRowProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  // console.log(songNo)
  const [isPlayingAtom, setPlayingAtom] = useAtom(PlayingAtom);
  return (
    <TableRow
      ref={setNodeRef}
      style={style}
      className="group hover:bg-muted/50 cursor-grab  "
     
      {...attributes}
      {...listeners}
    >
      <TableCell className=" ">
        <div className="flex items-center cursor-pointer relative">
          {playingId === song.id && isPlayingAtom ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
               
                setPlayingAtom(!isPlayingAtom);
                togglePlay(song.id);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground  transition-opacity group-hover:opacity-100"
            >
              <Pause className="h-5 w-5" />
            </button>
          ) : (
            <>
              <div className=" h-8 w-8  text-center  ">{songNo + 1}</div>
              <button
                onClick={() => {
                  if (isPlayingAtom === false) {
                    setPlayingAtom(!isPlayingAtom);
                  } else {
                    setPlayingAtom(isPlayingAtom);
                  }
                  togglePlay(song.id);
                }}
                className=" absolute  flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Play className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </TableCell>
      <TableCell className="">
        <span className="cursor-pointer hover:decoration-neutral-50 hover:underline">
          {song.title}
        </span>
      </TableCell>
      <TableCell className="text-right max-md:hidden">{song.plays}</TableCell>
      <TableCell className="text-right">{song.duration}</TableCell>
      <TableCell>
        <span className="cursor-pointer hover:decoration-neutral-50 hover:underline max-md:hidden">
          {song.album}
        </span>
      </TableCell>
    </TableRow>
  );
}

interface PopularSongsProps {
  onPlay: (song: Song) => void;
}

export function PopularSongs({ onPlay }: PopularSongsProps) {
  const [songs, setSongs] = useState(initialSongs);
  const [playingId, setPlayingId] = useState<number | null>(null);
  // console.log(playingId);
  // console.log(songs, "songs");
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  // const sensors = useSensors(PointerSensor, {
  //   activationConstraint: {
  //     distance: 5,
  //   },
  // });
  const togglePlay = (id: number) => {
    setPlayingId((prevId) => (prevId === id ? null : id));
    const song = songs.find((s) => s.id === id);
    // console.log(song);
    if (song) {
      onPlay(song);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setSongs((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Popular</h2>
        <a href="#" className="text-sm text-primary hover:underline">
          See All
        </a>
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12 text-center">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right max-md:hidden">Plays</TableHead>
              <TableHead className="text-right">Duration</TableHead>
              <TableHead className="max-md:hidden">Album</TableHead>
            </TableRow>
          </TableHeader>
          <SortableContext items={songs} strategy={verticalListSortingStrategy}>
            <TableBody className=" select-none">
              {songs.map((song, index) => (
                <SortableRow
                  songNo={index}
                  key={song.id}
                  song={song}
                  playingId={playingId}
                  togglePlay={togglePlay}
                />
              ))}
            </TableBody>
          </SortableContext>
        </Table>
      </DndContext>
    </div>
  );
}

function arrayMove<T>(array: T[], from: number, to: number): T[] {
  const newArray = array.slice();
  newArray.splice(
    to < 0 ? newArray.length + to : to,
    0,
    newArray.splice(from, 1)[0]
  );
  return newArray;
}
