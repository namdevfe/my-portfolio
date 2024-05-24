'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSwiper } from 'swiper/react'

type WorkSliderButtonProps = {
  containerStyles?: string
  buttonStyles?: string
  iconStyles?: string
}

const WorkSliderButton = ({
  containerStyles,
  buttonStyles,
  iconStyles
}: WorkSliderButtonProps) => {
  const swiper = useSwiper()

  return (
    <div className={containerStyles}>
      <Button className={buttonStyles} onClick={() => swiper.slidePrev()}>
        <ChevronLeft />
      </Button>
      <Button className={buttonStyles} onClick={() => swiper.slideNext()}>
        <ChevronRight />
      </Button>
    </div>
  )
}

export default WorkSliderButton
