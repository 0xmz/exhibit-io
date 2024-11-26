import { Box, Card, CardHeader, Typography } from "@mui/material";
import { Artwork } from "../types/ArtworkType";

export type FeatureBoxPropType = {
  artworks: Artwork[];
};

const FeatureBox = ({ artworks }: FeatureBoxPropType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
      {artworks.map((artwork) => (
        <Card
          key={artwork.image_id}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardHeader title={artwork.title} />
          <Typography>{artwork.artist_title}</Typography>
          <Typography>{artwork.id}</Typography>
          <Typography>{artwork.image_id}</Typography>
          <Typography>{artwork.description}</Typography>
          <img
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          ></img>
        </Card>
      ))}
    </Box>
  );
};

export default FeatureBox;
