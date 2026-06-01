export type Mood = "happy" | "sad" | "calm" | "energetic";

export type Language = "hindi" | "english";

export type Song = {
  id: string;
  title: string;
  artist: string;
  image_url: string | null;
  preview_url: string | null;
};

export interface RecommendationPayload {
  mood: Mood;
  language: Language;
}