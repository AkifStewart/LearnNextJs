"use client"
import React, { useActionState, useState } from 'react'
import nextConfig from '@/next.config';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
   const [resp, setResponse] = useState(null);
   const [hasError, setHasError] = useState(false);
   async function  submitContactUs(e) {
    e.preventDefault();
    const data = { name, email, phone, message };
    const apiHost = nextConfig.env?.apiHost ?? '';
    const resp = await fetch(`${apiHost}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    });
    const responseData = await resp.json();
       setResponse(responseData.message);
    console.log('responseData:', responseData);
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');

    setTimeout(() => {
      setResponse(null);
    }, 3000);
  }
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
    if (name === 'message') setMessage(value);

  }
  return (
    <div className='my-8 justify-items-center'>
      <h1 className='text-3xl'>Contact US</h1>
      <div className='my-8 w-1/3'>
        <form className="w-full max-w-lg" onSubmit={submitContactUs}>
          {resp &&
            <div className={hasError ? "bg-red-500 w-full mb-6 rounded-lg p-2" : " bg-green-500 p-2 rounded-lg mb-6 w-full"}>
              <p className="text-lg text-white">{resp}</p>
            </div>
          } 

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Name *
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 border-gray-200 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" value={name} onChange={handleChange} name="name" type="text" placeholder="Jane" />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email *
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" value={email} onChange={handleChange} name="email" type="email" placeholder="jane@email.com" />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                Phone No
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone" value={phone} onChange={handleChange} name="phone" type="text" placeholder="xxx-xxx-xxxx" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40" value={message} onChange={handleChange} name="message" id="message" type="text" placeholder="Type a message here." />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full px-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="xbutton">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact