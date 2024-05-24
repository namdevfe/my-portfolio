'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import { Github, MoveUpRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Swiper as SwiperType } from 'swiper/types'
import Image from 'next/image'
import WorkSliderButton from '@/app/work/WorkSliderButton'

type ProjectType = {
  num: string | number
  category: string
  title: string
  description: string
  techStack: string[]
  image: string
  live: string
  sourceCode: string
}

const projects: ProjectType[] = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 01',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aliquam officia possimus maiores minus placeat quas dolores accusantium, architecto odio iure repellat explicabo! Veritatis error eaque ratione fuga! Voluptates, aut?',
    techStack: ['html', 'css', 'javascript'],
    image: '/img/project-example.jpg',
    live: '',
    sourceCode: ''
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Project 02',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aliquam officia possimus maiores minus placeat quas dolores accusantium, architecto odio iure repellat explicabo! Veritatis error eaque ratione fuga! Voluptates, aut?',
    techStack: [
      'html',
      'css',
      'javascript',
      'sass',
      'react',
      'tailwind',
      'next.js'
    ],
    image: '/img/project-example.jpg',
    live: '',
    sourceCode: ''
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Project 03',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam aliquam officia possimus maiores minus placeat quas dolores accusantium, architecto odio iure repellat explicabo! Veritatis error eaque ratione fuga! Voluptates, aut?',
    techStack: [
      'html',
      'css',
      'javascript',
      'sass',
      'react',
      'tailwind',
      'next.js'
    ],
    image: '/img/project-example.jpg',
    live: '',
    sourceCode: ''
  }
]

const WorkPage = () => {
  const [currentProject, setCurrentProject] = useState<ProjectType>(projects[0])

  const handleSlideChange = (swiper: SwiperType) => {
    const currentProjectIndex = swiper.activeIndex
    setCurrentProject(projects[currentProjectIndex])
  }

  return (
    <main className="pt-[136px]">
      <motion.section
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: 'easeIn'
          }
        }}
      >
        <div className="layout-container grid grid-cols-2 gap-6 sm:grid-cols-1">
          {/* Project Description */}
          <div className="flex flex-col gap-5 sm:order-2">
            <div className="group flex flex-col gap-3">
              {/* Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-stroke-1">
                {currentProject.num}
              </div>

              {/* Category */}
              <span className="text-5xl font-bold leading-none text-white group-hover:text-textColor-hover transition-colors duration-300 capitalize">
                {currentProject.category}
              </span>

              {/* Description */}
              <p className="text-white/60">{currentProject.description}</p>

              {/* Tech stack */}
              <ul className="flex items-center gap-2 flex-wrap">
                {currentProject.techStack.map((item, index) => (
                  <li key={index} className="text-xl text-textColor capitalize">
                    {item}
                    {index !== currentProject.techStack.length - 1 && ','}
                  </li>
                ))}
              </ul>

              {/* Border bottom */}
              <div className="border border-white/20" />
            </div>

            <div className="flex items-center gap-4">
              {/* Live */}
              <Link
                href={currentProject.live}
                target="_blank"
                className="w-[70px] h-[70px] bg-white/5 rounded-full flex items-center justify-center group"
              >
                <TooltipProvider delayDuration={0.4}>
                  <Tooltip>
                    <TooltipTrigger>
                      <MoveUpRight
                        className="text-white group-hover:text-textColor-hover transition-colors duration-300"
                        size={36}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">Live Preview</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              {/* Github */}
              <Link
                href={currentProject.sourceCode}
                target="_blank"
                className="w-[70px] h-[70px] bg-white/5 rounded-full flex items-center justify-center group"
              >
                <TooltipProvider delayDuration={0.4}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Github
                        className="text-white group-hover:text-textColor-hover transition-colors duration-300"
                        size={36}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>

          {/* Project Slider */}
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="relative"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group cursor-pointer">
                    {/* Overlay */}
                    <div className="bg-black opacity-60 w-full h-full absolute top-0 left-0 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                    <Image
                      src={project.image}
                      priority
                      fill
                      className="object-cover"
                      quality={100}
                      alt={project.title}
                    />
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderButton
                containerStyles="w-full mt-3 flex items-center gap-2 justify-end xs:absolute xs:top-2/4 xs:left-0 xs:z-10 xs:-translate-y-2/4 xs:justify-between xs:mt-0"
                buttonStyles="bg-textColor text-mainColor hover:bg-textColor-hover rounded-sm"
              />
            </Swiper>
          </div>
        </div>
      </motion.section>
    </main>
  )
}

export default WorkPage
