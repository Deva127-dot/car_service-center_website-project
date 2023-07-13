import React from 'react';
import styles from './aboutUs.module.css';
import { FaRupeeSign } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";

function Benifits() {
  return (
    <>
        <p className={styles.div3Heading}>Benifits of Auto Care Services</p>
      <div className={styles.div3}>
        <div className={styles.div3Boxes}>
          <FaRupeeSign className={styles.div3Icons} />
          <p className={styles.div3BoxHeading}>Economical Pricing</p>
          <p className={styles.div3BoxLorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            nostrum architecto, explicabo debitis ea dolore at numquam eligendi
            quam vitae. consectetur adipisicing elit. Omn beatae eum dignissimos.
          </p>
        </div>
        <div className={styles.div3Boxes}>
          <GiGears className={styles.div3Icons} />
          <p className={styles.div3BoxHeading}>Genuine Spare Parts</p>
          <p className={styles.div3BoxLorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            nostrum architecto, explicabo debitis ea dolore at numquam eligendi
            quam vitae.
          </p>
        </div>
        <div className={styles.div3Boxes}>
          <FaCheckSquare className={styles.div3Icons} />
          <p className={styles.div3BoxHeading}>Full <br />Warranty</p>
          <p className={styles.div3BoxLorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            nostrum architecto, explicabo debitis consectetur adipisicing elit. Omnis velit aspernatur qui incidunt beatae eum dignissimos. ea dolore at numquam eligendi
            quam vitae.
          </p>
        </div>
        <div className={styles.div3Boxes}>
          <MdEngineering className={styles.div3Icons} />
          <p className={styles.div3BoxHeading}>Professional Service</p>
          <p className={styles.div3BoxLorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            nostrum architecto,quam vitae.
          </p>
        </div>
        <div className={styles.div3Boxes}>
          <BsClockFill className={styles.div3Icons} />
          <p className={styles.div3BoxHeading}>Customer Convenience</p>
          <p className={styles.div3BoxLorem}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis velit aspernatur qui incidunt beatae eum dignissimos. Aspernatur asperiores hic eos impedit vel fugiat cum Sit nesciunt nisi perspiciatis non totam, quis facere porro. Quidem, dicta!
          </p>
        </div>
      </div>
    </>
  )
}

export default Benifits
