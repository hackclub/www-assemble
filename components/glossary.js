import {
  Box, Grid, Container, Heading
} from 'theme-ui'

const Glossary = () => (
  <Box
    sx={{
      backgroundImage: 'url(patterns/blue.png)',
      backgroundSize: '50px',
    }}
  >
    <Container py={4}>
      <Heading
        mb={3}
        as="h1"
        sx={{ textAlign: 'center', color: 'white' }}
      >
        The Glossary
      </Heading>
      <Grid columns={3}>
        <Box bg="white" p={3}>
          <b>How will sleeping work?</b> <br />
          We'll have blackout zones that you can sleep in overnight. We
          recommend bringing a sleeping bag!
        </Box>
        <Box bg="white" p={3}>
          <b>What should I bring?</b> <br />
          Your computer, chargers, anything for your hack (hardware?),
          toiletries, & a sleeping bag (optional).
        </Box>
        <Box bg="white" p={3}>
          <b>How much will it cost?</b> <br />
          Nothing! We’ll have meals, snacks, and beverages onsite at the
          hackathon, as well as swag, prizes, and fun mini-events.
        </Box>
        <Box bg="white" p={3}>
          <b>My parents have concerned, what can I do?</b> <br />
          We're here to help, ask them to reach out to us at
          assemble@hackclub.com and we'll make sure they're convinced.
        </Box>
        <Box bg="white" p={3}>
          <b>What can I make?</b> <br />
          Anything! Apps, art, websites and hardware projects are all
          perfect for a hackathon!
        </Box>
        <Box bg="white" p={3}>
          <b>Will there be travel assistance?</b> <br />
          We will be providing a number of travel stipends, and will be
          able to help issue letters for visa applications.
        </Box>
      </Grid>
    </Container>
  </Box>
)

export default Glossary