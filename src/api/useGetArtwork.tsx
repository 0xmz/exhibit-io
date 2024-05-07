import { useEffect, useState } from "react";
import { Artwork } from "../types/ArtworkType";
import axios from "axios";

export default function useGetArtwork(ids: string) {
  const [artworkInfo, setArtworkInfo] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.artic.edu/api/v1/artworks?ids=${ids}&fields=id,title,image_id,artist_title`
      )
      .then(function (response) {
        const artworks: Artwork[] = [];
        for (const i in response.data.data) {
          artworks.push(response.data.data[i]);
        }
        setArtworkInfo(artworks);
        setIsLoading(false);
      });
  }, [ids, isLoading]);
  return { artworkInfo, isLoading };
}
