import { Button, Box, Container, Heading, Text } from 'theme-ui'
import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const PreviouslySection = () => {
  const [video, toggleVideo] = useState('0')
  return (
    <div
      style={{
        backgroundImage:
          'url(patterns/dots_blue.png), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100% )',
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.94),
          rgba(0, 0, 0, 0.74)
        ),url(
          https://camo.githubusercontent.com/77e8b6e57b2fb4253bfcf34b959ded385571cc69695d78a20ec434e69f027733/68747470733a2f2f636c6f75642d68613730636b3961682d6861636b2d636c75622d626f742e76657263656c2e6170702f307468655f6861636b65725f7a65706879725f636f6d707265737365642e676966
        )`,
          backgroundSize: 'cover',
          color: 'white',
          fontSize: '1.3rem!important',
          width: '100%',
          backgroundPosition: 'center',
          height: '100vh',
          display: video != '1' ? 'default' : 'none',
          textAlign: 'center',
          pt: '25vh'
        }}
      >
        <Container>
          <Heading
            sx={{
              fontSize: ['2.3rem', '3rem', '3rem'],
              marginBottom: '16px',
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            Curious about what we did last summer? Check out The Hacker Zephyr story!
          </Heading>
          <Text
            sx={{
              fontSize: '1.3rem!important',
              fontWeight: '600',
              marginTop: '0px',
              paddingTop: '0px',
              lineHeight: '1.8',
            }}
          >
            <Button
              mt="12px"
              mr="12px"
              bg="red"
              onClick={() => toggleVideo('1')}
              sx={{ lineHeight: '1.3' }}
            >
              ► {video != '0.1' ? 'Watch The Video' : 'Resume The Video'}
            </Button>
          </Text>
        </Container>
      </Box>
      <Box
        onClick={() => toggleVideo('0.1')}
        sx={{ display: video != '1' ? 'none' : 'default' }}
      >
        <ReactPlayer
          width="100vw"
          height="100vh"
          playing={video == '1' ? true : false}
          style={{ pointerEvents: 'none' }}
          url={`https://www.youtube.com/watch?v=2BID8_pGuqA`}
          onClick={() => toggleVideo('0.1')}
          onEnded={() => toggleVideo('0')}
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                autoplay: 0,
                modestbranding: 1,
                rel: 0,
              },
            },
          }}
        />
      </Box>
    </div>
  )
}

export default PreviouslySection
