import React from 'react';
import styles from './services.module.css';
import { FaOilCan } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { BsFan } from "react-icons/bs";
import { FaCarBattery } from "react-icons/fa";
import { FaSprayCan } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import Benifits from '../About/Benifits';

function Services2() {
  return (
    <div className={styles.main}>

      {/* Div2 */}

      <div className={styles.div2}>
        <div className={styles.div2_1}>
          <p>
            All Car Maintenance <br />
            Services Under One Roof
          </p>
        </div>
        <div className={styles.div2_2}>
          <p className={styles.div2Lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            nulla! Aliquid similique quod, numquam, sint illo ut molestias
            libero amet dolorum ab tempora omnis soluta? In repudiandae fugit
            iusto facilis cum magnam soluta fugiat ad assumenda quos neque quod
            id quibusdam, cumque debitis voluptatum inventore? Eveniet libero
            amet dolorum ab tempora omnis soluta? In repudiandae fugit iusto
            facilis cum magnam soluta fugiat ad assumenda quos neque quod quis
            mollitia incidunt optio iusto dolorum labore dolores dolorem
            corporis quae illo, magnam cumque?
          </p>
        </div>
      </div>

      {/* Div3 */}

      <div className={styles.div3}>
        <div className={styles.div3Box}>
          <FaOilCan className={styles.div3Icons} />
          <p className={styles.div3IconsHeading}>Periodic Car Service</p>
        </div>
        <div className={styles.div3Box}>
          <FaTools className={styles.div3Icons} />
          <p className={styles.div3IconsHeading}>Custom Car Repair</p>
        </div>
        <div className={styles.div3Box}>
          <FaCarCrash className={styles.div3Icons} />
          <p className={styles.div3IconsHeading}>Car Denting Painting</p>
        </div>
      </div>

      <div className={styles.div3}>
        <div className={styles.div3Box}>
          <GiCarWheel className={styles.div3Icons} />
          <p className={styles.div3IconsHeading}>Car Wheel Care</p>
        </div>
        <div className={styles.div3Box}>
          <BsFan className={styles.div3Icons} />
          <p className={styles.div3IconsHeading}>Car AC Service</p>
        </div>
        <div className={styles.div3Box}>
          <FaCarBattery className={styles.div3Icons} />
          <p className={styles.div3IconsHeading}>Car Battery Care</p>
        </div>
      </div>

      <div className={styles.div3}>
        <div className={styles.div3Box}>
          <FaSprayCan className={styles.div3Icons} />
          <p className={styles.div3IconsHeading}>Car Wash & Detailing</p>
        </div>
        <div className={styles.div3Box}>
          <RiNewspaperLine className={styles.div3Icons} />
          <p className={styles.div3IconsHeading}>Cashless Insurance Claims</p>
        </div>
      </div>

      {/* Div4 */}

      <div className={styles.div4}>
        <Benifits/>
      </div>

    </div>
  )
}

export default Services2
