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
      <Box my={1} mb={1} sx={{lineHeight: '2'}}>
        Pages hand inked by{' '}
        <Text sx={{ fontWeight: 'bold', color: 'white', textDecoration: 'none' }} as="a" href="https://hackclub.com" target="_blank">Hack&nbsp;Club</Text> ~ Send mail 📮
        to{' '}
        <Link
          href="mailto:assemble@hackclub.com"
          sx={{ color: 'white', fontWeight: 800 }}
        >
          assemble@hackclub.com
        </Link>
        .
        <br />
        Everything open source at{' '}
        <Link
          href="https://github.com/hackclub/www-assemble"
          sx={{ color: 'white', fontWeight: 800 }}
          target="_blank"
        >
          hackclub/www-assemble
        </Link>.
        Hacker Zephyr photos by{' '}
        <Link
          href="https://kunalbotla.com"
          sx={{ color: 'white', fontWeight: 800 }}
          target="_blank"
        >
          Kunal Botla
        </Link>.
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
