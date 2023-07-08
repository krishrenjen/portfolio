import React from 'react'
import SkillLevels from "@/common/json/skilllevels.json"

export default function SkillLevelBar() {
  
    return (
    <div className="flex flex-wrap mx-[20%] items-center justify-center gap-1 bg-dark-gray py-2 px-2">
        {SkillLevels.map((item, index) => (
            <div key={index} className='flex-grow basis-0 min-w-fit'>
                <div style={{backgroundColor: item.backgroundColor}} className="flex h-10 items-center justify-center transition-all duration-200 brightness-50 hover:brightness-100">
                    <h1 style={{color: item.textColor}} className="brightness-100">{item.title}</h1>
                </div>
            </div>
            
        ))}
    </div>
  )
}
