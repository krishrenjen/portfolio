import React from 'react'

interface ShortAnswerProps{
    hint: string,
    type: string,
    title: string,
    value?: string,
    onChange: (arg0:string) => void;
}

export default function ShortAnswer({hint, type, title, value, onChange} : ShortAnswerProps) {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2">
        <h1 className="w-full text-left text-white font-title font-medium text-2xl">{title}</h1>
        <input required value={value} onChange={(e) => onChange(e.target.value)} type={type} placeholder={hint} className="placeholder-stone-600 h-12 px-2 font-title text-2xl font-normal text-white bg-dark-gray outline-none outline-light-dark-gray focus:outline-white outline-2 rounded-sm w-full" />
    </div>
  )
}
