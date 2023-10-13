import React from 'react'
import Image from 'next/image'
import SkillLevels from "@/common/json/skilllevels.json"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SkillLevelInfo } from '@/common/interfaces/SkillLevelInfo';



interface SkillCardProps {
    info: {
        title: string;
        description: string;
        image: string;
        level?: number;
    };
    priorityImage?: boolean;
    grayedOut:boolean;
    somethingSelected:boolean,
    onMouseEnter: () => void;
    onMouseLeave: () => void;

}


export default React.memo(function SkillCard({
  info,
  grayedOut,
  somethingSelected,
  priorityImage,
  onMouseEnter,
  onMouseLeave,
}: SkillCardProps) {
  const textColorMain:string = ((grayedOut) ? "text-gray-400" : "text-white")

  const level = ((info.level != null) ? info.level : 1)
  const data:SkillLevelInfo | undefined = SkillLevels[level-1] ?? SkillLevels[(level <= 0) ? 0 : SkillLevels.length - 1]
  
  
  return (
    <div 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
      className={"group relative w-80 h-32 drop-shadow-md transition-all duration-200 hover:scale-125 hover:-rotate-6 " + (grayedOut ? "z-0":"z-10") + ((!grayedOut && !somethingSelected) ? " grayscale-[75%]" : "")}
    >
        <div className={"relative rounded-lg w-80 h-32 bg-dark-gray flex items-center" }>
          <div className="bg-light-dark-gray rounded-l-lg rounded-r-sm h-full w-32 flex items-center justify-center">
            <div className={"relative w-28 h-28 " + (grayedOut ? "grayscale": "grayscale-0")}>
            <Image quality={40} priority={priorityImage ?? false} alt="" fill={true} style={{objectFit:"contain"}} src={info.image}/>
            </div>
          </div>
          
          {(data != null) && <div style={{backgroundColor: data.backgroundColor}}title={data.title} className={"absolute w-6 h-6 rounded-bl-sm rounded-tr-lg top-0 right-0 invisible group-hover:visible"}>
              <AnchorLink href="#skilllevels">
                <h1 style={{color: data.textColor }} className={"font-title font-medium text-center"}>{data.letter}</h1>
              </AnchorLink>
          </div>}
          <div className="flex flex-col flex-grow">
            
            <h2 className={"text-2xl text-center font-medium font-title " + textColorMain}>{info.title}</h2> 
            <p className={" text-center font-light " + textColorMain}>{info.description}</p>
          </div>
        </div>
    </div>
  )
});
