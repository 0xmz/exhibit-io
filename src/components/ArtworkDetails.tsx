import useFetch from "../api/useFetch";
import { BASE_API_URL } from "../utils/constants";

export type ArtworkDetailsPropType = {
  artworkId: string;
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
            <h1>ID: {exhibit[0].artworks[0].id}</h1>
            <h2>{exhibit[0].artworks[0].image_id}</h2>
            <p>{exhibit[0].artworks[0].title}</p>
            <p>{exhibit[0].artworks[0].artist_title}</p>
            <img
              src={`https://www.artic.edu/iiif/2/${exhibit[0].artworks[0].image_id}/full/843,/0/default.jpg`}
            ></img>
          </>
        ) : (
          "nothing"
        )}
      </section>
    </>
  );
};

export default ArtworkDetails;
