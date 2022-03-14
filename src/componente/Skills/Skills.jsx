import React from "react";
import style from "./Skills.module.scss";
import { UilHtml5, UilReact } from "@iconscout/react-unicons";
import { DiCss3, DiPostgresql } from "react-icons/di";
import {
  SiRedux,
  SiJavascript,
  SiExpress,
  SiSequelize,
  SiMysql,
  SiSqlite,
} from "react-icons/si";
import { FaNodeJs, FaWordpress, FaSass } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const Skills = () => {
  return (
    <section id="skills" className={style.skills}>
      <span className={style.subTitle}>Skills</span>
      <div className={style.fullContainer}>
        <div className={style.iconsContainer}>
          <div className={style.box}>
            <SiJavascript className={style.icon} />
            <div className={style.tooltip}>JavaScript</div>
          </div>
          <div className={style.box}>
            <UilHtml5 className={style.icon} />
            <div className={style.tooltip}>Html5</div>
          </div>
          <div className={style.box}>
            <DiCss3 className={style.icon} />
            <div className={style.tooltip}>CSS</div>
          </div>
          <div className={style.box}>
            <FaSass className={style.icon} />
            <div className={style.tooltip}>SASS</div>
          </div>

          <div className={style.box}>
            <UilReact className={style.icon} />
            <div className={style.tooltip}>ReactJS</div>
          </div>
          <div className={style.box}>
            <SiRedux className={style.icon} />
            <div className={style.tooltip}>Redux</div>
          </div>
          <div className={style.box}>
            <FaNodeJs className={style.icon} />
            <div className={style.tooltip}>NodeJS</div>
          </div>
          <div className={style.box}>
            <SiExpress className={style.icon} />
            <div className={style.tooltip}>Express</div>
          </div>
          <div className={style.box}>
            <SiSequelize className={style.icon} />
            <div className={style.tooltip}>Sequelize</div>
          </div>
          <div className={style.box}>
            <FiFigma className={style.icon} />
            <div className={style.tooltip}>Figma</div>
          </div>
          <div className={style.box}>
            <DiPostgresql className={style.icon} />
            <div className={style.tooltip}>PostgreSQL</div>
          </div>
          <div className={style.box}>
            <SiMysql className={style.icon} />
            <div className={style.tooltip}>MySQL</div>
          </div>
          <div className={style.box}>
            <SiSqlite className={style.icon} />
            <div className={style.tooltip}>SQLite</div>
          </div>
          <div className={style.box}>
            <FaWordpress className={style.icon} />
            <div className={style.tooltip}>WordPress</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
