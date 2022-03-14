import React, { useState } from "react";
import style from "./Nav.module.scss";
import logo from "./android-chrome-512x512.png";
import { CgClose } from "react-icons/cg";
import { UilBars } from "@iconscout/react-unicons";
import { Link } from "react-scroll";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <nav className={showMenu ? style.navShow : style.nav}>
      <div className={style.topNav}>
        <img className={style.img} src={logo} alt="img not found" />
        {showMenu ? (
          <CgClose
            onClick={() => setShowMenu(!showMenu)}
            className={style.iconClose}
          />
        ) : (
          <UilBars
            onClick={() => setShowMenu(!showMenu)}
            className={style.icon}
          />
        )}
      </div>

      <div className={showMenu ? style.showMenu : style.buttonsContainer}>
        <Link
          onClick={closeMenu}
          className={style.navButton}
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <span className={style.spanText}>Home</span>
        </Link>

        <Link
          onClick={closeMenu}
          className={style.navButton}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <span className={style.spanText}>Sobre Mi</span>
        </Link>

        <Link
          onClick={closeMenu}
          className={style.navButton}
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <span className={style.spanText}>Proyectos</span>
        </Link>

        <Link
          onClick={closeMenu}
          className={style.navButton}
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <span className={style.spanText}>Skills</span>
        </Link>

        <Link
          onClick={closeMenu}
          className={style.navButton}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <span className={style.spanText}>Contacto</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
