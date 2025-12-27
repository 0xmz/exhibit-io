import { useState, useEffect } from "react";
import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material";
import { Exhibit } from "../types/ExhibitType";
import axios from "axios";

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

const ExplorePage = () => {
  const [exhibits, setExhibits] = useState<Exhibit[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const limit = 10;

  useEffect(() => {
    const fetchExhibits = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3001/exhibit?_page=${currentPage}&_limit=${limit}`
        );
        setExhibits(response.data);
        const totalCount = parseInt(response.headers["x-total-count"] || "0");
        setTotalPages(Math.ceil(totalCount / limit));
      } catch (error) {
        console.error("Error fetching exhibits:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExhibits();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading) {
    return <Typography>Loading exhibits...</Typography>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Explore Exhibitions
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {exhibits.map((exhibit) => (
          <Grid item xs={6} key={exhibit.id}>
            <Item>
              <Button href={`exhibit/${exhibit.id}`}>{exhibit.title}</Button>
              <p>Curated by: {exhibit.curator}</p>
              {exhibit.description && (
                <p>
                  {exhibit.description.length > 100
                    ? `${exhibit.description.substring(0, 100)}...`
                    : exhibit.description}
                </p>
              )}
            </Item>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button
          variant="outlined"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          sx={{ mr: 2 }}
        >
          Previous
        </Button>
        <Typography sx={{ alignSelf: "center", mx: 2 }}>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          variant="outlined"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ExplorePage;
