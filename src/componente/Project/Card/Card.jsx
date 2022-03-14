import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Card.module.scss";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import FoodApp from "./descarga.jpg";
import MedicalHub from "./descarga1.jpg";
import TriviaFoto from "./descarga2.jpg";
import { UilGithubAlt } from "@iconscout/react-unicons";

const Card = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={style.myswip}
      >
        <SwiperSlide>
          <div className={style.slideContainer}>
            <img className={style.foto} src={FoodApp} alt="trivia" />
            <div>
              <h3 className={style.title}>Weather App (Front-end)</h3>
              <p className={style.parrafo}>
                En Weather App encontraras el pronostico del clima de la
                ubicacion que ingreses. Podras buscar el lugar que desees.
                Tecnologias utilizadas: ReactJS, Redux.
              </p>
              <div className={style.buttonsContainer}>
                <a
                  className={style.demoButton}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ezexgonzalez/FoodAppPI"
                >
                  Demo
                </a>
                <a
                  className={style.gitButton}
                  href="https://github.com/ezexgonzalez/FoodAppPI"
                  rel="noreferrer"
                  target="_blank"
                >
                  <UilGithubAlt />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slideContainer}>
            <img className={style.foto} src={MedicalHub} alt="trivia" />
            <div>
              <h3 className={style.title}>Medical Hub (Front-End)</h3>
              <p className={style.parrafo}>
                Medical Hub es una app para gestion medica, puedes pedir turnos,
                pagar turnos/estudios, ver horarios disponibles y mucho mas!
                Tecnologias utilizadas: ReactJS, Redux, JavaScript, Css
              </p>
              <div className={style.buttonsContainer}>
                <a
                  className={style.demoButton}
                  target="_blank"
                  rel="noreferrer"
                  href="https://medicalhub.netlify.app/"
                >
                  Demo
                </a>
                <a
                  className={style.gitButton}
                  href="https://github.com/ezexgonzalez/medical-hub-pf"
                  rel="noreferrer"
                  target="_blank"
                >
                  <UilGithubAlt />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slideContainer}>
            <img className={style.foto} src={TriviaFoto} alt="trivia" />
            <div>
              <h3 className={style.title}>Trivia App (React)</h3>
              <p className={style.parrafo}>
                En Trivia app encontraras un juego de preguntas con categorias
                variadas en ingles. Esta app fue desarrolada con ReactJS.
              </p>
              <div className={style.buttonsContainer}>
                <a
                  className={style.demoButton}
                  target="_blank"
                  rel="noreferrer"
                  href="https://trivia-app-nu.vercel.app/"
                >
                  Demo
                </a>
                <a
                  className={style.gitButton}
                  href="https://github.com/ezexgonzalez/TriviaApp"
                  rel="noreferrer"
                  target="_blank"
                >
                  <UilGithubAlt />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Card;
