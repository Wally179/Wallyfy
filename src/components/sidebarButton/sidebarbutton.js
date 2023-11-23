import React from "react";
import "./sidebarbutton.css";

import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";

export default function Sidebarbutton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to && props.title !== "Sair";

  const btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}
