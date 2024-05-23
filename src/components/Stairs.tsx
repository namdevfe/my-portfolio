import { motion } from 'framer-motion'

// Variants
const stairAnimation = {
  initial: {
    top: '0%'
  },
  animate: {
    top: '100%'
  },
  exit: {
    top: ['100%', '0%']
  }
}

const reverseIndex = (index: number) => {
  const totalStep = 6 // number of steps
  return totalStep - index - 1
}

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing  a step of  the stairs.
        Each div will have same animation defined by the stairAnimation object.
        The delay for each div is calculated sinamically base on it's reversed index,
        creating  a staggered effect with decreasing delay for each subsequent step
      */}

      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1
          }}
          className="w-full h-full bg-white relative"
        />
      ))}
    </>
  )
}

export default Stairs
