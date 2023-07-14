import React from 'react'
import { useState } from 'react';
import "./contact.css"

const Contact = () => {


    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

  const handleSubmit=(e)=>{

    e.preventDefault();

    //handle the form submission logicas sending the form data to a server
    console.log('Form submitted successfully:',{name,email,message});


    // Reset the form fields

    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <div className='contact'>


            <h1>Contact Us</h1>


                <form onSubmit={handleSubmit}>


                            <div className="form">


                            <label htmlFor="name">Name:</label>

                            <input
                                type="text"
                                id="name"
                                placeholder='Enter your name'

                                value={name}

                                onChange={(e)=>setName(e.target.value)}
                                required/>
                                <br></br>


                            


                            <label htmlFor="email">Email:</label>

                            <input
                                type="email"
                                id="email"
                                placeholder='Enter your Email'
                                value={email}


                                onChange={(e)=>setEmail(e.target.value)}

                                required/>

                            


                            

                            <label htmlFor="message">Message:</label>

                            <textarea

                                id="message"
                                value={message}
                                placeholder='Write a message'

                                
                                onChange={(e)=>setMessage(e.target.value)}
                                required>

                                </textarea>


                            </div>


                            <button type="submit">Submit</button>


                </form>

    </div>
  )
}

export default Contact