import React, { useRef } from 'react';

import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import TextareaInput from '../components/inputs/Textarea';
import TextInput from '../components/inputs/TextInput';

const ContactForm = () => {
    const form = useRef();
    const mailto =
    "mailto:hoganevelyn5@gmail.com?subject=Test subject&body=Body content";

    return (
        <div className=" justify-center h-scree mt-10">
            <div className="w-  p-5 p grid text-center  justify-center ">
                <p className="text-secondary mb-3"> What's Next? <span>Get in touch</span> </p>
                <p className="max-w-sm text-center font-semibold text-textColor">I am currently open to any new opportunity as frontend developer.
                </p>
            </div>

            <div className="w-full flex items-center">
                <form className="md:w-1/3 w-full px-5 pt-5 pb-5 m-auto" ref={form}
                >
                    <TextInput
                        className="w-full mb-5"
                        placeholder="Name"
                        laber="NAme"
                        name="user_name"
                        required />
                    <TextInput
                        className="w-full mb-5"
                        placeholder="Email"
                        laber="NAme"
                        name="user_email"
                        required />
                    <TextareaInput
                    className="w-full mb-5"
                    name="message" 
                    label="Message"
                    rows='5' 
                    required/>

                    <button
                    className="text-secondary font-bold items-center w-ful  border border-secondary px-8 py-3 rounded"
                    onClick={mailto}
                     >
                        <a className="text-secondary" href={mailto}>Send</a>
                    </button>
                 

                </form>
            </div>

            <div className=" flex gap-5 justify-center mb-10">
                <a href="https://github.com/yvehogan">
                    <BsGithub className="h-8 w-auto" />
                </a>

                <a href="https://www.linkedin.com/in/evelyn-ita/">
                    <BsLinkedin className="h-8 w-auto" />
                </a>

                <a href="https://twitter.com/EveIta_?t=Mymx-YMm6ZQ7vq5KVx2qNQ&s=09">
                    <BsTwitter className="h-8 w-auto" />
                </a>

                <a href="https://facebook.com/Evehog">
                    <BsFacebook className="h-8 w-auto" />
                </a>
            </div>

        </div>
    )
}

export default ContactForm;