import { Box, Image } from 'theme-ui'
import { fonts } from '../lib/theme'
import Copy from './copy.mdx'
import Parallax from './parallax'
import noselect from './noselect.js'

export const Letter = () => (
  <Box
    sx={{
      position: 'relative',
    }}
  >
    <Box
      sx={{
        backgroundImage:
          'linear-gradient(90deg, rgba(5, 11, 20, 0.6) 0%, rgba(5, 11, 20, 0.5) 100% )',
        py: 4,
        pb: ['50vh', 4],
        position: 'relative',
        zIndex: 99,
      }}
    >
      <Box
        sx={{
          p: 2,
          // display: ['none', 'none', 'inherit'],
          backgroundImage: 'url(patterns/white.png)',
          backgroundSize: '50px',
          maxWidth: '700px',
          margin: 'auto',
          position: 'relative',
        }}
      >
        <Image
          src="/date.svg"
          style={{
            width: '20%',
            position: 'absolute',
            top: '-8px',
            right: 0,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            bg: 'red',
            px: 3,
            py: 2,
            color: 'white',
            fontWeight: 800,
            cursor: 'pointer',
            fontFamily: fonts.replace('ui-rounded,', ''),
            border: '2.5px solid black',
            boxShadow: '1.5px 1.5px #000',
            '&:active': {
              transform: 'translateY(2px) translateX(2px)',
              boxShadow: 'none',
            },
            '& span': {
              opacity: '0',
              position: 'relative',
              display: 'inline-block',
              transition: '0.5s',
            },
            '& span:after': {
              content: '"hi"',
              position: 'absolute',
              opacity: '0',
              top: '-17px',
              right: '-20px',
              transition: '0.5s',
            },
            '&:hover span': {
              paddingRight: '25px',
              opacity: '1',
            },
            '&:hover span:after': {
              right: '0',
              opacity: '1',
            },
          }}
          style={{
            ...noselect,
          }}
        >
          REGISTER <span></span>
        </Box>
        <Box
          sx={{
            border: '2px dashed',
            borderColor: 'muted',
            p: 3,
            pt: 2,
          }}
        >
          <Copy />
        </Box>
      </Box>
    </Box>
    <Parallax background={true}></Parallax>
  </Box>
)
