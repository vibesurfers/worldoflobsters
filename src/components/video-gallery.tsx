"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const videos = [
  {
    id: 1,
    src: "/videos/trailer-1.mp4",
    thumb: "/videos/thumb-1.jpg",
    title: "Rise of the Claw",
  },
  {
    id: 2,
    src: "/videos/trailer-2.mp4",
    thumb: "/videos/thumb-2.jpg",
    title: "Battle for Kalimdor",
  },
  {
    id: 3,
    src: "/videos/trailer-3.mp4",
    thumb: "/videos/thumb-3.jpg",
    title: "Elemental Fury",
  },
  {
    id: 4,
    src: "/videos/trailer-4.mp4",
    thumb: "/videos/thumb-4.jpg",
    title: "The Golden Legion",
  },
];

export function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);

  return (
    <section className="scroll-transition-bg px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-display text-3xl font-bold sm:text-4xl">
          <span className="gradient-text-ocean text-glow-teal">
            Tales from Azeroth
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative aspect-video overflow-hidden rounded-lg border-2 border-ocean-teal/30 transition-all hover:border-ocean-teal"
            >
              <Image
                src={video.thumb}
                alt={video.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean-teal/80">
                  <svg
                    className="ml-1 h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="font-display text-sm text-white/90">{video.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent className="max-w-4xl overflow-hidden border-ocean-teal/30 bg-black p-0">
          <DialogTitle className="sr-only">{activeVideo?.title}</DialogTitle>
          {activeVideo && (
            <video
              autoPlay
              controls
              className="aspect-video w-full"
            >
              <source src={activeVideo.src} type="video/mp4" />
            </video>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
