import '../styles/ContactForm.scss';

export default function ContactForm({sizes}){
    return   <form className={sizes.isDesktop ? "contact-form" : `contact-form ${sizes.isMobile ? 'w-75' : 'w-50'} mt-5`}>
                <h3 className='contact-form__title'>Lorem ipsum <br/> Lorem ipsum lorem ipsum</h3>
                <p className='contact-form__caption'>consectetur adipiscing elit. Ut auctor arcu</p>
                <fieldset className='contact-form__fieldset'>
                    <legend className='contact-form__legend'>Zostaw kontakt, zadzwonimy do Ciebie</legend>
                    <input className="contact-form__input" id='name' type="text" placeholder='Imię i nazwisko'></input>
                    <label className="contact-form__input--label" htmlFor='name'>Imię i nazwisko</label>
                    <input className="contact-form__input" id ='phone' type="number" placeholder='Telefon'></input>
                    <label className="contact-form__input--label" htmlFor='phone'>Telefon</label>
                    <input className="contact-form__input" id='email' type="email" placeholder='Email'></input>
                    <label className="contact-form__input--label" htmlFor='email'>Email</label>
                    <input className="contact-form__input" id='message' type="text" placeholder='Lorem ipsum lorem ipsum'></input>
                    <label className="contact-form__input--label" htmlFor='message'>Twoja wiadomość</label>
                    <div className='contact-form__agreements'>
                        <input type="checkbox" id="argree"className='contact-form__agreements--check'></input>
                        <label htmlFor='agree' className='contact-form__agreements--caption'>Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych więcej...</label>
                    </div>
                    <button type='submit' className='contact-form__submit'>wyślij</button>
                </fieldset>
            </form>
}


