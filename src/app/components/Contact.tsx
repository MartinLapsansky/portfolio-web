"use client"
import React, {useEffect, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {useInView} from "react-intersection-observer";


interface formData {
    name: string;
    email: string;
    phone: string;
    message: string;

}
const Contact: React.FC = () => {

    //setup form data variable

    const [formData, setFormData] = React.useState<formData>({
        name: '',
        email:'',
        phone:'',
        message:'',
    });
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [state] = useForm("xwpqydrz");
    const [formSubmitted,setFormSubmitted] = useState(false);
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { ref: formRef, inView: formInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [visibleTitle, setVisibleTitle] = useState(false);
    const [visibleForm, setVisibleForm] = useState(false);

    useEffect(() => {
        if (titleInView) {
            setVisibleTitle(true); // h2 sa objaví keď je vo view
        }
    }, [titleInView]);

    useEffect(() => {
        if (formInView) {
            setVisibleForm(true); // form sa objaví až keď je vo view
        }
    }, [formInView]);

    const handleSubmitForm = async(e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xwpqydrz', {
                method: 'POST',
                body: new FormData(e.target as HTMLFormElement),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setFormSubmitted(true);
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    }

  return (
        <section className={`flex flex-col w-4/5 px-6 mx-auto lg:px-8 justify-center items-center` }>
                <h2 ref={titleRef} className={`text-center text-2xl md:text-4xl font-bold text-[#3E5C76] mb-8 transform transition-all duration-1000 ease-out ${visibleTitle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>Are you interested in collaboration with me?</h2>
            <form ref={formRef} onSubmit={handleSubmitForm} className={`flex flex-col w-90 md:w-150 items-center border-black border-2 p-6 rounded-3xl transform transition-all duration-1000 ease-out ${visibleForm ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
                <h3 className="text-2xl font-bold mb-4 text-white ">Send me a message.</h3>
                <fieldset className="flex flex-col flex-wrap w-90 gap-6 items-center ">

                    <div className="flex flex-col">
                        <label className="text-xl mb-1">Name:</label>
                        <input className="border-2 p-2 rounded-2xl w-80 md:w-100" type="text" placeholder="Martin Novak"
                               name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required/>
                        <ValidationError field="name" prefix="Name" errors={state.errors} />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl mb-1">Email:</label>
                        <input className="border-2 p-2 rounded-2xl w-80 md:w-100" type="email" placeholder="jozko.mrkvicka@gmail.com"
                               name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
                        <ValidationError field="email" prefix="Email" errors={state.errors} />

                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl mb-1">Phone:</label>
                        <input className="border-2 p-2 rounded-2xl w-80 md:w-100" type="tel" placeholder="0904 675 555" name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone:e.target.value })}/>
                        <ValidationError field="phone" prefix="Phone" errors={state.errors} />

                    </div>
                    <label>Message</label>
                    <textarea value={formData.message}
                              name="message"
                              onChange={(e) => setFormData({...formData,message:e.target.value})}
                              className="w-80 md:w-flex flex-col border-2 p-3" cols={40} rows={8} placeholder="Write me"></textarea>
                    <button type="submit">Send message</button>
                </fieldset>
                {formSubmitted ?  (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
                            <h3 className="text-2xl font-bold mb-4 text-green-600">Success!</h3>
                            <p className="mb-4">Your message has been sent successfully.</p>
                            <button
                                className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
                                onClick={() => setFormSubmitted(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ):null}

                {status === 'success' && <p className="text-green-900 mt-4">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-600 mt-4">Oops! Something went wrong.</p>}

            </form>
        </section>
  );
};

export default Contact;