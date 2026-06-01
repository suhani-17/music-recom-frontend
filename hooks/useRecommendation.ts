import { useMutation } from "@tanstack/react-query";
import { getRecommendations } from "@/services/musicApi";
import { RecommendationPayload, Song } from "@/types/music";
import { toast } from "sonner";
import { AxiosError } from "axios";

export function useRecommendations() {
    return useMutation<Song[], AxiosError<{ detail: string }>,RecommendationPayload>({
        mutationFn : (payload: RecommendationPayload) => getRecommendations(payload),
        onError: (error) => {
              const message = error.response?.data?.detail
                  ?? "Failed to fetch recommendations. Please try again.";
              toast.error(message);
        },
    });
}