import React from "react";
import style from "./Contact.module.scss";

import { useState, useEffect } from "react";
import { UilEnvelopeUpload, UilSpinner } from "@iconscout/react-unicons";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [send, setSend] = useState({
    loading: false,
    send: "",
  });

  const [errors, setErrors] = useState({
    fullName: { state: false, msg: "" },
    email: { state: false, msg: "" },
    message: { state: false, msg: "" },
    validate: false,
  });

  useEffect(() => {
    if (
      form.fullName.length > 0 &&
      form.email.length > 0 &&
      form.message.length > 0
    ) {
      setErrors((data) => {
        return {
          ...data,
          validate: true,
        };
      });
    }
  }, [form]);

  const handleOnChange = (e) => {
    setForm((data) => {
      const newState = {
        ...data,
        [e.target.name]: e.target.value,
      };

      validate(newState, e);
      return newState;
    });
  };
  const validate = (state, e) => {
    if (state[e.target.name].length === 0) {
      setErrors((data) => {
        return {
          ...data,
          [e.target.name]: { state: true, msg: "* Este campo es obligatorio" },
        };
      });
    } else if (
      e.target.name === "fullName" &&
      !/^[a-zA-Z ]+$/g.test(state.fullName)
    ) {
      setErrors((data) => {
        return {
          ...data,
          [e.target.name]: { state: true, msg: "* Solo letras" },
        };
      });
    } else if (
      e.target.name === "email" &&
      !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
        state.email
      )
    ) {
      setErrors((data) => {
        return {
          ...data,
          [e.target.name]: { state: true, msg: "* Email Incorrecto" },
        };
      });
    } else {
      setErrors((data) => {
        const newState = {
          ...data,
          [e.target.name]: false,
        };
        return newState;
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    if (
      !send.loading &&
      !errors.email.state &&
      !errors.fullName.state &&
      !errors.message.state &&
      errors.validate
    ) {
      emailjs
        .send("service_rk6vg1f", "template_47p2lmo", form, "gDvGiBlUGqHeUGiMI")
        .then(
          (result) => {
            setSend((data) => {
              return {
                loading: false,
                send: "ok",
              };
            });
          },
          (error) => {
            setSend((data) => {
              return {
                loading: false,
                send: "error",
              };
            });
          }
        );
      setSend((data) => {
        return {
          ...data,
          loading: true,
        };
      });
    }
  };

  return (
    <div id="contact" className={style.contenedor}>
      <span className={style.subTitle}>Contacto</span>
      <div>
        <form onSubmit={sendEmail} className={style.form} action="">
          <div className={style.inputContainer}>
            <div className={style.box}>
              <div className={style.inputSpan}>
                <input
                  className={
                    errors.fullName.state ? style.inputError : style.input
                  }
                  onChange={handleOnChange}
                  name="fullName"
                  placeholder="Ingresa tu nombre"
                  type="text"
                />
                {errors.fullName.state ? (
                  <span className={style.error}>{errors.fullName.msg}</span>
                ) : (
                  ""
                )}
              </div>
              <div className={style.inputSpan}>
                <input
                  className={
                    errors.email.state ? style.inputError : style.input
                  }
                  onChange={handleOnChange}
                  name="email"
                  placeholder="Ingresa tu email"
                  type="text"
                />
                {errors.email.state ? (
                  <span className={style.error}>{errors.email.msg}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className={style.textBox}>
            <textarea
              className={errors.message.state ? style.textError : style.text}
              onChange={handleOnChange}
              name="message"
              placeholder="Ingresa el mensaje"
              cols="30"
              rows="10"
            ></textarea>
            {errors.message.state ? (
              <span className={style.error}>{errors.message.msg}</span>
            ) : (
              ""
            )}
          </div>
          <div className={style.buttonContainer}>
            <button
              className={
                send.send === "ok"
                  ? style.sendOk
                  : send.send === "error"
                  ? style.sendError
                  : style.sendButton
              }
              type="submit"
            >
              {send.loading ? (
                <UilSpinner className={style.loading} />
              ) : (
                <span className={style.enviar}>
                  Enviar <UilEnvelopeUpload className={style.buttonIcon} />
                </span>
              )}
            </button>
            {send.send === "ok" && !send.loading ? (
              <span className={style.msg}>¡Mensaje enviado!</span>
            ) : (
              ""
            )}
            {send.send === "error" && !send.loading ? (
              <span className={style.msg}>Error al enviar el mensaje.</span>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
