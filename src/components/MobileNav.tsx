'use client'

import { AlignRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { menus } from '@/constants/general'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignRight size={32} className="text-textColor cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="bg-mainColor border-l-0 flex items-center justify-center">
        {/* Links */}
        <nav className="mt-12 flex flex-col">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.path}
              className={cn(
                'capitalize text-xl font-medium p-3 text-center transition-colors hover:text-textColor',
                pathname === menu.path && 'text-textColor'
              )}
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
