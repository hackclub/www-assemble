import { Image, Box } from 'theme-ui'

const DinoEasterEgg = (props) => {
  // return null
  return (
    <>
      <Box>
      </Box>
      <Image
        src="/dinosaur-waving.png"
        sx={{
          position: 'fixed',
          bottom: -120,
          height: '240px',
          right: -45,
          zIndex: '200',
          cursor: 'pointer',
          transition: 'ease-in-out 0.3s',
          '&:hover': {
            bottom: '-80px',
          },
        }}
        onClick={() => window.open('mailto:assemble@hackclub.com', '_blank')}
      />
    </>
  )
}
export default DinoEasterEgg