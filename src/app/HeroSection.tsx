'use client'

import Avatar from '@/components/Avatar'
import Social from '@/components/Social'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Typewriter from 'typewriter-effect'

const HeroSection = () => {
  return (
    <section className="h-[calc(100vh-136px)] min-h-[632px] max-h-[1080px] ">
      <div className="layout-container w-full h-full sm:h-auto flex items-center sm:flex-col-reverse relative">
        {/* Intro text */}
        <div className="max-w-[500px] sm:text-center ">
          <span className="text-xl">Frontend Developer</span>
          <h1 className="mt-4">
            Hello I'm <br />
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                cursorClassName: 'Typewriter__cursor text-textColor ml-0'
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-textColor">Nam Nguyễn<span>')
                  .pauseFor(2500)
                  .deleteAll()
                  .start()
              }}
            />
          </h1>
          <p className="mt-4 text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            dolorum! Sed beatae, officia fugiat odit deleniti sapiente et
            voluptatum minima molestias maxime nihil autem quisquam expedita
            nisi ipsa incidunt corrupti?
          </p>

          {/* Download CV & Socials */}
          <div className="mt-4 flex items-center gap-5 sm:flex-col">
            <Button
              variant="outline"
              className="text-textColor bg-transparent hover:bg-textColor-hover border-textColor flex items-center gap-2 py-5 px-3"
            >
              Download CV
              <Download />
            </Button>

            <Social />
          </div>
        </div>

        {/* Avatar */}
        <div className="absolute top-2/4 right-[15px] -translate-y-2/4 sm:mb-4 sm:relative sm:top-0 sm:translate-y-0 flex-1">
          <Avatar />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
