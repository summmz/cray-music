import React, { useEffect } from "react";
import { loginUrl, getTopTracks } from "../spotify/api";

function Home() {
  useEffect(() => {
    const token = window.location.hash
      .substring(1)
      .split("&")
      .find(item => item.startsWith("access_token"))
      ?.split("=")[1];

    if (token) {
      getTopTracks(token).then(tracks => {
        console.log("Top tracks:", tracks);
      });
    }
  }, []);

  return (
    <div>
      <h1>Cray Music</h1>
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Home;
