import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';


interface NavItemProps{
    content:string,
    href: string,
}

export default function NavItem({content, href} : NavItemProps) {
  const currentPath = usePathname();
  return (
    <li className={"font-title font-normal text-lg  md:hover:bg-transparent rounded-md px-4 md:px-0 hover:bg-light-dark-gray " + ((currentPath == href) ? "font-bold" : "md:hover:text-slate-300")}>
        <Link href={href}>{content}</Link>
    </li>
  )
}
