import { Hyperlink } from '@/common/interfaces/Hyperlink'
import React from 'react'

interface ExperienceCardProps {
    info: {
        title: string;
        description: string;
        image: string;
        primaryHref: string;
        links: Hyperlink[];
    };
}


export default function SkillCard({info} : ExperienceCardProps) {
  return (
    <div>{info.title}</div>
  )
}
