import React from "react";
import styles from "./home.module.css";
import MainNavbar from "../MainNavbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GiGears } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import Footer from "../Footer";

function Home() {
  return (
    <div className={styles.main}>
      <MainNavbar />

      <div className={styles.sub_MainDiv}>
        <p className={styles.paraHeading}>
          Qualified Car Repair <br /> Service Center
        </p>
        <button className={styles.btn1}>
          Learn More <ArrowForwardIcon />
        </button>
      </div>

      {/* Div1 */}

      <div className={styles.div1}>
        <div className={styles.div1Img}>
          <img
            src="https://media.istockphoto.com/id/1461618838/photo/man-at-the-workshop-using-laptop.jpg?s=612x612&w=0&k=20&c=TjN0YBayaCXhjQLuxTujYi9domBizPO4mcHOvfaaJB8="
            alt="Auto Care Workshop"
            className={styles.Img1}
          />
        </div>
        <div className={styles.div1Slogan}>
          <p className={styles.div1Heading}>Engineered Hands for Care</p>
          <p className={styles.div1lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet
            vel autem, a cumque non odit omnis debitis maiores. Beatae deleniti
            unde corrupti, quibusdam voluptatem inventore delectus praesentium
            autem, quis perspiciatis repudiandae voluptates consequuntur nam
            aspernatur temporibus magni dolore. Veniam, animi cum expedita
            dignissimos at nemo voluptatum rem adipisci laudantium, sapiente
            inventore iste explicabo culpa, sint repudiandae nesciunt voluptate
            vitae.
          </p>
        </div>
      </div>

      {/* Div2 */}

      <div className={styles.div2}>
        <div className={styles.div2_1}>
          <p className={styles.div2_1Heading}>
            {" "}
            <GiGears className={styles.div2Icon} />
            Quality Servicing
          </p>
          <p className={styles.div2Lorem}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            temporibus libero quis eius fugit ratione!
          </p>
          <button className={styles.div2Btn}>
            Learn More <ArrowForwardIcon />
          </button>
        </div>
        <div className={styles.div2_1}>
          <p className={styles.div2_1Heading}>
            {" "}
            <MdEngineering className={styles.div2Icon} />
            Expert Workers
          </p>
          <p className={styles.div2Lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            quia. Voluptates voluptatum dignissimos veritatis quo?
          </p>
          <button className={styles.div2Btn}>
            Learn More <ArrowForwardIcon />
          </button>
        </div>
        <div className={styles.div2_1}>
          <p className={styles.div2_1Heading}>
            {" "}
            <FaTools className={styles.div2Icon} />
            Modern Equipment
          </p>
          <p className={styles.div2Lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            quia. Voluptates voluptatum dignissimos veritatis quo?
          </p>
          <button className={styles.div2Btn}>
            Learn More <ArrowForwardIcon />
          </button>
        </div>
      </div>

      {/* Div3 */}

      <div className={styles.div3}>
        <div className={styles.div3_1}>
          <img
            src="https://images.pexels.com/photos/4489721/pexels-photo-4489721.jpeg"
            alt="Garage Image"
            className={styles.div3Img}
          />
        </div>
        <div className={styles.div3_2}>
          <p className={styles.div3_2Heading}>
            <a style={{ color: "red" }}>Auto Care</a> Is the Best Place For Your{" "}
            <br />
            Car Servicing
          </p>
          <p className={styles.div3_2Lorem}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis quidem eaque, repellat nesciunt dicta, optio dolore sit
            animi in doloribus tempora consequuntur maiores. Eveniet sunt
            consequuntur, amet architecto nobis laudantium?
          </p>

          <div className={styles.div3_subdiv}>
            <div className={styles.div3_subdivNo}>01</div>
            <div>
              <a className={styles.div3_subdivHeading}>Professional & Expert</a>
              <a>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
            </div>
          </div>

          <div className={styles.div3_subdiv}>
            <div className={styles.div3_subdivNo}>02</div>
            <div>
              <a className={styles.div3_subdivHeading}>Professional & Expert</a>
              <a>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
            </div>
          </div>
          <div className={styles.div3_subdiv}>
            <div className={styles.div3_subdivNo}>03</div>
            <div>
              <a className={styles.div3_subdivHeading}>Professional & Expert</a>
              <a>Lorem ipsum dolor sit amet consectetur adipisicing.</a>
            </div>
          </div>
          <button className={styles.div3Btn}>
            Learn More <ArrowForwardIcon />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
