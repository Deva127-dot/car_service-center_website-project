import React from "react";
import styles from "./footer.module.css";
import img from "./Main Page/Navbar/auto-care.png";
import { FaHome } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.sub_main1}>
        {/* Div1 */}

        <div className={styles.div1}>
          <Link to="/">
            {" "}
            <img src={img} alt="Auto Care" className={styles.img} />
          </Link>
          <p className={styles.div1Heading}>
            Your One Stop Solution For All Car Maintenance Needs
          </p>
          <p className={styles.div1Services}>
            Best Car Service | Car Repair | Car Wash | Car Denting Painting |
            Car Ac Service In India
          </p>
        </div>

        {/* Div2 */}

        <div className={styles.div1}>
          <p className={styles.div2IconHeading}>
            <FaHome className={styles.div2Icon} />
            Corporate Office
          </p>
          <a className={styles.div2Info}>
            Lorem, ipsum dolor, <br />
            Mumbai 400052
          </a>
          <p className={styles.div2IconHeading}>
            <BiSolidPhone className={styles.div2Icon} />
            24/7 Customer Support
          </p>
          <a className={styles.div2Info}>
            +91 8348678168 <br />
            +91 8348678169
          </a>
          <p className={styles.div2IconHeading}>
            <FaRegClock className={styles.div2Icon} />
            Office Business Hours
          </p>
          <a className={styles.div2Info}>Mon - Sun: 8AM - 10PM(IST)</a>
          <p className={styles.div2IconHeading}>
            <IoMdMail className={styles.div2Icon} />
            Mail
          </p>
          <a className={styles.div2Info}>autocare@gmail.com</a>
          <a className={styles.div2Icons}>
            <FaFacebookSquare className={styles.icon} />
            <FaLinkedin className={styles.icon} />
            <FiInstagram className={styles.icon} />
            <FaWhatsapp className={styles.icon} />
          </a>
        </div>

        {/* Div3 */}

        <div className={styles.div1}>
          <p className={styles.div3Heading}> Popular Workshop Location</p>
          <p className={styles.div2IconHeading}>
            <MdLocationOn className={styles.div2Icon} /> Mumbai
          </p>
          <a className={styles.div2Info}>10+ Workshops Acrross Mumbai</a>
          <p className={styles.div2IconHeading}>
            <MdLocationOn className={styles.div2Icon} /> Navi Mumbai
          </p>
          <a className={styles.div2Info}>8 Workshops Acrross Mumbai</a>
          <p className={styles.div2IconHeading}>
            <MdLocationOn className={styles.div2Icon} /> Thane
          </p>
          <a className={styles.div2Info}>15+ Workshops Acrross Mumbai</a>
          <p className={styles.div2IconHeading}>
            <MdLocationOn className={styles.div2Icon} /> Pune
          </p>
          <a className={styles.div2Info}>15+ Workshops Acrross Mumbai</a>
        </div>
      </div>
      <div className={styles.sub_main2}>
        <p>© Auto-Care Technologies Pvt. Ltd. - 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
