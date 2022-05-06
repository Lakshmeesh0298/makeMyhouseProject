import React, { useContext, useEffect, useRef } from "react";
import reacliOM from "react-dom";
import {
  FaTimes,
  FaHome,
  FaHeart,
  FaUserCircle,
  FaHandPointer,
  FaEdge,
  FaSearchDollar,
  FaBell,
  FaRegLightbulb,
  FaHandHoldingWater,
  FaAngleDown,
  FaQuestionCircle,
  FaApple,
  FaGooglePlay,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  BiCheckCircle,
  BiHomeHeart,
  BiHomeSmile,
  BiBox,
  BiChevronRight,
} from "react-icons/bi";
import { SiGoogletranslate } from "react-icons/si";
import { sidebarContext } from "../../apis/context/SideBarContext";
import Styles from "../sidebar/sidebar.module.css";
const SidebarMenu = () => {
  let toogelRef = useRef();
  let { toggle, setToggle } = useContext(sidebarContext);
  useEffect(() => {
    document.addEventListener("click", () => {
      if (toogelRef.current.classList.contains("open")) {
        setToggle(false);
      }
    });
  }, []);

  let SideBarMenu = () => {
    return (
      <>
        <div
          className={`${toggle == true ? "open" : "close"} `}
          ref={toogelRef}
          onClick={e => e.stopPropagation()}
        >
          <span onClick={() => setToggle(!toggle)}>
            <FaTimes />
          </span>
          <div className={Styles.sidebarBlock}>
            <div className={Styles.sidebarBlockDiv1}>
              <span>
                <FaUserCircle />
              </span>
              <div>
                <h1>Hello👋</h1>
                <p>
                  <span>
                    <BiCheckCircle />
                  </span>
                  Easy Contact with sellers
                </p>
                <p>
                  <span>
                    <BiCheckCircle />
                  </span>
                  Personalized experience
                </p>
              </div>
              <span>
                <button>Login</button>
              </span>
            </div>
            <div className={Styles.sidebarBlockDiv2}>
              <h1>My Activity</h1>
              <main>
                <ul>
                  <li>
                    <span>
                      <FaHome />
                    </span>
                    <span>Contacted Properties</span>
                  </li>
                  <li>
                    <span>
                      <BiHomeHeart />
                    </span>
                    <br />
                    <span>Seen Properties</span>
                  </li>
                  <li>
                    <span>
                      <FaHeart />
                    </span>
                    <br />
                    <span>Saved Properties</span>
                  </li>
                  <li>
                    <span>
                      <BiHomeSmile />
                    </span>
                    <br />
                    <span>Recent Searches</span>
                  </li>
                </ul>
              </main>
            </div>
          </div>
          <div className={Styles.transaction}>
            <div>
              <ul>
                <li>
                  <BiBox />
                </li>
                <li>My Transactions</li>
              </ul>
            </div>
            <div className={Styles.detailsSummaryBlock}>
              <details>
                <summary>
                  <ul>
                    <li>
                      <FaHandPointer />
                    </li>
                    <li>Quick Links</li>
                    <li>
                      <FaAngleDown />
                    </li>
                  </ul>
                </summary>
                <main className={Styles.detailData}>
                  <ul>
                    <li>
                      <span>
                        <FaHome />
                      </span>
                      <span>Contacted Properties</span>
                    </li>
                    <li>
                      <span>
                        <BiHomeHeart />
                      </span>
                      <br />
                      <span>Seen Properties</span>
                    </li>
                    <li>
                      <span>
                        <FaHeart />
                      </span>
                      <br />
                      <span>Saved Properties</span>
                    </li>
                    <li>
                      <span>
                        <BiHomeSmile />
                      </span>
                      <br />
                      <span>Recent Searches</span>
                    </li>
                  </ul>
                </main>
              </details>

              <details>
                <summary>
                  <ul>
                    <li>
                      <FaEdge />
                    </li>
                    <li>Housing Edge</li>
                    <li>
                      <FaAngleDown />
                    </li>
                  </ul>
                </summary>
              </details>
              <details>
                <summary>
                  <ul>
                    <li>
                      <FaHandHoldingWater />
                    </li>
                    <li>Services</li>
                    <li>
                      <FaAngleDown />
                    </li>
                  </ul>
                </summary>
              </details>
              <details>
                <summary>
                  <ul>
                    <li>
                      <FaSearchDollar />
                    </li>
                    <li>Top Search</li>
                    <li>
                      <FaAngleDown />
                    </li>
                  </ul>
                </summary>
              </details>
              <details>
                <summary>
                  <ul>
                    <li>
                      <FaBell />
                    </li>
                    <li>Unsubscribe Alerts</li>
                    <li>
                      <FaAngleDown />
                    </li>
                  </ul>
                </summary>
              </details>
              <details>
                <summary>
                  <ul>
                    <li>
                      <FaRegLightbulb />
                    </li>
                    <li>Housing Advice</li>
                    <li>
                      <FaAngleDown />
                    </li>
                  </ul>
                </summary>
              </details>
            </div>
          </div>
          <div className={Styles.btndiv1}>
            <button>
              <ul>
                <li>
                  <FaQuestionCircle />
                </li>
                <li>Visit Help Center</li>
                <li>
                  <BiChevronRight />
                </li>
              </ul>
            </button>
          </div>
          <div className={Styles.btndiv2}>
            <button>
              <ul>
                <li>
                  <SiGoogletranslate />
                </li>
                <li>Preferred Language</li>
                <li>भाषा बदलें</li>
              </ul>
            </button>
          </div>
          <section className={Styles.downloadBlock}>
            <div>
              <main>
                <h4>Download Housing App</h4>
                <aside>
                  <button>
                    <FaApple />
                    <span>
                      Download on the <br /> <strong>App Store</strong>
                    </span>
                  </button>
                  <button>
                    <FaGooglePlay />
                    <span>
                      Get on it <br /> <strong>Google Play</strong>
                    </span>
                  </button>
                </aside>
              </main>
              <img
                src="https://cdn.pixabay.com/photo/2021/12/12/16/10/qr-6865526_1280.png"
                alt="scaner"
              />
            </div>
          </section>
          <div className={Styles.sidebarEnd}>
            <ul>
              <li>Follow on</li>
              <li>
                <FaFacebook />
              </li>
              <li>
              
                <FaYoutube />
              </li>
              <li>
              
                <FaTwitter />
              </li>
              <li>
              
                <FaLinkedin />
              </li>
              <li>
              
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  return reacliOM.createPortal(
    <SideBarMenu />,
    document.getElementById("sidebarMenu")
  );
};

export default SidebarMenu;
