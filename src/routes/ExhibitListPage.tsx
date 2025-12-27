// TODO: Create paginated API that returns exhibit listing from database

import { Button, Grid, Paper, styled } from "@mui/material";
import useFetch from "../api/useFetch";
import { BASE_API_URL } from "../utils/constants";
import { Exhibit } from "../types/ExhibitType";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const ExhibitListPage = () => {
  const { data: exhibits, isPending, error } = useFetch(BASE_API_URL);

  if (isPending) return <p>Loading exhibits...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {exhibits?.map((exhibit: Exhibit) => (
        <Grid item xs={6} key={exhibit.id}>
          <Item>
            <Button href={`exhibit/${exhibit.id}`}>{exhibit.title}</Button>
            <p>Curated by: {exhibit.curator}</p>
          </Item>
        </Grid>
      ))}
      <Grid item xs={6}>
        <Item>
          <Button href="/create-exhibit">Create New Exhibit</Button>
        </Item>
      </Grid>
    </Grid>
  );
};

export default ExhibitListPage;
