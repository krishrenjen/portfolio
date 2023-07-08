import React from 'react'
import SkillLevels from "@/common/json/skilllevels.json"

export default function SkillLevelBar() {
  
    return (
    <div className="flex flex-wrap mx-40 items-center justify-center gap-1 bg-dark-gray py-2 px-2">
        {SkillLevels.map((item, index) => (
            <div key={index} className=''>
                <div style={{backgroundColor: item.backgroundColor}} className="flex flex-grow w-44 h-10 items-center justify-center transition-all duration-200 brightness-50 hover:brightness-100">
                    <h1 style={{color: item.textColor}} className="brightness-100">{item.title}</h1>
                </div>
            </div>
            
        ))}
    </div>
  )
}
