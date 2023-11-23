import React, { useState, useEffect } from "react";
import APIKit, { Atualizar } from "../../spotify";
import "./library.css";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    APIKit.get("me/playlists")
      .then(function (response) {
        setPlaylists(response.data.items);
      })
      .catch(function (error) {
        if (error.response && error.response.status === 401) {
          Atualizar();
        } else {
          // Tratar outros erros
        }
      });
  }, []);
  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };
  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
          >
            {playlist.images.length > 0 && (
              <img
                src={playlist.images[0].url}
                className="playlist-image"
                alt="Playlist-Art"
              />
            )}
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              <IconContext.Provider value={{ size: "50px", color: "#f23c27" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
