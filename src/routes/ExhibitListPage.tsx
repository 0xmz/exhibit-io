// TODO: Create paginated API that returns exhibit listing from database

import { Button, Grid, Paper, styled } from "@mui/material";

export type ExhibitListPropType = {
  id: string;
};

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
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Item>
          <Button href="exhibit/1">Exhibit 1</Button>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <Button href="exhibit/2">Exhibit 2</Button>
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>3</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>4</Item>
      </Grid>
    </Grid>
  );
};

export default ExhibitListPage;
