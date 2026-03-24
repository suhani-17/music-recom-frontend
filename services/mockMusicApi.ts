import { RawSong } from "../types/music";

export const fetchSongsFromAPI = async (): Promise<RawSong[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", title: "Song A", artist: "X", language: "hindi" },
        { id: "2", title: "Song B", artist: "Y", language: "english" },
      ]);
    }, 1000);
  });
};