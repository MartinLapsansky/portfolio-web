import React, {useState} from 'react';

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


    const handleSubmitForm = async(e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xwpqydrz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: new FormData(e.target as HTMLFormElement),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    }

  return (
        <section className="flex flex-col w-4/5 px-6 mx-auto lg:px-8 justify-center items-center">
            <h2 className="text-4xl font-bold text-[#3E5C76] mb-8">Are you interested in collaboration with me?</h2>
            <form onSubmit={handleSubmitForm} className="flex flex-col w-120 md:w-150 items-center border-black border-2 p-6 rounded-3xl ">
                <h3 className="text-2xl font-bold mb-4 text-white">Send me a message.</h3>
                <fieldset className="flex flex-col flex-wrap w-200 gap-6 items-center ">

                    <div className="flex flex-col">
                        <label className="text-xl mb-1">Name:</label>
                        <input className="border-2 p-2 rounded-2xl w-100" type="name" placeholder="Martin Novak"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl mb-1">Email:</label>
                        <input className="border-2 p-2 rounded-2xl w-100" type="email" placeholder="jozko.mrkvicka@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                               required/>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-xl mb-1">Phone:</label>
                        <input className="border-2 p-2 rounded-2xl w-100" type="tel" placeholder="0904 675 555"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone:e.target.value })}/>
                    </div>
                    <label>Message</label>
                    <textarea value={formData.message}
                              onChange={(e) => setFormData({...formData,message:e.target.value})}
                              className="flex flex-col border-2 p-3" cols={40} rows={8} placeholder="Write me"></textarea>
                    <button>Send message</button>
                </fieldset>

                {status === 'success' && <p className="text-green-600 mt-4">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-600 mt-4">Oops! Something went wrong.</p>}

            </form>
        </section>
  );
};

export default Contact;