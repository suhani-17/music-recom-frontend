"use client";

import { useState } from "react";
import { Song } from "@/types/music";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

interface SongCardProps {
    song: Song;
}

export default function SongCard({ song }: SongCardProps) {
    const [hovered, setHovered] = useState(false);

    const handlePlay = () => {
        if (song.spotify_url) window.open(song.spotify_url, "_blank");
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
            {/* Image with hover overlay */}
            <Box
                sx={{ position: "relative", height: 180, cursor: song.spotify_url ? "pointer" : "default" }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={handlePlay}
            >
                {song.image_url ? (
                    <Box
                        component="img"
                        src={song.image_url}
                        alt={song.title}
                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                ) : (
                    <Box sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#12122a",
                    }}>
                        <MusicNoteIcon sx={{ fontSize: 80, color: "#6366f1" }} />
                    </Box>
                )}

                {/* Play overlay on hover */}
                {song.spotify_url && hovered && (
                    <Box sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <IconButton sx={{
                            backgroundColor: "#6366f1",
                            color: "white",
                            "&:hover": { backgroundColor: "#4f46e5" },
                        }}>
                            <PlayArrowIcon sx={{ fontSize: 36 }} />
                        </IconButton>
                    </Box>
                )}
            </Box>

            <CardContent sx={{ pb: 1 }}>
                <Typography variant="subtitle1" noWrap sx={{ fontWeight: 700, color: "white" }}>
                    {song.title}
                </Typography>
                <Typography variant="body2" noWrap sx={{ color: "grey.400" }}>
                    {song.artist}
                </Typography>
            </CardContent>
        </Card>
    );
}
