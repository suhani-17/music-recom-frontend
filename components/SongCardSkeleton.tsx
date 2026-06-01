"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

export default function SongCardSkeleton() {
    return (
        <Card sx={{ backgroundColor: "#1a1a2e", borderRadius: 3 }}>
            <Skeleton
                variant="rectangular"
                height={180}
                sx={{ backgroundColor: "#2a2a3e" }}
            />
            <CardContent>
                <Skeleton
                    variant="text"
                    width="80%"
                    height={24}
                    sx={{ backgroundColor: "#2a2a3e" }}
                />
                <Skeleton
                    variant="text"
                    width="50%"
                    height={18}
                    sx={{ backgroundColor: "#2a2a3e" }}
                />
                <Skeleton
                    variant="circular"
                    width={32}
                    height={32}
                    sx={{ backgroundColor: "#2a2a3e", mt: 1 }}
                />
            </CardContent>
        </Card>
    );
}