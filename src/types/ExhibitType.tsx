import { Artwork } from "./ArtworkType";

export type Exhibit = {
  title: string;
  description: string;
  artworks: Artwork[];
};
