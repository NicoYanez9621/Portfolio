import React from "react";
import Card from "./Card/Card.jsx";
import style from "./Project.module.scss";

const Project = () => {
  return (
    <section id="projects" className={style.project}>
      <span className={style.subTitle}>Proyectos</span>
      <div className={style.swiperContainer}>
        <Card />
      </div>
    </section>
  );
};

export default Project;
