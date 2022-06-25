import Copy from './first-letter.mdx'
import { Box, Container } from 'theme-ui'
import { motion, useViewportScroll, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Hero } from './hero'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const Letter = () => {
  const { scrollYProgress } = useViewportScroll()
  const controls = useAnimation()
  const [backgroundOverlay, setBackgroundOverlay] = useState(`linear-gradient(90deg, rgba(5, 11, 20, 100%) 0%, rgba(5, 11, 20, 100%) 100% )`)

  useEffect(
    () =>
      scrollYProgress.onChange(latest => {
        // if (latest > 0) {
        //   controls.start({
        //     backgroundImage:
        //       'linear-gradient(90deg, rgba(5, 11, 20, 0.7) 0%, rgba(5, 11, 20, 0.7) 100% )',
        //     transition: { duration: 0.3 },
        //   })
        // }
        // if (latest == 0) {
        //   controls.start({
        //     backgroundImage:
        //       'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100% )',
        //     transition: { duration: 1 },
        //   })
        // }
      
          const css = `clamp(70%, ${100 - Math.round(latest / 0.3 * 100)}%, 100%)`;
          setBackgroundOverlay(`linear-gradient(90deg, rgba(5, 11, 20, ${css}) 0%, rgba(5, 11, 20, ${css}) 100% )`);
      
      }),
    [],
  )

  return (
    <Box
      sx={{
         backgroundImage:
           'url("https://cloud-bs04w09ot-hack-club-bot.vercel.app/0image.png")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        position: 'relative',
      }}
      id="letter"
    >
      <motion.div
        animate={controls}
        style={{
          paddingTop: '32px',
          paddingBottom: '32px',
          position: 'relative',
          zIndex: 99,
          minHeight: '100vh',
          backgroundImage:backgroundOverlay
            //  'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100% )',
        }}
      >
        <div style={{minHeight: '100vh'}}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 4 }}
          style={{
            textAlign: 'left',
            width: '90vw',
            margin: 'auto',
            paddingTop: '32px',
          }}
        >
          <Container variant="narrow">
            <img
              src="welcome.png"
              style={{ width: '70vw', maxWidth: '300px' }}
              alt="welcome home..."
            />
          </Container>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 4, delay: 3 }}
          style={{
            textAlign: 'left',
            width: '90vw',
            margin: 'auto',
          }}
        >
          <Container variant="narrow">
            <Copy />
          </Container>
        </motion.div></div>
        <Hero />
      </motion.div>
    </Box>
  )
}
