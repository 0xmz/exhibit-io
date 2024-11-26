/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@mui/material";
import useFetch from "../api/useFetch";
import { BASE_API_URL } from "../utils/constants";
import { Artwork } from "../types/ArtworkType";
import PageHeader from "./PageHeader";

export type ArtworkDetailsPropType = {
  artworkId: string | undefined;
};

const ArtworkDetails = ({ artworkId }: ArtworkDetailsPropType) => {
  const {
    data: exhibit,
    error,
    isPending,
  } = useFetch(BASE_API_URL + `?id=${artworkId}`);

  return (
    <>
      <section>
        {isPending && <p>Loading gallery details...</p>}

        {error && <p>{error}</p>}

        {exhibit ? (
          <>
            <PageHeader title={exhibit[0].title} />
            {exhibit[0].artworks.map((artwork: Artwork) => (
              <Card key={artwork.id}>
                <h1>{artwork.id}</h1>
                <h2>{artwork.image_id}</h2>
                <p>{artwork.title}</p>
                <p>{artwork.artist_title}</p>
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                ></img>
              </Card>
            ))}
          </>
        ) : (
          "Loading..."
        )}
      </section>
    </>
  );
};

export default ArtworkDetails;
