'use client'

import Link from 'next/link'
import { menus } from '@/constants/general'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center">
      {menus.map((menu, index) => (
        <Link
          href={menu.path}
          key={index}
          className={cn(
            'capitalize font-medium px-4 hover:text-textColor-hover transition-colors',
            pathname === menu.path && 'text-textColor'
          )}
        >
          {menu.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
