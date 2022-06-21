import { Box, Container } from 'theme-ui'
import Copy from './fade.mdx'
import Parallax from './parallax'
import { motion, useViewportScroll, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const Letter = () => {
  const { scrollYProgress } = useViewportScroll()
  const controls = useAnimation()
  useEffect(() => scrollYProgress.onChange(latest => {
    if(latest>0){
      controls.start({
        backgroundImage: 'linear-gradient(90deg, rgba(5, 11, 20, 0.9) 0%, rgba(5, 11, 20, 0.9) 100% )',
        transition: { duration: 0.5 },
      })
    }
    if(latest == 0){
      controls.start({
        backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100% )',
        transition: { duration: 1 },
      })
    }
  }), [])
  
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <motion.div
        animate={controls}
        style={{
          paddingTop: '32px',
          paddingBottom: '32px',
          position: 'relative',
          zIndex: 99,
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100% )'
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 4 }}
          style={{
            textAlign: 'left',
            width: '70vw',
            margin: 'auto',
            paddingTop: '32px',
          }}
        >
          <Container variant="narrow">
            <img src="welcome.png" height="84px" style={{maxWidth: '70vw'}}/>
          </Container>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 4, delay: 3 }}
          style={{
            textAlign: 'left',
            paddingTop: '18px',
            width: '70vw',
            margin: 'auto',
          }}
        >
          <Container variant="narrow">
            <Copy />
          </Container>
        </motion.div>
      </motion.div>
      <Parallax background={true}></Parallax>
    </Box>
  )
}
