import React from "react";
import styles from "./mainNavbar.module.css";
import img from "./Main Page/Navbar/auto-care.png";
import { FaHome } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import { FaTools } from 'react-icons/fa'
import { MdEmojiTransportation } from 'react-icons/md'
import { PiPhoneCallFill } from 'react-icons/pi'
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <div className={styles.div2}>
      <Link to='/'>  <img src={img} alt="Garage Logo" className={styles.garageLogo} /></Link>
      <Link to='/home' className={styles.link} > <p className={styles.opt}>
        <FaHome />
        Home
      </p></Link>
      <p className={styles.opt}>|</p>
      <Link to='/about' className={styles.link} > <p className={styles.opt}>
        <FaList />
        About
      </p></Link>
      <p className={styles.opt}>|</p>
      <Link to='/services' className={styles.link} >  <p className={styles.opt}>
        <FaTools />
        Services
      </p></Link>
      <p className={styles.opt}>|</p>
      <Link to='/workshop' className={styles.link} ><p className={styles.opt}>
          <MdEmojiTransportation />
        Workshops
      </p></Link>
      <p className={styles.opt}>|</p>
      <Link to='/contact' className={styles.link} >  <p className={styles.opt}>
        <PiPhoneCallFill />
        Contact
      </p></Link>
    </div>
  );
}

export default MainNavbar;
