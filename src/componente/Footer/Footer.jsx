import React from "react";
import style from "./Footer.module.scss";
import {
  UilWhatsapp,
  UilEnvelope,
  UilLocationPoint,
} from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.info}>
        <div className={style.data}>
          <a
            className={style.link}
            rel="noreferrer"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+543858538573"
          >
            <UilWhatsapp className={style.icon} />
            +54 3858538573
          </a>
        </div>
        <div className={style.data}>
          <UilEnvelope className={style.icon} />
          airtonnicolasy1996@gmail.com
        </div>
        <div className={style.data}>
          <UilLocationPoint className={style.icon} />
          Termas de Rio Hondo, Santiago del Estero, Argentina
        </div>
      </div>
      <div className={style.copy}>
        <h6>Copyrigth © 2022 Nicolas Yañez. All rigth reserved</h6>
      </div>
    </div>
  );
};

export default Footer;
