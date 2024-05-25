'use client'

import { AlignRight } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { menus } from '@/constants/general'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

const MobileNav = () => {
  const pathname = usePathname()
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false)

  const handleOpenSheet = () => {
    setIsOpenSheet(true)
  }

  const handleCloseSheet = () => {
    setIsOpenSheet(false)
  }

  useEffect(() => {
    handleCloseSheet()
  }, [pathname])
  return (
    <Sheet defaultOpen={false} open={isOpenSheet} onOpenChange={setIsOpenSheet}>
      <SheetTrigger asChild>
        <AlignRight
          size={32}
          className="text-textColor cursor-pointer"
          onClick={handleOpenSheet}
        />
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
