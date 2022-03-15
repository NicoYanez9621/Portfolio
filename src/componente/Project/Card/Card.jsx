import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import style from "./Card.module.scss";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import weather from "./weather.jpg";
import countries from "./countries.jpg";
import canchera from "./canchera.jpg";
import { UilGithubAlt } from "@iconscout/react-unicons";

const Card = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        className={style.myswip}
      >
        <SwiperSlide>
          <div className={style.slideContainer}>
            <img className={style.foto} src={weather} alt="trivia" />
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
                  href="https://weather-app-omega-snowy.vercel.app/"
                >
                  Demo
                </a>
                <a
                  className={style.gitButton}
                  href="https://github.com/NicoYanez9621/weather-app"
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
            <img className={style.foto} src={countries} alt="trivia" />
            <div>
              <h3 className={style.title}>Countries App (Full Stack)</h3>
              <p className={style.parrafo}>
                Es una app donde se puede buscar un pais para agregar una
                actividad que te gusta, ademas puedes buscar por nombre de pais,
                filtrar por actividades y continentes y ordenar los resultados
                alfabeticamente y por su poblacion. Tecnologias utilizadas:
                React.js, Redux, JavaScript, SCSS, Node.js, Express, Sequelize,
                PostgrateSQL
              </p>
              <div className={style.buttonsContainer}>
                <a
                  className={style.demoButton}
                  target="_blank"
                  rel="noreferrer"
                  href="https://countries-pi-henry.vercel.app/home"
                >
                  Demo
                </a>
                <a
                  className={style.gitButton}
                  href="https://github.com/NicoYanez9621/Countries-PI-Henry"
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
            <img className={style.foto} src={canchera} alt="trivia" />
            <div>
              <h3 className={style.title}>Canchera App (Ful Stack)</h3>
              <p className={style.parrafo}>
                Es una app donde se puede buscar canchas de futbol y poder
                reservarlas. Se puede buscar por club, ordenar los resultados,
                pagar tu reserva por medio de Mercado Pago. Tecnologias
                utilizadas: React.js, Redux, JavaScript, SCSS, Node.js, Express,
                Sequelize, PostgrateSQL
              </p>
              <div className={style.buttonsContainer}>
                <a
                  className={style.demoButton}
                  target="_blank"
                  rel="noreferrer"
                  href="https://alquilatucancha.com/"
                >
                  Demo
                </a>
                <a
                  className={style.gitButton}
                  href="https://github.com/NicoYanez9621/soccer-reserve"
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
