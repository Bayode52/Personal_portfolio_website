import { useRef, useState } from 'react'
import './Contact.css'
export default function Contact(){

    const formRef = useRef();
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);

        //replace with your formspree endpoint
        await fetch ('https://formspree.io/f/YOUR_FORM_ID',{
            method: 'POST',
            body: new FORMDATA(formRef.current),
            headers: {Accept: 'application/json'},
        });

        setIsSubmit(false);
        formRef.current.reset();
        alert('Message sent successfully!');
    };

    return(
        <section className='contact'>
            <h2>Get In Touch</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input 
                    type='text' 
                    name='name'
                    placeholder='Enter Your Name Please'
                    required
                    />
                </div>
                <div className='form-group'>
                    <input 
                    type='email'
                    name='email'
                    placeholder='Enter Your Email Please'
                    required
                    />
                </div>
                <div className='form-group'>
                    <textarea 
                    name='message'
                    placeholder='KIndly Input Your Message'
                    rows='5'
                    required
                    >
                    </textarea>
                </div>
                <button 
                type='submit'
                disabled={isSubmit}
                >
                    {isSubmit ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </section>
    )
}