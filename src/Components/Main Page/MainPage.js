import React, { useState } from "react";
import styles from "./mainPage.module.css";
import Navbar from "./Navbar/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpeg";
import img5 from "./img5.jpeg";
import Footer from "../Footer";
import Home2 from "../Home/Home2";
import About2 from "../About/About2";
import Services2 from "../Services/Services2";
import Workshop2 from "../Workshop/Workshop2";
import Contact2 from "../Contact/Contact2";

function MainPage() {
  const images = [img1, img2, img3, img4, img5];
  const [currImg, setCurrImg] = useState(0);

  const nextImg = () => {
    setCurrImg((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImg = () => {
    setCurrImg((prevIndex) => (prevIndex - 1) % images.length);
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.sub_Main}>
        <div className={styles.div1}>
          <p className={styles.getTheWings}>Get the Wings of Good Hands</p>
          <p className={styles.getTheWingsLorem}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur, dicta voluptate laborum sint ipsam magni corrupti animi
            distinctio natus suscipit aspernatur eius eum neque incidunt beatae
            earum reiciendis. Quis repudiandae quae quasi iure ducimus nisi
            tempora eveniet impedit est?
          </p>
        </div>
        <div className={styles.div2}>
          <img
            src="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg"
            alt="Auto Care"
            className={styles.img1}
          />
        </div>
      </div>
      <div className={styles.imgBoxDiv}>
        <button onClick={nextImg} className={styles.prevNextBtn1}>
          {" "}
          <ArrowBackIosNewIcon />{" "}
        </button>
        <img src={images[currImg]} alt="Auto Care" className={styles.imgBox} />
        <button onClick={nextImg} className={styles.prevNextBtn}>
          {" "}
          <ArrowForwardIosIcon />{" "}
        </button>
      </div>
      <p className={styles.heading2}>Fast and Fair Car Care</p>
      <Home2 />
      <About2/>
      <Services2/>
      <Workshop2/>
      <Contact2/>
      <Footer />
    </div>
  );
}

export default MainPage;
