import { render, screen } from "@testing-library/react";
import FeatureBox from "../FeatureBox";
import { Artwork } from "../../types/ArtworkType";

const mockArtworks: Artwork[] = [
  {
    id: 1,
    title: "Test Artwork 1",
    artist_title: "Test Artist 1",
    image_id: "test-image-1",
    description: "Test description 1",
  },
  {
    id: 2,
    title: "Test Artwork 2",
    artist_title: "Test Artist 2",
    image_id: "test-image-2",
    description: "Test description 2",
  },
];

describe("FeatureBox", () => {
  it("renders all artworks correctly", () => {
    render(<FeatureBox artworks={mockArtworks} />);

    // Check that titles are rendered
    expect(screen.getByText("Test Artwork 1")).toBeInTheDocument();
    expect(screen.getByText("Test Artwork 2")).toBeInTheDocument();

    // Check that artist titles are rendered
    expect(screen.getByText("Test Artist 1")).toBeInTheDocument();
    expect(screen.getByText("Test Artist 2")).toBeInTheDocument();

    // Check that IDs are rendered
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();

    // Check that image_ids are rendered
    expect(screen.getByText("test-image-1")).toBeInTheDocument();
    expect(screen.getByText("test-image-2")).toBeInTheDocument();

    // Check that descriptions are rendered
    expect(screen.getByText("Test description 1")).toBeInTheDocument();
    expect(screen.getByText("Test description 2")).toBeInTheDocument();

    // Check that images are rendered with correct src
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute(
      "src",
      "https://www.artic.edu/iiif/2/test-image-1/full/843,/0/default.jpg"
    );
    expect(images[1]).toHaveAttribute(
      "src",
      "https://www.artic.edu/iiif/2/test-image-2/full/843,/0/default.jpg"
    );
  });

  it("renders empty when no artworks provided", () => {
    render(<FeatureBox artworks={[]} />);

    // Should not render any cards
    const cards = screen.queryByRole("img");
    expect(cards).not.toBeInTheDocument();
  });
});
