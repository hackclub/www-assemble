import { Container, Heading } from "theme-ui"

export default () => {
  return (
    <Container mb={4} pt={4} bg="" variant="copy">
      <Heading
        variant="ultratitle"
        sx={{
          textTransform: 'uppercase',
          pb: 4,
          fontFamily: 'Space Grotesk',
          color: '#fa4639',
          WebkitTextFillColor:
            '#fa4639' /* Will override color (regardless of order) */,
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: '#fa4639',
          fontWeight: 'heavy',
          textShadow: 'elevated',
        }}
      >
        Assemble
      </Heading>
      <Heading variant="subheadline">Aug 5–7, 2022, 175 hackers came together for SF’s largest high school hackathon since the pandemic.</Heading>
    </Container>
  )
}