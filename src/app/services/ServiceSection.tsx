'use client'

import { motion } from 'framer-motion'
import { MoveDownRight } from 'lucide-react'
import Link from 'next/link'

type ServiceType = {
  num: string | number
  title: string
  description: string
  href: string
}

const services: ServiceType[] = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia ea doloremque rem accusantium, repellat magnam natus. Ratione minus, repellat, porro magnam cumque commodi eligendi saepe dolores, dolore voluptas eos.',
    href: ''
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia ea doloremque rem accusantium, repellat magnam natus. Ratione minus, repellat, porro magnam cumque commodi eligendi saepe dolores, dolore voluptas eos.',
    href: ''
  },
  {
    num: '03',
    title: 'Logo Design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia ea doloremque rem accusantium, repellat magnam natus. Ratione minus, repellat, porro magnam cumque commodi eligendi saepe dolores, dolore voluptas eos.',
    href: ''
  },
  {
    num: '04',
    title: 'SEO',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia ea doloremque rem accusantium, repellat magnam natus. Ratione minus, repellat, porro magnam cumque commodi eligendi saepe dolores, dolore voluptas eos.',
    href: ''
  }
]

const ServiceSection = () => {
  return (
    <section>
      <div className="layout-container h-full flex items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
              duration: 0.4,
              ease: 'easeInOut'
            }
          }}
          className="grid grid-cols-2 gap-16 xs:grid-cols-1 xs:gap-4"
        >
          {services.map((service, index) => (
            <div key={index} className="overflow-hidden">
              <div className="flex items-center justify-between group">
                <div className="text-5xl font-extrabold text-stroke-1 text-transparent group-hover:text-stroke-1-hover transition-all duration-300">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="bg-white w-[70px] h-[70px] rounded-full flex items-center justify-center group-hover:bg-textColor transition-colors duration-300"
                >
                  <MoveDownRight
                    size={36}
                    className="text-mainColor group-hover:-rotate-45 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="pt-6">
                <Link href={service.href} className="group">
                  <h3 className="text-4xl font-bold leading-none transition-colors duration-300 group-hover:text-textColor">
                    {service.title}
                  </h3>
                </Link>
                <p className="mt-3 text-white/60">{service.description}</p>
              </div>

              {/* Border bottom */}
              <div className="border-b border-white/20 mt-3"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceSection
