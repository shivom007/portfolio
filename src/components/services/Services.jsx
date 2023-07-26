import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index)
    }

  return (
    <section className="services section" id="portfolio" >
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Personal Work</span>

        <div className="services__container container grid" >
            <div className="services__content first"> 
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        {/* Your service Title */}
                        CoAuthor
                    </h3>
                </div>


                <span className="services__button" onClick={() => toggleTab(1)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggle === 1 ? "services__modal active-modal" :"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick = {() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">
                            {/* Your Title */}
                            CoAuthor
                        </h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content"> 
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        {/* Your Service title */}
                        Project 2
                    </h3>
                </div>


                <span className="services__button" onClick={() => toggleTab(2)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggle === 2 ? "services__modal active-modal" :"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">
                            {/* Your Title */}
                            Project 2
                        </h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content"> 
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        {/* Your Service Title */}
                        Project 3
                    </h3>
                </div>


                <span className="services__button" onClick={() => toggleTab(3)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggle === 3 ? "services__modal active-modal" :"services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">
                            {/* Your Title */}
                            Project 3
                        </h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectet.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectet.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectet.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
