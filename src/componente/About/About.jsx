import React from "react";
import style from "./About.module.scss";
import { UilImport } from "@iconscout/react-unicons";
import foto from "./foto.jpg";
const About = () => {
  return (
    <section id="about" className={style.sectionInfo}>
      <span className={style.subTitle}>Sobre mí</span>
      <div className={style.aboutCard}>
        <div className={style.infoContainer}>
          <div className={style.retrato}>
            <div className={style.recorte}>
              <img className={style.random} src={foto} alt="img not found" />
            </div>
          </div>
          <div className={style.parrafo}>
            <p>
              Estudiando la Carrera de Licenciatura en Biología me di cuenta que
              no era lo que realmente quería, en ese momento descubrí que me
              apasionaba todo lo relacionado con crear y también solucionar
              problemas.
            </p>
            <p>
              Esto me impulso a elegir el sector IT como la mejor opción y fue
              de las mejores elecciones que pude haber tomado hasta el día de
              hoy y así es como comenzó mi camino a Full Stack Developer.
            </p>

            <a
              className={style.cvButton}
              download=""
              href="Airton Nicolas Yañez - Full stack development 3 (2).pdf"
            >
              Descargar CV
              <UilImport className={style.downloadIcon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
