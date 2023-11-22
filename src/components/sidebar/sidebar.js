import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import Sidebarbutton from "../sidebarButton/sidebarbutton";
import apiClient from "../../spotify";
export default function Sidebar() {
  const [image, setImage] = useState(
    "https://i.pinimg.com/originals/c6/98/11/c69811cde42686f38c7b728691eb88a4.jpg"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  return (
    <div className="sidbar-container">
      <img src={image} className="profile-img" alt="profile" />
      <div>
        <Sidebarbutton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <Sidebarbutton title="Trending" to="/trending" icon={<FaGripfire />} />
        <Sidebarbutton title="Player" to="/player" icon={<FaPlay />} />
        <Sidebarbutton
          title="Favoritas"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <Sidebarbutton title="Biblioteca" to="/" icon={<IoLibrary />} />
      </div>
      <Sidebarbutton title="Sair" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
