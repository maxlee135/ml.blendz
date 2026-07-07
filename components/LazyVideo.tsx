"use client";
import { useEffect, useRef, useState } from "react";

// Videos are heavy. This component shows the lightweight poster image
// immediately and only lets the browser download + play the video once
// it scrolls into view (and pauses it again when it scrolls out).
type Props = {
  src: string;
  poster: string;
  caption?: string;
  unmutable?: boolean; // show a tap-to-unmute button
  className?: string;
};

export default function LazyVideo({
  src,
  poster,
  caption,
  unmutable = false,
  className = "h-full w-full object-cover",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // React doesn't update the muted property on a <video> after the first
  // render, so we have to set it on the element directly.
  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "100px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="none"
        className={className}
      />
      {unmutable && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-3 right-3 rounded-full bg-black/60 p-2 text-white backdrop-blur transition-colors hover:bg-black/80"
        >
          {muted ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.7-.51-1.94-1.36a9.02 9.02 0 010-4.28c.24-.85 1.06-1.36 1.94-1.36h2.24z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.11 5.11a9 9 0 010 13.78M16.46 8.46a5.25 5.25 0 010 7.07M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.7-.51-1.94-1.36a9.02 9.02 0 010-4.28c.24-.85 1.06-1.36 1.94-1.36h2.24z" />
            </svg>
          )}
        </button>
      )}
      {caption && (
        <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-8 text-xs font-medium text-white">
          {caption}
        </p>
      )}
    </div>
  );
}
