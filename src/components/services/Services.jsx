import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Personal Work</span>

      <div className="services__container container grid">
        <div className="services__content first tweetie">
          <div>
            <i className="uil uil-twitter services__icon"></i>
            <h3 className="services__title">
              {/* Your service Title */}
              Tweetie
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">
                {/* Your Title */}
                Tweetie{" "}
                <a href="https://tweetie-8op2.onrender.com/">
                  <i class="uil uil-external-link-alt"></i>
                </a>
              </h3>
              {/* <p className="services__modal-description">
                            
                        </p> */}

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    A web-based social media platform, added features like
                    create and post tweets, follow other users, and view their
                    timelines.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Implemented secure user authentication and registration
                    using JWT and Bcrypt.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Utilized a variety of technologies, such as React, Redux,
                    Node, Express, MongoDB, Cloudinary, MUI, JWT, Bcrypt,
                    Multer, Formik.
                  </p>
                </li>

                {/* <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content coauthor">
          <div className="">
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              {/* Your Service title */}
              CoAuthor
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">
                {/* Your Title */}
                CoAuthor <a href="https://shivom007.github.io/coauthor/">
                  <i class="uil uil-external-link-alt"></i>
                </a>
              </h3>
              {/* <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> */}

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Developed a web-based collaborative text editor Where users can create, edit, and share documents
 in real time.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  The app enable users to add Image, Code block, Font style and many other features.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  The technologies employed included React, Javascript, Node.js, Express, Socket.io, MongoDB.
                  </p>
                </li>

                {/* <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content noteapi">
          <div>
            <i className="uil uil-server services__icon"></i>
            <h3 className="services__title">
              {/* Your Service Title */}
              NoteApi
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 3 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">
                {/* Your Title */}
                NoteApi <a href="https://github.com/shivom007/NoteApi">
                  <i class="uil uil-external-link-alt"></i>
                </a>
              </h3>
              {/* <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p> */}

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developed a secure restful Api that enables client to perform CRUD operation on Notes.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Implemented secure user authentication and registration
                    using JWT and Bcrypt and also introduced Rate Limiting to limit network traffic to prevent users from exhausting system resources.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  The technologies employed included Node.js, Express, MongoDB, Express-rate-limit, Bcrypt, Jwt.
                  </p>
                </li>

                {/* <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
