'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { about, education, experience, skills } from '@/constants/general'

const ResumePage = () => {
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
        <div className="layout-container">
          <Tabs
            defaultValue="experience"
            className="flex gap-[60px] sm:flex-col sm:items-center"
          >
            <TabsList className="flex flex-col max-w-[380px] w-full gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* Experience */}
            <TabsContent value="experience" className="w-full sm:text-center">
              <h2>{experience.title}</h2>
              <p className="mt-3 text-white/60">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <div className="grid grid-cols-2 gap-5 mt-3 xs:grid-cols-1">
                  {experience.item.map((ex, index) => (
                    <div
                      key={index}
                      className="bg-[#27272c] p-6 overflow-hidden rounded-md xs:p-5"
                    >
                      <div className="text-textColor text-xs">
                        {ex.duration}
                      </div>
                      <h3 className="mt-2 text-xl">{ex.position}</h3>
                      {ex.company && (
                        <div className="flex items-center gap-2 mt-4 sm:justify-center">
                          {/* Dot */}
                          <span className="w-1 h-1 rounded-full bg-textColor" />
                          <span className="text-sm text-white/60">
                            {ex.company}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full sm:text-center">
              <h2>{education.title}</h2>
              <p className="mt-3 text-white/60">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <div className="grid grid-cols-2 gap-5 mt-3">
                  {education.item.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-[#27272c] p-6 overflow-hidden rounded-md"
                    >
                      <div className="text-textColor text-xs">
                        {edu.duration}
                      </div>
                      <h3 className="mt-2 text-xl capitalize h-14">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mt-4 sm:justify-center">
                        {/* Dot */}
                        <span className="w-1 h-1 rounded-full bg-textColor" />
                        <span className="text-sm text-white/60 capitalize">
                          {edu.institution}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full sm:text-center">
              <h2>{skills.title}</h2>
              <p className="mt-3 text-white/60">{skills.description}</p>
              <ScrollArea className="h-[400px]">
                <div className="grid grid-cols-4 xs:grid-cols-2 gap-5 mt-3">
                  {skills.skillList.map((skill, index) => (
                    <TooltipProvider key={index} delayDuration={0.4}>
                      <Tooltip>
                        <TooltipTrigger>
                          <figure className="bg-[#27272c] p-6 overflow-hidden rounded-md">
                            <Image
                              src={skill.icon}
                              width={100}
                              height={100}
                              alt="Skill Image"
                              className="w-full h-full object-cover"
                            />
                          </figure>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full sm:text-center">
              <h2 className="capitalize">{about.title}</h2>
              <p className="mt-3 text-white/60">{about.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-1">
                {about.info.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 sm:justify-center"
                  >
                    <span className="text-white/60 ">{item.fieldName}</span>
                    <span className="">{item.fieldValue}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
    </main>
  )
}

export default ResumePage
