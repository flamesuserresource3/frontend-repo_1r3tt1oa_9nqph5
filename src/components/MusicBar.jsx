import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Music, Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

const playlist = [
  {
    title: 'Seaside Breeze',
    artist: 'Pixabay Artist',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_0c0b3a31a9.mp3?filename=lofi-study-112191.mp3',
  },
  {
    title: 'Night Drive',
    artist: 'Pixabay Artist',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_3a4a341f3a.mp3?filename=late-night-drive-112193.mp3',
  },
  {
    title: 'Soft Focus',
    artist: 'Pixabay Artist',
    url: 'https://cdn.pixabay.com/download/audio/2021/10/20/audio_2b8f2f3954.mp3?filename=deep-ambient-110104.mp3',
  },
];

const formatTime = (seconds) => {
  if (isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const MusicBar = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(playlist[0].url));

  const current = useMemo(() => playlist[index], [index]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    const onTime = () => setProgress(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration || 0);
    const onEnd = () => handleNext();

    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onLoaded);
    audio.addEventListener('ended', onEnd);

    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onLoaded);
      audio.removeEventListener('ended', onEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    audio.pause();
    audio.src = current.url;
    audio.load();
    setProgress(0);
    if (isPlaying) {
      audio
        .play()
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [current, isPlaying]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handlePrev = () => {
    setIndex((i) => (i - 1 + playlist.length) % playlist.length);
  };

  const handleNext = () => {
    setIndex((i) => (i + 1) % playlist.length);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const time = Number(e.target.value);
    audio.currentTime = time;
    setProgress(time);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
    // force re-render via volume state toggle trick
    setVolume((v) => (audio.muted ? 0 : v || 0.6));
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[95%] -translate-x-1/2 md:w-[780px]">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
        <div className="absolute -inset-24 -z-0 bg-gradient-to-tr from-emerald-400/10 via-cyan-400/10 to-fuchsia-400/10 blur-2xl" />
        <div className="relative z-10 grid grid-cols-12 items-center gap-3 p-4 text-white">
          <div className="col-span-12 flex items-center gap-3 md:col-span-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <Music size={18} />
            </div>
            <div>
              <div className="text-sm font-medium leading-tight">{current.title}</div>
              <div className="text-xs text-slate-300">{current.artist}</div>
            </div>
          </div>

          <div className="col-span-12 flex items-center gap-3 md:col-span-5">
            <button onClick={handlePrev} aria-label="Previous" className="rounded-full p-2 hover:bg-white/10">
              <SkipBack size={18} />
            </button>
            <button
              onClick={handlePlayPause}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="rounded-full bg-emerald-400 p-2 text-slate-900 hover:bg-emerald-300"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button onClick={handleNext} aria-label="Next" className="rounded-full p-2 hover:bg-white/10">
              <SkipForward size={18} />
            </button>

            <div className="mx-2 flex w-full items-center gap-2">
              <span className="text-[10px] tabular-nums text-slate-300">{formatTime(progress)}</span>
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={progress}
                onChange={handleSeek}
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/20"
              />
              <span className="text-[10px] tabular-nums text-slate-300">{formatTime(duration)}</span>
            </div>
          </div>

          <div className="col-span-12 ml-auto flex items-center justify-end gap-2 md:col-span-3">
            <button onClick={toggleMute} className="rounded-full p-2 hover:bg-white/10" aria-label="Mute/Unmute">
              {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-white/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBar;
