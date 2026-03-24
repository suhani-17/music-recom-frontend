import { RawSong, Song } from "../types/music";


export function transformSongs(rawSongs: RawSong[]): Song[] {
    return rawSongs
    .filter( ( song) => {
        return ( 
            typeof song.id === "string" &&
            typeof song.title === "string" &&
            typeof song.artist === "string" &&
            (song.language === "hindi" || song.language === "english")
        )
    })
    .map((song) => ({
    id: song.id,
    title: song.title,
    artist: song.artist,
    language: song.language as "hindi" | "english", // TEMP (we'll fix)
    mood: "happy", // placeholder for now
  }));
}