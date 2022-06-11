import { Image, Box } from 'theme-ui'

const DinoEasterEgg = (props) => {
  // return null
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          height: '240px',
          width: '240px',
          zIndex: '200',
          '&:hover > img': {
            bottom: '-80px',
          },
        }}>
      <Image
        src="/dinosaur-waving.png"
        sx={{
          position: 'relative',
          bottom: '-100%',
          height: '240px',
          right: -45,
          zIndex: '200',
          cursor: 'pointer',
          transition: 'ease-in-out 0.3s',
        }}
        onClick={() => window.open('mailto:assemble@hackclub.com', '_blank')}
      />
      </Box>
    </>
  )
}
export default DinoEasterEgg