import React from "react";
import styles from "./aboutUs.module.css";
import MainNavbar from "../MainNavbar";
import Footer from "../Footer";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import Benifits from "./Benifits";

function AboutUs() {
  return (
    <div className={styles.main}>
      <MainNavbar />
      <div className={styles.sub_main}>
        <p className={styles.aboutHeading}>About Us...</p>
      </div>

      {/* Div1 */}

      <div className={styles.div1}>
        <div className={styles.div1_1}>
          <img
            src="https://media.istockphoto.com/id/1212563205/photo/automotive-mechanic-young-men-checking-under-car-condition-in-garage-at-auto-repair-shop.jpg?s=612x612&w=0&k=20&c=jpq-BXnVo1pEcRdUihGIvWmYVGhsoNYfbmoWLxNPOgY="
            alt="About Us Image"
            className={styles.div1Img}
          />
        </div>
        <div className={styles.div1_2}>
          <p className={styles.div1Heading}>About Us...</p>
          <p className={styles.div1Lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            reprehenderit odio sit repellendus, quia aspernatur corporis
            accusantium ullam nulla recusandae dolores quas numquam sapiente
            deleniti culpa quidem! Consequuntur fugit inventore vel officia illo
            eligendi, repellat quasi esse consectetur? Iusto ut obcaecati non,
            nam quod consectetur minus, doloribus unde quia officiis molestiae
            odit delectus sapiente aperiam ab animi repellendus eius voluptatum
            laudantium beatae. Veniam sapiente sed nulla pariatur in porro
            aliquid.
          </p>
        </div>
      </div>

      <p className={styles.paraLine}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        vero provident delectus dignissimos tempora vel sint in itaque rerum
        odit.
      </p>

      {/* Div2 */}

      <div className={styles.div2}>
        <div className={styles.div2Box}>
          <FaMapMarkedAlt className={styles.div2Icon} />
          <p className={styles.div2IconHeading}>4 Cities</p>
          <p className={styles.div2Lorem}>
            Lorem ipsum dolor sit, amet consectetur dem.
          </p>
        </div>
        <div className={styles.div2Box}>
          <MdWarehouse className={styles.div2Icon} />
          <p className={styles.div2IconHeading}>Auto Care Owned Workshops</p>
          <p className={styles.div2Lorem}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            blanditiis soluta atque.
          </p>
        </div>
        <div className={styles.div2Box}>
          <MdGroups className={styles.div2Icon} />
          <p className={styles.div2IconHeading}>1,00,000+ Customers</p>
          <p className={styles.div2Lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis?
          </p>
        </div>
      </div>

      {/* Div3 */}

      <Benifits/>

      <Footer />
    </div>
  );
}

export default AboutUs;
