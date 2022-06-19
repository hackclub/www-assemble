import { Box, Image } from 'theme-ui'
import { fonts } from '../lib/theme'
import Copy from './copy.mdx'
import Parallax from './parallax'

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
        position: 'relative',
        zIndex: 99,
      }}
    >
      <Box
        sx={{
          p: 2,
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
            width: '25%',
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
            fontFamily: fonts.replace('ui-rounded,', ''),
            border: '2.5px solid black',
            fontSize: 3
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
            fontSize: 3
          }}
        >
          <Copy />
        </Box>
      </Box>
    </Box>
    <Parallax background={true}></Parallax>
  </Box>
)
