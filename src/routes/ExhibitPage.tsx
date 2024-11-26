import { Box } from "@mui/material";
import ArtworkList from "../components/ArtworkList";
import { useParams } from "react-router";

const ExhibitPage = () => {
  const { id } = useParams();
  console.log("id: ", id);
  return <Box>{<ArtworkList exhibitId={id} />}</Box>;
};

export default ExhibitPage;
