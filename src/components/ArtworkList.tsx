import { Box, Card } from "@mui/material";
import ArtworkDetails from "./ArtworkDetails";

export type ArtworkListPropType = {
  artworks: string[];
};

const ArtworkList = ({ artworks }: ArtworkListPropType) => {
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
      {artworks.map((artwork, i) => (
        <Card
          key={artwork}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArtworkDetails artworkId={artworks[i]} />
        </Card>
      ))}
    </Box>
  );
};

export default ArtworkList;
