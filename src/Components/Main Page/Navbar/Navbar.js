import React from "react";
import styles from "./navbar.module.css";
import HouseIcon from "@mui/icons-material/House";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ConstructionIcon from "@mui/icons-material/Construction";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import ArticleIcon from "@mui/icons-material/Article";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AboveNavbar from "./AboveNavbar";
import img from './auto-care.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Above Navbar */}

  <AboveNavbar/>
    
  <div className={styles.main}>
      {/* Navbar */}

      <div className={styles.div2}>
      <img src={img} alt="Auto Care" className={styles.garageLogo} />
        <Link to='/home' className={styles.link} >  <p className={styles.opt}>
          <HouseIcon />
          Home
        </p></Link>
        <p className={styles.opt}>|</p>
        <Link to='/about' className={styles.link} > <p className={styles.opt}>
            <FormatListBulletedIcon />
          About
        </p></Link>
        <p className={styles.opt}>|</p>
        <Link to='/services' className={styles.link} >  <p className={styles.opt}>
          <ConstructionIcon />
          Services
        </p></Link>
        <p className={styles.opt}>|</p>
        <Link to='/workshop' className={styles.link} >  <p className={styles.opt}>
          <EmojiTransportationIcon />
          Workshops
        </p></Link>
        <p className={styles.opt}>|</p>
        <Link to='/contact' className={styles.link} >  <p className={styles.opt}>
          <PhoneInTalkIcon />
          Contact
        </p></Link>
      </div>
    </div>
    </>
  );
}

export default Navbar;
