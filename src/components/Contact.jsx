import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [emails, setEmails] = useState({ firstName: '', lastName: '', email: '', message: '', sent: false });

  const handleChange = (prop) => (event) => {
    setEmails({ ...emails, [prop]: event.target.value });
  };

  const resetForm = () => {
    setEmails({ firstName: '', lastName: '', email: '', message: '', sent: false });
  };

  return (
    <div className="bg-gray-100 flex justify-center">
      <h1 className=" text-center text-2xl font-bold mt-6 ml-6"> Contact</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(emails);
          axios
            .post('/email', emails)
            .then((res) => {
              setEmails({ sent: true });
              window.confirm('Envoyé un autre message?');
              alert('Message envoyé avec succes');
              resetForm();
            })
            .catch((error) => {
              console.error(error);
              alert("L'envoi du message a échoué");
            });
        }}
        className="bg-white shadow-lg mt-20 flex-col justify-around rounded-2xl h-96 w-auto items-center "
      >
        <p className="text-center text-xl mt-4"> Send Senda a message</p>
        <div className="flex justify-around pt-11 pl-6 pr-6">
          <input
            className="border border-sky-500"
            type="text"
            placeholder="First name"
            value={emails.firstName}
            onChange={handleChange('firstName')}
          ></input>
          <input
            className="ml-4 border border-sky-500"
            type="text"
            placeholder="Last name"
            value={emails.lastName}
            onChange={handleChange('lastName')}
          ></input>
        </div>
        <div className="flex pl-6 pt-11">
          <input
            className="w-96 border border-sky-500"
            type="email"
            placeholder="Email"
            value={emails.email}
            onChange={handleChange('email')}
          ></input>
        </div>
        <div className="pl-6 pt-11">
          <textarea
            className="border border-sky-500"
            id="message"
            placeholder="message"
            value={emails.message}
            onChange={handleChange('message')}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-24 flex justify-center ml-64 bg-sky-400 rounded-lg shadow-xl border-2  text-black"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
