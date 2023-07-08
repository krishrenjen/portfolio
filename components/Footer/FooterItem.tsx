import React from 'react'
import Image from 'next/image'


interface FooterItemProps{
  info:{
    title?: string
    url: string
    image: string
  }
}

export default function FooterItem({info} : FooterItemProps) {
  const title = info.title ?? " "
  
  return (
    <div title={title} className="h-14 w-14 bg-dark-gray rounded-md flex justify-center items-center hover:bg-slate-600">
        <a href={info.url} target='_blank'>
          <div className="relative h-10 w-10">
          <Image priority={true} alt="" fill={true} style={{objectFit:"contain"}} src={info.image}/>
          </div>
        </a>
        
    </div>
  )
}
