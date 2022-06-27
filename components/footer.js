import { Box, Container, Link, Text } from 'theme-ui'
const Footer = () => (
  <Box
    sx={{
      backgroundImage:
        'linear-gradient(90deg, rgba(5, 11, 20, 0.9) 0%, rgba(5, 11, 20, 0.9) 100% ), url(patterns/red.png)',
      backgroundSize: '150px',
      fontFamily: 'cursive',
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
      <Box my={1} mb={1} sx={{ lineHeight: '2' }}>
        Pages hand inked by{' '}
        <Text
          sx={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }}
          as="a"
          href="https://hackclub.com"
          target="_blank"
        >
          Hack&nbsp;Club
        </Text>{' '}
        ~ Send mail 📮 to{' '}
        <Link
          href="mailto:assemble@hackclub.com"
          sx={{ color: 'white', fontWeight: 800 }}
        >
          assemble@hackclub.com
        </Link>
        .
        <br />
        Source code open sourced at{' '}
        <Link
          href="https://github.com/hackclub/www-assemble"
          sx={{ color: 'white', fontWeight: 800 }}
          target="_blank"
        >
          hackclub/www-assemble
        </Link>{' '}
        and finances released{' '}
        <Link
          href="https://bank.hackclub.com/assemble"
          sx={{ color: 'white', fontWeight: 800 }}
          target="_blank"
        >
          on Hack Club Bank.
        </Link>
      </Box>
    </Container>
  </Box>
)
export default Footer
