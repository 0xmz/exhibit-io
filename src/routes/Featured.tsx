import axios from "axios";
import { useEffect, useState } from "react";
import FeatureBox from "../components/FeatureBox";
import { Artwork } from "../types/ArtworkType";

export type FeaturedPropType = {
  ids: string;
};

const Featured = ({ ids }: FeaturedPropType) => {
  const [artworkInfo, setArtworkInfo] = useState<Artwork[]>([]);
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
      });
  }, []);
  return <FeatureBox artworks={artworkInfo}></FeatureBox>;
};

export default Featured;
