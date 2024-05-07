import FeatureBox from "../components/FeatureBox";
import useGetArtwork from "../api/useGetArtwork";
import Loading from "../components/Loading";

export type FeaturedPropType = {
  ids: string;
};

const Featured = ({ ids }: FeaturedPropType) => {
  const { artworkInfo, isLoading } = useGetArtwork(ids);

  if (isLoading) {
    return <Loading />;
  }

  return <FeatureBox artworks={artworkInfo}></FeatureBox>;
};

export default Featured;
