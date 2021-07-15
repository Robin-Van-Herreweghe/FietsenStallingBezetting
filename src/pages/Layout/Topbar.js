import React from "react";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';

// Import scscs
import "./Topbar.css";

const Topbar = () => {
  
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <DirectionsBikeIcon className="bike-icon"/>
      <i className="navbar-brand">Fietsenstallingen</i>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a id="Gent" className="nav-link" href="http://localhost:3000/Gent">
            Gent
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
