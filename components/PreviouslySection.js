import { Container, Grid, Text } from 'theme-ui'

const PreviouslySection = () => (
  <div
    style={{
      backgroundImage: 'url(patterns/dots_blue.png), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100% )',
    }}
  >
    <Container mb={4} pt={4}>
      <Grid columns={2}>
        <Text>
          TODO: This section should talk about "our previous work" and include a youtube embed to the zephyr documentary
        </Text>
      </Grid>
    </Container>
  </div>
)

export default PreviouslySection