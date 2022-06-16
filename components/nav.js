import { Flex, Heading, Image } from 'theme-ui'

export const Nav = () => (
  <Flex sx={{ background: 'white' }}>
    <Heading
      p={3}
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        backgroundImage:
          'linear-gradient(90deg, rgba(5, 11, 20, 0.7) 0%, rgba(5, 11, 20, 0.7) 100% ), url(patterns/black.png)',
        backgroundSize: '70px',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Image
        src="/textured-flag.png"
        height="30px"
        sx={{ margin: 'auto', height: '30px' }}
      />
    </Heading>
  </Flex>
)
