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
            '&:active': {
              transform: 'translateY(2px) translateX(1px)',
              boxShadow: '-2px -2px #000',
            }
          }}
          style={{
            ...noselect
          }}
        >
          REGISTER →
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
