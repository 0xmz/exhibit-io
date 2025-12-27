import { Box, Card } from "@mui/material";
import ArtworkDetails from "./ArtworkDetails";

export type ArtworkListPropType = {
  exhibitId: string | undefined;
};

const ArtworkList = ({ exhibitId }: ArtworkListPropType) => {
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
      <Card>
        <ArtworkDetails exhibitId={exhibitId} />
      </Card>
    </Box>
  );
};

export default ArtworkList;
