import React from "react";
import style from "./Main.module.scss";
import { Link } from "react-scroll";
import {
  UilNavigator,
  UilLinkedinAlt,
  UilGithubAlt,
} from "@iconscout/react-unicons";

const Main = () => {
  return (
    <main id="main" className={style.main}>
      <div className={style.info}>
        <div className={style.titleContainer}>
          <span className={style.title1}>Bienvenido!!</span>
          <span className={style.title2}>Soy Nicolas Yañez</span>
          <span className={style.subTitle}>"Full Stack Developer"</span>
        </div>
        <div className={style.redesMobile}>
          <a
            className={style.link}
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/nicoyanez-fullstackdevelopment/"
          >
            <UilLinkedinAlt className={style.redIcon} />
          </a>
          <a
            className={style.link}
            rel="noreferrer"
            target="_blank"
            href="https://github.com/NicoYanez9621"
          >
            <UilGithubAlt />
          </a>
        </div>
        <div className={style.pContainer}>
          <p className={style.resume}>
            El mundo de la tecnologia me encanta y estoy en busca de mi primer
            empleo IT.
          </p>
          <p className={style.resume}>
            Mi lema es "Constante Aprendizaje" ya que es lo que nos caracteriza
            en nuestra area.
          </p>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={800}
            className={style.mainButton}
          >
            Contacto
            <UilNavigator className={style.buttonIcon} />
          </Link>
          <div className={style.redes}>
            <a
              className={style.link}
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/nicoyanez-fullstackdevelopment/"
            >
              <UilLinkedinAlt className={style.redIcon} />
            </a>
            <a
              className={style.link}
              rel="noreferrer"
              target="_blank"
              href="https://github.com/NicoYanez9621"
            >
              <UilGithubAlt />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
