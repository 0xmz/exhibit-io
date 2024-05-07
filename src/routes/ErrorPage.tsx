import { Box, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { getRandomInt } from "../utils/utils";
import useGetArtwork from "../api/useGetArtwork";
import FeatureBox from "../components/FeatureBox";
import Loading from "../components/Loading";

const randomNumberAsString = String(getRandomInt(1, 112773));

const ErrorPage = () => {
  const { artworkInfo, isLoading } = useGetArtwork(randomNumberAsString);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ResponsiveAppBar />
      <Box>
        {artworkInfo.length > 0 ? (
          <>
            <Typography>
              "Oops! This page does not exist. Here is a random artwork."
            </Typography>
            <FeatureBox artworks={artworkInfo} />
          </>
        ) : (
          <Typography>
            "Oops! This page does not exist. And the random artwork generated
            does not exist."
          </Typography>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
