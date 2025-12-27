# Exhibit.io

A React application for creating and viewing art exhibitions using the Art Institute of Chicago API.

## Features

- View featured artworks
- Browse random artworks
- Create custom exhibitions by searching and selecting artworks from the Art Institute of Chicago collection
- View exhibition lists and individual exhibitions
- Explore all exhibitions with pagination (10 per page)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the mock backend:

   ```bash
   npm run server
   ```

   This starts json-server on port 3001 serving the exhibit data.

3. Start the development server:
   ```bash
   npm run dev
   ```
   This starts the Vite dev server on port 5173.

## Usage

- Navigate to the "Create" page to create a new exhibition
- Search for artworks using the search bar
- Select artworks to add to your exhibition
- Fill in exhibition details (title, curator, description)
- Save the exhibition
- View all exhibitions on the "Exhibit" page

## Backend

The application uses json-server for a mock REST API. Exhibition data is stored in `src/backend/exhibit.json`.

## API

- GET /exhibit - Get all exhibitions
- GET /exhibit/:id - Get a specific exhibition
- POST /exhibit - Create a new exhibition
