import { Box } from "@mui/material";
import ArtworkList from "../components/ArtworkList";

export type ExhibitPropType = {
  ids: string[];
};

const ExhibitPage = ({ ids }: ExhibitPropType) => {
  return <Box>{<ArtworkList artworks={ids} />}</Box>;
};

export default ExhibitPage;
