import Link from 'next/link'
import React from 'react'

interface GradientButtonProps{
    gradient: string,
    content: string,
}

export default function GradientButton({gradient, content} : GradientButtonProps ) {
  return (
    <div className="group relative w-56">
        <div className={"-inset-0.5 absolute blur opacity-75 transition-all duration-200 group-hover:opacity-100 group-hover:blur-xl " + gradient}></div>
          <button type="submit" className={"relative rounded-lg px-7 py-4 w-full bg-black"}>
            <h2 className="text-2xl text-gray-400 transition-colors duration-200 group-hover:text-white">{content} {' '}<span className="inline-block transition-all group-hover:translate-x-1 motion-reduce:transform-none text-gray-400  duration-200 group-hover:text-white">-&gt;</span></h2> 
          </button>
    </div>
  )
}
