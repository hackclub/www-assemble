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
          question="Can I join?"
          answer={
            <>
              If you're in middle school, high school, or an alumni of Hack
              Club, yes, we are so excited to see you in SF! If you're not sure,
              shoot us a mail at{' '}
              <a style={{ color: 'black' }} href="mailto:assemble@hackclub.com">
                assemble@hackclub.com
              </a>
              .
            </>
          }
        />
        <Card
          question="What do I need?"
          answer="Your laptop, chargers, anything for your hack (hardware?), toiletries, sleeping bags, and an open mind."
        />
        <Card
          question="How much does it cost?"
          answer="Nothing! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events."
        />
        <Card
          question="I can't pay for travel..."
          answer={
            <>
              We're providing travel stipends to both domestic and international
              attendees. Please request one on the registration form if needed.
              If you're travelling internationally, we can issues visa letters
              and have prepared this{' '}
              <a
                style={{ color: 'black' }}
                href="https://docs.google.com/document/d/e/2PACX-1vQ9i8Vpb9Bpu0pxabtC4V32Sab930B6aK48lkruZTJVPXkNDCAqSJjbzv_uGzzN4wpcI2gOBZ8zQLkK/pub"
              >
                guide
              </a>{' '}
              to help you.
            </>
          }
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
        <Card
          question="I'm not that good at coding..."
          answer={
            <>
              This hackathon is for hackers of all skill levels! We'll have
              workshops and other events so join us and let's learn together. If
              you'd like to start exploring some introductory projects, check
              out{' '}
              <a
                style={{ color: 'black' }}
                href="https://workshops.hackclub.com"
              >
                Hack Club Workshops
              </a>{' '}
              .
            </>
          }
        />
        <Card
          question="What can I make?"
          answer={<>Anything! Apps, art, sites, and hardware projects are all perfect for a hackathon. Check out what {' '}
          <a
            style={{ color: 'black' }}
            href="https://hackclub.com/"
          >
            Hack Clubbers
          </a>{' '} are {' '}
          <a
            style={{ color: 'black' }}
            href="https://hackclub.com/ship/"
          >
            making every day
          </a>!</>}
        />
        <Card
          question="What are the sleeping arrangements?"
          answer={
            <>
              From 9pm - 7am on both nights we will have a designated sleeping
              area in the Figma office with low lights and minimal sound for you
              to rest! We have limited sleeping bags so please bring your own.
            </>
          }
        />
        <Card
          question="My parents are worried!"
          answer={
            <>
              We're here to help, ask them to reach out to us at{' '}
              <a style={{ color: 'black' }} href="mailto:assemble@hackclub.com">
                assemble@hackclub.com
              </a>{' '}
              and we'll make sure to answer all their questions. Assemble will
              be supervised by background checked staff and overseen by 24/7
              security staff.
            </>
          }
        />
      </Grid>
    </Container>
  </Box>
)

export default Glossary
