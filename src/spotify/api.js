// src/spotify/api.js

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = "http://localhost:5173/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const SCOPES = ["user-top-read"]; // You can add more scopes if needed

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${SCOPES.join("%20")}`;

// Optional: example API call (only usable after token is set)
export const getTopTracks = async (token) => {
  const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch top tracks");
  }

  const data = await response.json();
  return data;
};
