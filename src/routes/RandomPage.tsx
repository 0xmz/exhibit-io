import { Box, Button, Typography } from "@mui/material";
import { getRandomInt } from "../utils/utils";
import useGetArtwork from "../api/useGetArtwork";
import FeatureBox from "../components/FeatureBox";
import Loading from "../components/Loading";
import { useState } from "react";

// does not seed the random number correctly; find a library to generate random seed
const RandomPage = () => {
  const randomNumberAsString = String(getRandomInt(1, 112773));
  const [randomNumber, setRandomNumber] = useState("");
  const { artworkInfo, isLoading } = useGetArtwork(randomNumber);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Button
        onClick={() => {
          setRandomNumber(() => randomNumberAsString);
          console.log(randomNumberAsString);
        }}
      >
        SHOW ME A RANDOM ARTWORK
      </Button>
      <Box>
        {artworkInfo.length > 0 ? (
          <>
            <FeatureBox artworks={artworkInfo} />
          </>
        ) : (
          <Typography>
            The random artwork of id {randomNumber} does not exist. Try
            generating a new one.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default RandomPage;
