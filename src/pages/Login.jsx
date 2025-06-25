// Login.jsx
import React from 'react';

const CLIENT_ID = 'your_spotify_client_id';
const REDIRECT_URI = 'http://localhost:3000/callback';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

export default function Login() {
  return (
    <div className="text-center mt-40 text-white">
      <h1 className="text-4xl font-bold mb-8">Cray Music 🎧</h1>
      <a
        className="px-6 py-3 bg-green-500 rounded text-white font-bold"
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read user-read-playback-state user-modify-playback-state`}
      >
        Login with Spotify
      </a>
    </div>
  );
}
