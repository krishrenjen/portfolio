import React, { useEffect, useState } from 'react';
import ShortAnswer from './ShortAnswer';
import SectionHeader from '../SectionHeader/SectionHeader';
import LongAnswer from './LongAnswer';
import Router from 'next/router'
import GradientButtonSubmitForm from '../Buttons/GradientButtonSubmitForm';

export default function ContactForm() {

  const gradient = "bg-gradient-to-r from-pink-400 to-purple-600"
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');



  const handleSubmit = async (e:React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const r = await fetch('/api/submitContactForm',{
      method: 'POST',
      body: JSON.stringify({
        name, email, subject, body
      }),
    })

    

    window.location.reload();
    

  }

  

  return (
    <div className="w-full">
      <form className="w-full flex justify-center items-center flex-col px-[30%]" onSubmit={(e) => handleSubmit(e)}>
        <SectionHeader gradient={gradient} text="Personal Information" delimiter='Information' changesize={false}></SectionHeader>
        <div className="w-full flex justify-center items-center flex-col gap-7 mb-14">
          <ShortAnswer hint="John Doe" type="text" title="Name" value={name} onChange={(value:string) => setName(value)}/>
          <ShortAnswer hint="john.doe@example.com" type="email" title="Email" value={email} onChange={(value:string) => setEmail(value)}/>
        </div>


        <SectionHeader gradient={gradient} text="Message Information" delimiter='Information' changesize={false}></SectionHeader>
        <div className="w-full flex justify-center items-center flex-col gap-7 mb-14">
          <ShortAnswer hint="Your subject" type="text" title="Subject" value={subject} onChange={(value:string) => setSubject(value)}/>
          <LongAnswer hint="Your message" title="Content" value={body} onChange={(value:string) => setBody(value)}/>
        </div>
        <GradientButtonSubmitForm gradient={gradient} content={"Submit"}/>
        
      </form>      
    </div>
  );
}