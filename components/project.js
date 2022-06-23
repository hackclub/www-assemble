import { Container, Grid, Text, Box, Heading, Button } from 'theme-ui'
import NextImage from 'next/image'
import ImgFlagship1 from '../public/flagship.jpg'
import ImgFlagship2 from '../public/flagship2.jpg'
import { useState } from 'react'

const projectData = [
  // Example:
  // {
  //   src: 'image src',
  //   alt: 'image alt text',
  //   desc: 'text description',
  // }
  {
    src: 'https://cloud-qcrf01idm-hack-club-bot.vercel.app/0-45017250971189591042019-10-20_14.27.38.gif',
    alt: 'Created by @quackduck.',
    desc: 'What if you made a search engine?',
  },
  {
    src: 'https://cloud-qcrf01idm-hack-club-bot.vercel.app/0-45017250971189591042019-10-20_14.27.38.gif',
    alt: 'Created by @zachlatta.',
    desc: 'What if you made compiling a fatal error more fatal?',
  },
  {
    src: 'https://cloud-j1v4vj6pn-hack-club-bot.vercel.app/0asdjkhasjkd.png',
    alt: 'Created by @aidenybai.',
    desc: 'What if you made a camera with a middle finger trigger?',
  },
]

const ProjectCopy = ({ handleClick, desc }) => (
  <Box
    sx={{
      p: 3,
      bg: 'sunken',
      color: 'black',
      textAlign: 'left',
      backgroundSize: '30px',
      backgroundImage: 'url(/patterns/white.png)',
      display: 'flex',
      flexDirection: 'column',
      border: '8px solid black',
      justifyContent: 'flex-start',
    }}
  >
    <Heading sx={{ fontSize: 3, mt: 2 }}>
      We'll be building all weekend, so...
    </Heading>
    <Heading
      sx={{
        textShadow: 'elevated',
        fontSize: 6,
        my: 2,
        lineSpacing: '1',
        lineHeight: '1',
        flexGrow: 1,
      }}
    >
      {desc}
    </Heading>
    <Button
      onClick={handleClick}
      sx={{ borderRadius: 0, width: 'fit-content', mt: 2 }}
    >
      Get another idea!
    </Button>
    <Box></Box>
  </Box>
)

const ProjectImage = ({ src, alt, desc }) => (
  <Box
    sx={{
      border: '8px solid black',
      position: 'relative',
      minHeight: '450px',
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Box
      sx={{
        bg: '#000',
        p: 2,
        position: 'absolute',
        bottom: 0,
        right: 0,
        pb: 0,
        pl: 3,
        color: 'white',
        fontFamily: 'heading',
      }}
    >
      {alt}
    </Box>
  </Box>
)

const ProjectSection = () => {
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    let updatedIndex = ++index % projectData.length
    setIndex(updatedIndex)
  }

  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(5, 11, 20, 0.3) 0%, rgba(5, 11, 20, 0.3) 100% ), url(patterns/dots_red.png)',
        borderTop: '8px solid white',
        borderBottom: '8px solid white',
      }}
    >
      <Container py={4}>
        <Grid columns={2}>
          <ProjectCopy
            handleClick={handleClick}
            desc={projectData[index].desc}
          />
          <ProjectImage
            src={projectData[index].src}
            desc={projectData[index].desc}
            alt={projectData[index].alt}
          />
        </Grid>
      </Container>
    </div>
  )
}

export default ProjectSection
