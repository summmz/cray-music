// api.js
import axios from 'axios';

export const getTopTracks = async (token) => {
  const res = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.items;
};
