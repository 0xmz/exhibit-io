import { Artwork } from "./ArtworkType";

export type Exhibit = {
  id?: number;
  title: string;
  curator: string;
  description: string;
  artworks: Artwork[];
};
