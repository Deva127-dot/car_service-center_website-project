import React from "react";
import styles from "./workshop.module.css";
import MainNavbar from "../MainNavbar";
import Footer from "../Footer";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUserClock } from "react-icons/fa";

function Workshop() {
  return (
    <div className={styles.main}>
      <MainNavbar />
      <div className={styles.div1}>
        <p className={styles.div1Heading}>Our Workshops...</p>
      </div>
      <div className={styles.div2}>
        <div className={styles.div2_1}>
          <p>
            Fully Equipped Car <br />
            Repair Workshops
          </p>
        </div>
        <div className={styles.div2_2}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            repellendus odio illo sequi beatae? Alias nobis reiciendis, earum
            cupiditate officiis cum neque vero quisquam facere perferendis
            architecto expedita inventore molestiae iusto vitae. Distinctio
            culpa reiciendis quod minus ullam, pariatur voluptas nemo
            accusantium nostrum inventore, facilis consectetur voluptates quo?
            Eligendi ducimus beatae officiis ut facere tempore voluptatem
            explicabo magnam hic voluptate obcaecati placeat dolor quaerat,
            totam in velit atque optio maxime.
          </p>
        </div>
      </div>

      {/* Div3 */}

      <div className={styles.div3}>
        <div className={styles.div3Sub1}>
          <p className={styles.div3Sub1Heading}>
            All Car Maintenance <br />
            Needs to be Fulfilled <br /> Under One Roof
          </p>
          <p className={styles.div3Sub1Lorem}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit soluta
            assumenda culpa repudiandae officia molestias magnam aut a
            recusandae in. Quasi, adipisci reprehenderit. Unde optio iure hic
            ullam animi, a quas impedit perferendis recusandae cumque esse
            ipsam, tenetur ratione rem harum alias culpa, repellat velit
            perspiciatis praesentium fugit maiores libero impedit qui. Dolorum
            iusto dignissimos placeat nisi odit illum!
          </p>
          <a className={styles.IconHeading}>
            <button className={styles.IconBtn}>
              <FaHandHoldingUsd style={{ fontSize: "25px" }} />
            </button>
            Economical Pricing
          </a>
          <a className={styles.IconHeading}>
            <button className={styles.IconBtn}>
              <GiGears style={{ fontSize: "25px" }} />
            </button>
            Genuine Spare Parts with Warranty
          </a>
          <a className={styles.IconHeading}>
            <button className={styles.IconBtn}>
              <BsFillCheckSquareFill style={{ fontSize: "25px" }} />
            </button>
            Best Services at Your Doorstep
          </a>
        </div>
        <div className={styles.div3Sub2}>
          <div className={styles.div3Sub2_1}>
            <div className={styles.div3Sub2_1a}>
              <div>
                <FaMapMarkedAlt className={styles.div3Sub2Icon} />
              </div>
              <div>
                <p className={styles.div3Sub2IconHeading}>
                  100+ Car Repair Workshops Across India
                </p>
                <p className={styles.div3Sub2IconLorem}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero recusandae reprehenderit porro, suscipit culpa quisquam
                  soluta aliquid molestias esse! Officia earum voluptatum
                  adipisci at dicta! Fugit quibusdam minima expedita ad!
                  suscipit culpa quisquam soluta aliquid molestias esse!
                </p>
              </div>
            </div>

            <div className={styles.div3Sub2_1a}>
              <div>
                <GiSpanner className={styles.div3Sub2Icon} />
              </div>
              <div>
                <p className={styles.div3Sub2IconHeading}>
                  Industry Rated Top Notch Equipment's
                </p>
                <p className={styles.div3Sub2IconLorem}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero recusandae reprehenderit porro, suscipit culpa quisquam
                  soluta aliquid molestias esse! Officia earum voluptatum
                  adipisci at dicta! Fugit quibusdam minima expedita ad!
                </p>
              </div>
            </div>
          </div>

          <div className={styles.div3Sub2_1}>
            <div className={styles.div3Sub2_1a}>
              <div>
                <BsPersonWorkspace className={styles.div3Sub2Icon} />
              </div>
              <div>
                <p className={styles.div3Sub2IconHeading}>
                  Technology Integration For Accurate Car Diagnostics
                </p>
                <p className={styles.div3Sub2IconLorem}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. rit
                  porro, suscipit culpa quisquam soluta aliquid molestias esse!
                  Officia earum voluptatum adipisci at dicta! Fugit quibusdam
                  minima expedita ad!
                </p>
              </div>
            </div>

            <div className={styles.div3Sub2_1a}>
              <div>
                <FaUserClock className={styles.div3Sub2Icon} />
              </div>
              <div>
                <p className={styles.div3Sub2IconHeading}>
                  Offering Complete On-Demand Convenience
                </p>
                <p className={styles.div3Sub2IconLorem}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero recusandae reprehenderit porro, suscipit culpa quisquam
                  soluta aliquid molestias esse! Officia earum voluptatum
                  adipisci at dicta! Fugit quibusdam minima expedita ad! amet,
                  consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Workshop;
