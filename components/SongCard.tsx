"use client";

  import { Song } from "@/types/music";
  import Card from "@mui/material/Card";
  import CardMedia from "@mui/material/CardMedia";
  import CardContent from "@mui/material/CardContent";
  import Typography from "@mui/material/Typography";
  import IconButton from "@mui/material/IconButton";
  import PlayArrowIcon from "@mui/icons-material/PlayArrow";
  import MusicNoteIcon from "@mui/icons-material/MusicNote";

  interface SongCardProps {
      song: Song;
  }

  export default function SongCard({ song }: SongCardProps) {
      const handlePreview = () => {
          if (song.preview_url) {
              window.open(song.preview_url, "_blank");
          }
      };

      return (
          <Card sx={{
              backgroundColor: "#1a1a2e",
              borderRadius: 3,
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
              },
          }}>
              {song.image_url ? (
                  <CardMedia
                      component="img"
                      height="180"
                      image={song.image_url}
                      alt={song.title}
                  />
              ) : (
                  <MusicNoteIcon sx={{
                      fontSize: 80,
                      color: "#6366f1",
                      display: "block",
                      margin: "40px auto",
                  }} />
              )}

              <CardContent sx={{ pb: 1 }}>
                   <Typography
                        variant="subtitle1"
                        noWrap
                        sx={{ fontWeight: 700, color: "white" }}
                    >
                        {song.title}
                    </Typography>


                    <Typography
                        variant="body2"
                        noWrap
                        sx={{ color: "grey.400" }}
                    >
                        {song.artist}
                    </Typography>


                  {song.preview_url && (
                      <IconButton
                          onClick={handlePreview}
                          sx={{
                              mt: 1,
                              backgroundColor: "#6366f1",
                              color: "white",
                              "&:hover": { backgroundColor: "#4f46e5" },
                          }}
                          size="small"
                      >
                          <PlayArrowIcon />
                      </IconButton>
                  )}
              </CardContent>
          </Card>
      );
  }