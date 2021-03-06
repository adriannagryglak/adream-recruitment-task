import "../styles/ContactForm.scss";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ContactForm({ sizes }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreements: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSend, setIsSend] = useState(false);
  const [btn, setBtn] = useState(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSend(true);
    setFormErrors(validate(formData));
  }

  useEffect(() => {
    async function postForm(data) {
      const loginFormData = new FormData();
      loginFormData.append("your-name", data.name);
      loginFormData.append("your-phone", data.phone);
      loginFormData.append("your-email", data.email);
      loginFormData.append("your-message", data.message);

      try {
        const response = await axios({
          method: "post",
          //with free proxy to enable cors error, but something still not working
          url: "https://thingproxy.freeboard.io/fetch/http://ada-app-test.com/?p=15/wp-json/contact-form-7/v1/contact-forms/5/feedback",
          data: loginFormData,
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (!response.ok) {
          setBtn("failure");
        } else {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            agreements: false,
          });
          setBtn("succes");
        }
      } catch (error) {
        console.log(error);
        setBtn("failure");
      }
    }

    if (Object.keys(formErrors).length === 0 && isSend) {
      postForm(formData);
      setBtn("loading");
    } else {
      setBtn(null);
    }
    // eslint-disable-next-line
  }, [formErrors]);

  function validate(data) {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!data.name) {
      errors.name = "Zostaw imi??, poznajmy si??!";
    }

    if (!data.phone) {
      errors.phone = "Prosimy, zostaw numer telefonu";
    } else if (data.phone.length < 6) {
      errors.message = "Numer zbyt kr??tki";
    }

    if (!data.email) {
      errors.email = "Prosimy, zostaw sw??j e-mail";
    } else if (!regex.test(data.email)) {
      errors.email = "E-mail nie poprawny";
    }

    if (!data.message) {
      errors.message = "Nie wysy??aj bez tre??ci :)";
    }

    if (!data.agreements) {
      errors.agreements = "Wyra?? zgod??, by do nas napisa??";
    }
    return errors;
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className={
        sizes.isDesktop
          ? `contact-form ${btn !== null ? "loading" : ""}`
          : `contact-form ${sizes.isMobile ? "w-75" : "w-50"} ${
              btn !== null ? "loading" : ""
            } mt-5`
      }
    >
      <h3 className="contact-form__title">
        Lorem ipsum <br /> Lorem ipsum lorem ipsum
      </h3>
      <p className="contact-form__caption">
        consectetur adipiscing elit. Ut auctor arcu
      </p>
      <fieldset className="contact-form__fieldset">
        <legend className="contact-form__legend">
          Zostaw kontakt, zadzwonimy do Ciebie
        </legend>

        <span className="text-danger">
          <small>{formErrors.name}</small>
        </span>
        <input
          className="contact-form__input"
          value={formData.name}
          onChange={handleChange}
          name="name"
          id="name"
          type="text"
          placeholder="Imi?? i nazwisko"
        ></input>
        <label className="contact-form__input--label " htmlFor="name">
          Imi?? i nazwisko
        </label>

        <span className="text-danger">
          <small>{formErrors.phone}</small>
        </span>
        <input
          className="contact-form__input"
          value={formData.phone}
          name="phone"
          onChange={handleChange}
          id="phone"
          type="number"
          placeholder="Telefon"
        ></input>
        <label className="contact-form__input--label" htmlFor="phone">
          Telefon
        </label>

        <span className="text-danger">
          <small>{formErrors.email}</small>
        </span>
        <input
          className="contact-form__input"
          value={formData.email}
          name="email"
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Email"
        ></input>
        <label className="contact-form__input--label" htmlFor="email">
          Email
        </label>

        <span className="text-danger">
          <small>{formErrors.message}</small>
        </span>
        <input
          className="contact-form__input"
          value={formData.message}
          name="message"
          onChange={handleChange}
          id="message"
          type="text"
          placeholder="Lorem ipsum lorem ipsum"
        ></input>
        <label className="contact-form__input--label" htmlFor="message">
          Twoja wiadomo????
        </label>

        <span className="text-danger">
          <small>{formErrors.agreements}</small>
        </span>
        <div className="contact-form__agreements">
          <input
            type="checkbox"
            name="agreements"
            value={formData.agreements}
            onChange={handleChange}
            id="argreements"
            className="contact-form__agreements--check"
            style={
              formData.agreements
                ? { background: "black" }
                : { background: "white" }
            }
          ></input>
          <label
            htmlFor="agreements"
            className="contact-form__agreements--caption"
          >
            Wyra??am dobrowoln?? zgod?? na przetwarzanie moich danych osobowych{" "}
            <a
              alt="pe??na tre???? zgody na przetwarzanie danych"
              className="text-black text-decoration-none"
              href="EXAMPLE_HREF"
            >
              wi??cej...
            </a>
          </label>
        </div>
        <button
          type="submit"
          className={
            btn === "loading"
              ? "contact-form__submit loading"
              : "contact-form__submit"
          }
          style={
            btn === null
              ? {}
              : {
                  pointerEvents: "none",
                  backgroundPosition: "left bottom",
                  color: "black",
                }
          }
        >
          {btn === null
            ? "wy??lij"
            : btn === "succes"
            ? "wys??ano!"
            : btn === "failure"
            ? "nie uda??o si??"
            : ""}
        </button>
      </fieldset>
    </form>
  );
}
