import { Flex, Heading, Image } from 'theme-ui'
import { motion, useViewportScroll, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const Nav = () => {
  const { scrollYProgress } = useViewportScroll()
  const controls = useAnimation()
  useEffect(
    () =>
      scrollYProgress.onChange(latest => {
        if (latest > 0.10) {
          controls.start({
            opacity: 1,
            transition: { duration: 0.5 },
          })
        }
        if (latest == 0) {
          controls.start({
            opacity: 0,
            transition: { duration: 0.5 },
          })
        }
      }),
    [],
  )
  return (
    <motion.div
      style={{
        background: 'white',
        backgroundImage:
          'linear-gradient(90deg, rgba(5, 11, 20, 0.7) 0%, rgba(5, 11, 20, 0.7) 100% ), url(patterns/black.png)',
        backgroundSize: '70px',
        color: 'white',
        alignItems: 'center',
        gap: '16px',
        padding: '0px 16px',
        position: 'fixed',
        top: 0,
        zIndex: 999,
        width: '100vw',
        display: 'flex',
        opacity: 0,
      }}
      animate={controls}
    >
      <Heading
        p={3}
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 2,
          color: 'white',
          textAlign: 'left',
        }}
      >
        <Image src="/textured-flag.png" height="30px" sx={{ height: '30px' }} />
      </Heading>
      <Heading as="h3">The Hackathon</Heading>
      <Heading as="h3">The Rundown</Heading>
      <Heading as="h3">Last Summer</Heading>
      <Heading as="h3" p={2} bg="green" sx={{ borderRadius: '4px' }}>
        Register
      </Heading>
    </motion.div>
  )
}
