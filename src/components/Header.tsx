import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { path } from '@/constants/path'
import MobileNav from '@/components/MobileNav'

const Header = () => {
  return (
    <header className="w-full py-12 xs:py-8 fixed top-0 left-0 z-30">
      <div className="layout-container flex items-center justify-between">
        <Link href={path.HOME} className="text-4xl font-semibold">
          NawDev<span className="text-textColor">.</span>
        </Link>

        {/* Navbar & Call to action */}
        <div className="flex items-center gap-6 xs:hidden">
          <Navbar />
          <Button className="bg-textColor hover:bg-textColor-hover text-mainColor transition-colors">
            Hire me
          </Button>
        </div>

        {/* Mobile nav */}
        <div className="hidden xs:flex">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
