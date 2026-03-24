import { fetchSongsFromAPI } from "./mockMusicApi";
import { transformSongs } from "./transformSongs";
import {Mood, Language , Song} from "../types/music";

export async function getRecommendations (
  mood: Mood,
  language: Language  
): Promise<Song[]> {
  try{
    const raw = await fetchSongsFromAPI();
    const songs = transformSongs(raw);

    return songs.filter((song)=>song.mood === mood && song.language === language);

  }catch(error){
    console.error("Error fetching recommendations:", error);
    return [];
  }
}