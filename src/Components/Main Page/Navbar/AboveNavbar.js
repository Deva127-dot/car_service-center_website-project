import React from 'react';
import styles from './navbar.module.css';
import img1 from "./auto-care.png";
import { ImFacebook2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { ImMobile } from 'react-icons/im';
import { BsClock } from 'react-icons/bs';
import { ImCalendar } from 'react-icons/im';

function AboveNavbar() {
  return (
    <div>
      <div className={styles.div1}>
        <img src={img1} alt="Auto Care" className={styles.img1} />
        <div className={styles.iconsDiv}>
          <ImFacebook2 className={styles.icon} />
          <BsInstagram className={styles.icon} />
          <BsLinkedin className={styles.icon} />
        </div>
        <ImMobile className={styles.mobIcon} />
        <p className={styles.mobNum}>+91 9895737373</p>
        <BsClock className={styles.clockIcon} />
        <p className={styles.mobNum}>Mon-Sun: 8 am – 10 pm (IST)</p>
        <button className={styles.bookNow}>
          Book Now <ImCalendar />
        </button>
      </div>
    </div>
  )
}

export default AboveNavbar
