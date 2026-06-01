import axios from "@/lib/axios";
import { Mood, Language, Song, RecommendationPayload } from "@/types/music";

export async function getRecommendations(payload: RecommendationPayload): Promise<Song[]> {
  const response = await axios.post("/recommendations", payload);
    return response.data.data;
}