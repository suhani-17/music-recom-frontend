"use client";

import { useState } from "react";
import { useRecommendations } from "@/hooks/useRecommendation";
import SongCard from "@/components/SongCard";
import { Mood, Language } from "@/types/music";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SongCardSkeleton from "@/components/SongCardSkeleton";

const moods: Mood[] = ["happy", "sad", "calm", "energetic"];
const languages: Language[] = ["hindi", "english"];

const moodEmoji: Record<Mood, string> = {
    happy: "😊",
    sad: "😢",
    calm: "😌",
    energetic: "⚡",
};

export default function Home() {
    const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

    const { mutate, data, isPending } = useRecommendations();

    const handleSubmit = () => {
        if (!selectedMood || !selectedLanguage) return;
        mutate({ mood: selectedMood, language: selectedLanguage });
    };

    return (
        <Box sx={{
            minHeight: "100vh",
            backgroundColor: "#0f0f1a",
            py: 6,
        }}>
            <Container maxWidth="md">

                {/* Header */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <MusicNoteIcon sx={{ fontSize: 48, color: "#6366f1" }} />
                    <Typography variant="h3" fontWeight={800} sx={{ color: "white", mt: 1 }}>
                        Moodify
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "grey.500", mt: 1 }}>
                        Tell us how you feel. We'll find the music.
                    </Typography>
                </Box>

                {/* Mood Selector */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="overline" sx={{ color: "grey.400", letterSpacing: 2 }}>
                        Select your mood
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <ToggleButtonGroup
                            value={selectedMood}
                            exclusive
                            onChange={(_, value) => setSelectedMood(value)}
                            sx={{ flexWrap: "wrap", gap: 1 }}
                        >
                            {moods.map((mood) => (
                                <ToggleButton
                                    key={mood}
                                    value={mood}
                                    sx={{
                                        color: "grey.400",
                                        borderColor: "grey.800",
                                        borderRadius: "12px !important",
                                        px: 3,
                                        textTransform: "capitalize",
                                        "&.Mui-selected": {
                                            backgroundColor: "#6366f1",
                                            color: "white",
                                            borderColor: "#6366f1",
                                        },
                                        "&.Mui-selected:hover": {
                                            backgroundColor: "#4f46e5",
                                        },
                                    }}
                                >
                                    {moodEmoji[mood]} {mood}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </Box>
                </Box>

                {/* Language Selector */}
                <Box sx={{ mb: 5 }}>
                    <Typography variant="overline" sx={{ color: "grey.400", letterSpacing: 2 }}>
                        Select language
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <ToggleButtonGroup
                            value={selectedLanguage}
                            exclusive
                            onChange={(_, value) => setSelectedLanguage(value)}
                            sx={{ gap: 1 }}
                        >
                            {languages.map((lang) => (
                                <ToggleButton
                                    key={lang}
                                    value={lang}
                                    sx={{
                                        color: "grey.400",
                                        borderColor: "grey.800",
                                        borderRadius: "12px !important",
                                        px: 3,
                                        textTransform: "capitalize",
                                        "&.Mui-selected": {
                                            backgroundColor: "#6366f1",
                                            color: "white",
                                            borderColor: "#6366f1",
                                        },
                                        "&.Mui-selected:hover": {
                                            backgroundColor: "#4f46e5",
                                        },
                                    }}
                                >
                                    {lang}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </Box>
                </Box>

                {/* Submit Button */}
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={!selectedMood || !selectedLanguage || isPending}
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: "#6366f1",
                        borderRadius: 3,
                        py: 1.5,
                        fontWeight: 700,
                        fontSize: "1rem",
                        textTransform: "none",
                        "&:hover": { backgroundColor: "#4f46e5" },
                        "&.Mui-disabled": { backgroundColor: "grey.800", color: "grey.600" },
                    }}
                >
                    {isPending ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Get Recommendations"}
                </Button>

                {/* Skeletons while loading */}
                {isPending && (
                    <Box sx={{ mt: 6 }}>
                        <Skeleton variant="text" width={200} height={32} sx={{ backgroundColor: "#2a2a3e", mb: 3 }} />
                        <Grid container spacing={2}>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <Grid item xs={12} sm={6} md={4} key={i}>
                                    <SongCardSkeleton />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

                {/* Results */}
                {data && data.length > 0 && !isPending && (
                    <Box sx={{ mt: 6 }}>
                        <Typography variant="h6" fontWeight={700} sx={{ color: "white", mb: 3 }}>
                            {data.length} songs for your mood
                        </Typography>
                        <Grid container spacing={2}>
                            {data.map((song) => (
                                <Grid item xs={12} sm={6} md={4} key={song.id}>
                                    <SongCard song={song} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

            </Container>
        </Box>
    );
}
