import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.replace("#", "?")).get("access_token");
    if (token) {
      localStorage.setItem("spotify_access_token", token);
      navigate("/home");
    }
  }, [navigate]);

  return <div className="text-white text-center mt-40">Logging in...</div>;
}