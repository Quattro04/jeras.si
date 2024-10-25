'use client'

import Link from "next/link"
import { useActiveSection } from "../hooks/useActiveSection"

export const Navigation = () => {

  const navItems = ['about', 'experience'];
  const activeSection = useActiveSection();

  return (
    <ul className="hidden flex-col mt-24 md:flex">
      {navItems.map(item => (
        <li className={`group nav-item flex ${activeSection === item ? 'active' : ''}`} key={item}>
          <Link href={`#${item}`} className="flex items-center py-4 pr-3">
            <div className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200" />
            <div className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">{item}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}