import { Hyperlink } from '@/common/interfaces/Hyperlink'
import React from 'react'

interface SkillCardProps {
    info: {
        title: string;
        description: string;
        image: string;
        primaryHref: string;
        links: Hyperlink[];
    };
}


export default function SkillCard({info} : SkillCardProps) {
  return (
    <div>{info.title}</div>
  )
}
