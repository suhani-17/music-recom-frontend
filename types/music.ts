export type Mood = "happy" | "sad" | "calm" | "energetic";

export type Language = "hindi" | "english";

export type Song = {
  id: string;
  title: string;
  artist: string;
  language: Language;
  mood: Mood;
};

export type RawSong = {
  id: string;
  title: string;
  artist: string;
  language: string; // keep loose (API is untrusted)
};