import {
  Box,
  Container,
  Link,
  Text
} from 'theme-ui'
const Footer = () => (


  <Box
    sx={{
      backgroundImage: 'linear-gradient(90deg, rgba(5, 11, 20, 0.9) 0%, rgba(5, 11, 20, 0.9) 100% ), url(patterns/red.png)',
      backgroundSize: '150px',
      fontFamily: 'cursive'
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
      <Box my={1} mb={1}>
        Pages hand inked by <Text sx={{ fontWeight: 'bold' }}>Hack&nbsp;Club</Text>.
      </Box>
      {/* only uncomment this once the bank project is in transparency mode & the site repo is public */}

      {/* Open source:{' '}
      <Link href="https://github.com/hackclub/www-assemble">Code</Link>
      {' & '}
      <Link href="https://bank.hackclub.com/assemble">Finances</Link> */}
    </Container>
  </Box>
)
export default Footer