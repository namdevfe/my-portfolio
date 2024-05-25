'use client'

import Avatar from '@/components/Avatar'
import Social from '@/components/Social'
import { buttonVariants } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'

const HeroSection = () => {
  return (
    <section className="h-full max-h-[1080px]">
      <div className="layout-container w-full h-full sm:h-auto flex items-center gap-6 sm:flex-col-reverse relative">
        {/* Intro text */}
        <div className="max-w-[500px] sm:text-center">
          <span className="text-xl">Frontend Developer</span>
          <h1 className="mt-4">
            Hi, I'm <br />
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                cursorClassName: 'Typewriter__cursor text-textColor ml-0'
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-textColor">Naw Dev<span>')
                  .pauseFor(2500)
                  .deleteAll()
                  .start()
              }}
            />
          </h1>
          <p className="mt-4 text-white/80">
            I enjoy building software that makes people' lives easier by writing
            elegant, performant, and maintainable frontend code.
          </p>

          {/* Download CV & Socials */}
          <div className="mt-4 flex items-center gap-5 sm:flex-col">
            <Link
              href="/resume/Nguyen-Kim-Quoc-Nam-resume.pdf"
              // download="Nguyen-Kim-Quoc-Nam-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: 'outline',
                className:
                  'text-textColor bg-transparent hover:bg-textColor-hover border-textColor flex items-center gap-2 py-5 px-3'
              })}
            >
              Download CV
              <Download />
            </Link>

            <Social />
          </div>
        </div>

        {/* Avatar */}
        <div className="absolute top-2/4 right-[15px] -translate-y-2/4 sm:mb-4 sm:static sm:top-0 sm:translate-y-0 flex-1">
          <Avatar />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
