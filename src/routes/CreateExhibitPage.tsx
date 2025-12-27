import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
} from "@mui/material";
import { Artwork } from "../types/ArtworkType";
import { Exhibit } from "../types/ExhibitType";
import useSearchArtworks from "../api/useSearchArtworks";
import axios from "axios";
import { useNavigate } from "react-router";

const CreateExhibitPage = () => {
  const [title, setTitle] = useState("");
  const [curator, setCurator] = useState("");
  const [description, setDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArtworks, setSelectedArtworks] = useState<Artwork[]>([]);
  const { artworks: searchResults, isLoading } = useSearchArtworks(searchQuery);
  const navigate = useNavigate();

  const handleAddArtwork = (artwork: Artwork) => {
    if (!selectedArtworks.find((a) => a.id === artwork.id)) {
      setSelectedArtworks([...selectedArtworks, artwork]);
    }
  };

  const handleRemoveArtwork = (id: number) => {
    setSelectedArtworks(selectedArtworks.filter((a) => a.id !== id));
  };

  const handleSubmit = async () => {
    const newExhibit: Exhibit = {
      title,
      curator,
      description,
      artworks: selectedArtworks,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/exhibit",
        newExhibit
      );
      navigate(`/exhibit/${response.data.id}`);
    } catch (error) {
      console.error("Error creating exhibit:", error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Create New Exhibition
      </Typography>

      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Curator"
        value={curator}
        onChange={(e) => setCurator(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
        multiline
        rows={4}
      />

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Add Artworks
      </Typography>

      <TextField
        fullWidth
        label="Search Artworks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        margin="normal"
      />

      {isLoading && <Typography>Loading...</Typography>}

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {searchResults.map((artwork) => (
          <Grid item xs={12} sm={6} md={4} key={artwork.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`}
                alt={artwork.title}
              />
              <CardContent>
                <Typography variant="h6">{artwork.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {artwork.artist_title}
                </Typography>
                <Button
                  size="small"
                  onClick={() => handleAddArtwork(artwork)}
                  disabled={selectedArtworks.some((a) => a.id === artwork.id)}
                >
                  Add to Exhibit
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Selected Artworks
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {selectedArtworks.map((artwork) => (
          <Chip
            key={artwork.id}
            label={artwork.title}
            onDelete={() => handleRemoveArtwork(artwork.id)}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mt: 3 }}
        disabled={!title || !curator || selectedArtworks.length === 0}
      >
        Create Exhibition
      </Button>
    </Box>
  );
};

export default CreateExhibitPage;
