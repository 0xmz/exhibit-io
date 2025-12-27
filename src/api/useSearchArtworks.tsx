import { useEffect, useState } from "react";
import { Artwork } from "../types/ArtworkType";
import axios from "axios";

export default function useSearchArtworks(query: string) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);
    axios
      .get(
        `https://api.artic.edu/api/v1/artworks/search?q=${query}&fields=id,title,image_id,artist_title,description&limit=10`
      )
      .then(function (response) {
        const fetchedArtworks: Artwork[] = response.data.data.map(
          (item: any) => ({
            id: item.id,
            title: item.title,
            image_id: item.image_id,
            artist_title: item.artist_title || "Unknown",
            description: item.description || "",
          })
        );
        setArtworks(fetchedArtworks);
        setIsLoading(false);
      })
      .catch(() => {
        setArtworks([]);
        setIsLoading(false);
      });
  }, [query]);

  return { artworks, isLoading };
}
