import React from "react";
import styles from "./contact.module.css";
import MainNavbar from "../MainNavbar";
import Footer from "../Footer";
import { ImMobile } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

function Contact() {
  return (
    <div className={styles.main}>
      <MainNavbar />

      {/* Div1 */}

      <div className={styles.div1}>
        <p className={styles.div1Heading}>Contact Us...</p>
      </div>

      {/* Div2 */}

      <p className={styles.div2Heading}>Leave Us a Message</p>
      <div className={styles.div2}>
        <div className={styles.div2Box}>
          <div>
            <ImMobile className={styles.div2Icon} />
          </div>
          <div>
            <p className={styles.div2BoxHeading}>Customer Support</p>
            <p className={styles.div2BoxInfo}>+91 8348678168</p>
            <p className={styles.div2BoxInfo}>+91 8348678169</p>
          </div>
        </div>
        <div className={styles.div2Box}>
          <div>
            <IoMdMail className={styles.div2Icon} />
          </div>
          <div>
            <p className={styles.div2BoxHeading}>Email</p>
            <p className={styles.div2BoxInfo}>autocare@gmail.com</p>
          </div>
        </div>
        <div className={styles.div2Box}>
          <div>
            <MdLocationPin className={styles.div2Icon} />
          </div>
          <div>
            <p className={styles.div2BoxHeading}>Corporate Office</p>
            <p className={styles.div2BoxInfo}>
              Lorem, ipsum dolor,
              <br />
              Mumbai 400052
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
