import {
  Box, Grid, Container, Heading, Text
} from 'theme-ui'

const Card = ({ question = "question", answer = "answer" }) => (
  <Box sx={{ bg: 'white', p: 3, borderRadius: 3 }}>
    <Heading as="h4" pb={2}>{question}</Heading>
    {answer}
  </Box>
)

const Glossary = () => (
  <Box bg="black">
    <Container variant="copy" sx={{ py: [4, 6] }}>
      <Text
        variant="text.title"
        sx={{ color: 'white', pb: 3 }}
        style={{ display: 'block' }}
      >
        Anything else?
      </Text>
      <Grid columns={[1, null, 2]} gap={[3, 3, 4]}>
        <Card
          question="Who is judging?"
          answer={
            <>
              Judging is done by the people that matter the most– attendees. If you ship a project you can vote on other projects. That said, we'll still have
              {' '}<a style={{ color: 'black' }} href="https://hackclub.com/amas#past-amas">pretty cool people</a> hang out with us.
            </>
          }
        />
        <Card
          question="What do I need?"
          answer="Your laptop, chargers, anything for your hack (hardware?), toiletries, and an open mind. We can help with the laptop. The mind thing is on you."
        />
        <Card
          question="How much does it cost?"
          answer="Nothing! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events."
        />
        <Card
          question="My parent are worried!"
          answer="We're here to help, ask them to reach out to us at assemble@hackclub.com and we'll make sure to answer all their questions."
        />
        <Card question="What can I make?" answer="Anything! Apps, art, sites, and hardware projects are all perfect for a hackathon." />
        <Card question="I can't pay for travel..." answer="We're working on providing travel stipends & can issue letters for visa applications." />
      </Grid>
    </Container>
  </Box>
)

export default Glossary