import '../styles/ContactForm.scss';
import { useState, useEffect } from 'react';

export default function ContactForm({sizes}){

    const [formData, setFormData] = useState({name: "", email: "", phone: "", message: "", agreements: false});
    const [formErrors, setFormErrors] = useState({});
    const [isSend, setIsSend] = useState(false);
    const [btn, setBtn] = useState(null);
    const [test, setTest] = useState(null);

    function handleChange(event){
        const {name, value, type, checked} = event.target;
        setFormData(prevData =>{
            return {
                ...prevData,
                [name] : type === "checkbox" ? checked : value,
            }
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        setIsSend(true);
        setFormErrors(validate(formData));
    }

    function jsonToFormData(json){
        try {
          const data = new FormData()
      
          for (let k in json) {
            data.append(k, json[k])
          }
          return data
        } catch (error) {
          console.error(error)
          return null
        }
      }

    async function postForm(data){
        const payload = JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        });

        try {
            let response = await fetch("http://127.0.0.1/wordpress//wp-json/contact-form-7/v1/contact-forms/6/feedback", {
              method: "POST",
              headers: {'content-type': "multipart/form-data"},
              body: jsonToFormData(payload),
            });
            
            if (response.status === 200) {
              setFormData({name: "", email: "", phone: "", message: "", agreements: false});
              setBtn("succes");
            } else {
              setBtn("failure");
            }
          } catch (err) {
            console.log(err);
            setBtn("failure");
          }
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSend){
            postForm(formData);
            setBtn("loading");
        }else{
          setBtn(null);
        }
    // eslint-disable-next-line 
    }, [formErrors]);

    function validate(data){
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!data.name){
            errors.name = "Zostaw imię, poznajmy się!";
        }

        if(!data.phone){
            errors.phone = "Prosimy, zostaw numer telefonu";
        }else if(data.phone.length < 6){
            errors.message = "Numer zbyt krótki";
        }

        if(!data.email){
            errors.email = "Prosimy, zostaw swój e-mail";
        }else if(!regex.test(data.email)){
            errors.email = "E-mail nie poprawny";
        }

        if(!data.message){
            errors.message = "Nie wysyłaj bez treści :)";
        }

        if(!data.agreements){
            errors.agreements= "Wyraź zgodę, by do nas napisać";
        }
        return errors;
    }

    return   <form onSubmit={handleSubmit} 
                    encType="multipart/form-data" className={sizes.isDesktop ? `contact-form ${btn !== null ? "loading" : ""}` : `contact-form ${sizes.isMobile ? 'w-75' : 'w-50'} ${btn !== null ? "loading" : ""} mt-5`}>
                <h3 className='contact-form__title'>Lorem ipsum <br/> Lorem ipsum lorem ipsum</h3>
                <p className='contact-form__caption'>consectetur adipiscing elit. Ut auctor arcu</p>
                <fieldset className='contact-form__fieldset'>
                    <legend className='contact-form__legend'>Zostaw kontakt, zadzwonimy do Ciebie</legend>

                    <span className='text-danger'><small>{formErrors.name}</small></span>
                    <input className="contact-form__input" value={formData.name} onChange={handleChange} name='name' id='name' type="text" placeholder='Imię i nazwisko'></input>
                    <label className="contact-form__input--label " htmlFor='name'>Imię i nazwisko</label>
                    
                    <span className='text-danger'><small>{formErrors.phone}</small></span>
                    <input className="contact-form__input" value={formData.phone} name='phone' onChange={handleChange} id ='phone' type="number" placeholder='Telefon'></input>
                    <label className="contact-form__input--label" htmlFor='phone'>Telefon</label>
                    
                    <span className='text-danger'><small>{formErrors.email}</small></span>
                    <input className="contact-form__input" value={formData.email} name='email' onChange={handleChange} id='email' type="email" placeholder='Email'></input>
                    <label className="contact-form__input--label" htmlFor='email'>Email</label>
                    
                    <span className='text-danger'><small>{formErrors.message}</small></span>
                    <input className="contact-form__input" value={formData.message} name='message' onChange={handleChange} id='message' type="text" placeholder='Lorem ipsum lorem ipsum'></input>
                    <label className="contact-form__input--label" htmlFor='message'>Twoja wiadomość</label>
                    
                    <span className='text-danger'><small>{formErrors.agreements}</small></span>
                    <div className='contact-form__agreements'>
                        <input type="checkbox" name='agreements' value={formData.agreements} onChange={handleChange} id="argreements"className='contact-form__agreements--check' style={formData.agreements ? {background: "black"} : {background: "white"}}></input>
                        <label htmlFor='agreements' className='contact-form__agreements--caption'>Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych <a alt="pełna treść zgody na przetwarzanie danych" className="text-black text-decoration-none" href="EXAMPLE_HREF">więcej...</a></label>
                    </div>
                    <button type="submit" className={btn === "loading" ? "contact-form__submit loading" : "contact-form__submit"} style={btn === null ? {} : {pointerEvents: "none", backgroundPosition: "left bottom", color: "black" }}>{btn === null ? "wyślij" : btn === "succes" ? "wysłano!" : btn === "failure" ? "nie udało się" : ""}</button>
                </fieldset>
            </form>
}


 