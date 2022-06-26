import { Container, Grid, Box, Heading, Text, Link } from 'theme-ui'
import Icon from '@hackclub/icons'
import ComicImage from './comic-image'

export const Features = () => (
  <Box
    id="features"
    sx={{
      py: 5,
      backgroundAttachment: 'fixed',
      backgroundImage:
        'linear-gradient(90deg, rgba(0,0,0, 0.2) 0%, rgba(0,0,0, 0.2) 100% ), url(patterns/dots_blue.png)',
    }}
  >
    <Container variant="copy" sx={{ maxWidth: ['copy', null, 'copyUltra'] }}>
      <Text
        variant="title"
        sx={{
          display: 'block',
          my: 2,
          color: 'white',
          textShadow: 'elevated',
          mb: 4,
          textAlign: ['center', 'left'],
          fontSize: ['42px', 5],
        }}
      >
        150+ hackers from all over the world come together in San Fransisco to...
      </Text>
      <Grid columns={[1, 1, 2]}>
        <InfoBox iconGlyph="support" heading="Share Their Knowledge">
          At Assemble, you'll be able to give & watch talks from peers, gain
          experience, make connections, and discover yourself. You'll meet new
          people from around the world (including{' '}
          <Link href="https://hackclub.com/amas#past-amas" target="_blank">previous AMA guests</Link>),{' '}
          get help from peers, and support your fellow hackers.
        </InfoBox>
        <ComicImage
          sx={{
            transitionDuration: '300ms',
            '&:hover': {
              transform: 'translateY(-7px) translateX(7px)',
              boxShadow: '-7px 7px #000',
            },
          }}
          // webp="https://cloud-nmdl7opdm-hack-club-bot.vercel.app/3hibernia.webp"
          // src="https://cloud-me9ijbqml-hack-club-bot.vercel.app/0hibernia.png"
          src="https://cloud-e57ekrxp4-hack-club-bot.vercel.app/0shareknowledge.jpg"
          href="https://cloud-j0br81ugp-hack-club-bot.vercel.app/0zephyr5.jpg"
          alt="Two hackers problem-solving on the Hacker Zephyr (Photo by Kunal Botla, kunalbotla.com)"
          objectPosition="left bottom"
        />
        <InfoBox
          iconGlyph="explore"
          heading="Build For Themselves"
          sx={{ gridColumn: [null, null, '2/3'] }}
        >
          At Assemble, attendees build projects that have value to themselves.
          You'll build something that's meaningful to you and other hackers, not
          pitching to impress a business-type. Learning and creating is valued
          far above a long-term product plan.
        </InfoBox>
        <Box
          sx={{ gridColumn: [null, null, '1/2'], gridRow: [null, null, '2/3'] }}
        >
          <ComicImage
            sx={{
              transitionDuration: '300ms',
              '&:hover': {
                transform: 'translateY(-7px) translateX(7px)',
                boxShadow: '-7px 7px #000',
              },
            }}
            src="https://cloud-j0br81ugp-hack-club-bot.vercel.app/3zephyr2.jpg"
            href="https://cloud-j0br81ugp-hack-club-bot.vercel.app/3zephyr2.jpg"
            alt="Teenager coding on The Hacker Zephyr (Photo by Kunal Botla, kunalbotla.com)"
          />
        </Box>
        <InfoBox iconGlyph="announcement" heading="Set New Standards">
          One hackathon doesn’t constitute a renaissance, so we’re open-sourcing
          and documenting everything we work on for Assemble to allow attendees
          to create incredible hackathons in their communities.
        </InfoBox>
        <ComicImage
          sx={{
            transitionDuration: '300ms',
            '&:hover': {
              transform: 'translateY(-7px) translateX(7px)',
              boxShadow: '-7px 7px #000',
            },
          }}
          src="/flagship.jpg"
          href="/flagship.jpg"
          alt="Students at Flagship gathering"
          height="320px"
        />
      </Grid>
      <Box
        sx={{
          bg: 'sunken',
          color: 'black',
          backgroundSize: '30px',
          backgroundImage: 'url(/patterns/white.png)',
          border: '3px solid black',
          mt: 3,
          p: 4,
          transitionDuration: '300ms',
          '&:hover': {
            transform: 'translateY(-7px) translateX(7px)',
            boxShadow: '-7px 7px #000',
          },
        }}
      >
        <Heading
          as="h3"
          sx={{
            fontSize: [4, '40px'],
            textAlign: 'center',
          }}
        >
          And hack for 42 hours (with time for sleep)!
        </Heading>
      </Box>
    </Container>
  </Box>
)

const InfoBox = ({ iconGlyph, heading, children, sx }) => (
  <Box
    sx={{
      p: 1,
      pb: [2, 4],
      bg: 'sunken',
      color: 'black',
      textAlign: 'left',
      backgroundSize: '30px',
      backgroundImage: 'url(/patterns/white.png)',
      border: '3px solid black',
      transitionDuration: '300ms',
      '&:hover': {
        transform: 'translateY(-7px) translateX(7px)',
        boxShadow: '-7px 7px #000',
      },
      ...sx,
    }}
  >
    <Box
      sx={{
        p: 3,
        display: 'flex',
        gap: '12px',
        fontSize: 2,
      }}
    >
      <Box>
        <Heading
          as="h3"
          mt={2}
          mb={3}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            ml: '-2px',
            width: 'fit-content',
            fontSize: 32,
          }}
        >
          <Box
            sx={{
              color: '#FF544A',
              display: ['none', 'flex'],
              alignItems: 'center',
            }}
          >
            <Icon glyph={iconGlyph} size={36} />
          </Box>
          {heading}
        </Heading>
        {children}
      </Box>
    </Box>
  </Box>
)
