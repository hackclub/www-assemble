import { Image, Box, Text } from 'theme-ui'

const DinoEasterEgg = props => {
  // return null
  return (
    <>
      <Box
        id="dino-easter-egg"
        sx={{
          display: ['none', 'block', 'block'],
          position: 'fixed',
          bottom: 0,
          right: 0,
          height: '240px',
          width: '240px',
          zIndex: '200',
          '&:hover > div': {
            bottom: '-80px',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            bottom: '-100%',
            right: -45,
            transition: 'ease-in-out 0.3s',
          }}
        >
          <Image
            src="/dinosaur-waving.png"
            sx={{
              position: 'relative',
              height: '240px',
              zIndex: '200',
              cursor: 'pointer',
            }}
            onClick={() =>
              window.open('https://www.dinosaurbbq.org/', '_blank')
            }
          />
          <Text
            sx={{
              position: 'absolute',
              top: '7px',
              left: '-151px',
              color: 'white',
            }}
          >
            Try pressing <kbd>ctrl</kbd>/<kbd>cmd</kbd> + <kbd>s</kbd>!
          </Text>
        </Box>
      </Box>
    </>
  )
}
export default DinoEasterEgg
