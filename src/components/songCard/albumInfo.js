import React from "react";
import "./albumInfo.css";

export default function AlbumInfo({ album }) {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
      </div>
      <div className="centralizar">
        <div className="album-info">
          <p>{`${album?.name} é um ${
            album?.album_type
          } feito por ${artists?.join(", ")} com ${
            album?.total_tracks
          } musica(s)`}</p>
        </div>
        <div className="album-release">
          <p>Data de lançamento: {album?.release_date}</p>
        </div>
      </div>
    </div>
  );
}
