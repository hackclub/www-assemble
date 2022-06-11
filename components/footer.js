import {
  Box,
  Container,
  Link
} from 'theme-ui'
const Footer = () => (


  <Box
    sx={{
      backgroundImage: 'linear-gradient(90deg, rgba(5, 11, 20, 0.9) 0%, rgba(5, 11, 20, 0.9) 100% ), url(patterns/red.png)',
      backgroundSize: '150px',
    }}
    color="white"
    py={3}
  >
    <Container
      sx={{
        textAlign: 'center',
        '> a': {
          color: 'white',
          textDecoration: 'underline',
        },
      }}
    >
      <Box my={1} mb={1} sx={{ fontWeight: 800 }}>
        Hack Club HQ
      </Box>
      <Link href="https://hackclub.com">Home</Link> |{' '}
      <Link href="https://hackclub.com/slack">Slack</Link> |{' '}
      <Link href="https://workshops.hackclub.com">Workshops</Link> |{' '}
      <Link href="https://scrapbook.hackclub.com">Scrapbook</Link>
    </Container>
  </Box>
)
export default Footer