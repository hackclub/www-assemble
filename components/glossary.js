import { Box, Grid, Container, Heading, Text } from 'theme-ui'

const Card = ({ question = 'question', answer = 'answer' }) => (
  <Box
    sx={{
      bg: 'white',
      p: 3,
      borderRadius: 3,
      boxShadow: 'card',
      transitionDuration: '0.125s',
      ':hover': {
        boxShadow: 'elevated',
        transform: 'scale(1.0625)',
      },
    }}
  >
    <Heading as="h4" pb={2}>
      {question}
    </Heading>
    {answer}
  </Box>
)

const Glossary = () => (
  <Box
    sx={{
      backgroundSize: '150px',
      backgroundImage:
        'linear-gradient(90deg, rgba(5, 11, 20, 0.3) 0%, rgba(5, 11, 20, 0.3) 100% ), url(/patterns/green.png)',
    }}
  >
    <Container sx={{ py: [4, 6] }}>
      <Text
        variant="text.title"
        sx={{
          color: 'white',
          pb: 4,
          display: 'block',
          textShadow: 'elevated',
          textDecoration: 'underline',
        }}
      >
        Anything else?
      </Text>
      <Grid columns={[1, null, 3]} gap={[3, 3, 3]}>
        <Card
          question="I can't pay for travel..."
          answer="We're are providing travel stipends and can issue letters of support for visa applications. These can be requested on the registration form."
        />
        <Card
          question="What do I need?"
          answer="Your laptop, chargers, anything for your hack (hardware?), toiletries, and an open mind. We can help with the laptop. The mind thing is on you, however."
        />
        <Card
          question="How much does it cost?"
          answer="Nothing! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events."
        />
        <Card
          question="My parents are worried!"
          answer={
            <>
              We're here to help, ask them to reach out to us at{' '}
              <a style={{ color: 'black' }} href="mailto:assemble@hackclub.com">
                assemble@hackclub.com
              </a>{' '}
              and we'll make sure to answer all their questions. Assemble will be 
              supervised by background checked adults and 24/7 security staff.
            </>
          }
        />
        <Card
          question="What can I make?"
          answer="Anything! Apps, art, sites, and hardware projects are all perfect for a hackathon."
        />
        <Card
          question="Who is judging?"
          answer={
            <>
              Judging is done by the people that matter the most– attendees. If
              you ship a project you can vote on other projects. That said,
              we'll still have{' '}
              <a
                style={{ color: 'black' }}
                href="https://hackclub.com/amas#past-amas"
              >
                pretty cool people
              </a>{' '}
              hang out with us.
            </>
          }
        />
      </Grid>
    </Container>
  </Box>
)

export default Glossary
