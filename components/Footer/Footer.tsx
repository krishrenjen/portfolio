import React from 'react'
import FooterItem from './FooterItem'
import FooterItems from "@/common/json/footeritems.json"


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <hr className="opacity-20  w-[90%]"></hr>
      <div className="flex justify-center items-center h-16 gap-7 my-5">
        
        {FooterItems.map((item, index) => (
          <FooterItem key={index} info={item}/>
        ))}
      </div>
      <h1 className="text-sm font-title text-white font-normal mb-5">{"©" + year + " Krish Renjen | Built using Next.js (React.js), Typescript, TailwindCSS and Framer-Motion"}</h1>
    </div>
    
  )
}
