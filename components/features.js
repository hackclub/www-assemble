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
      <Link href="https://youtu.be/oolpPmuK2I8" target="_blank">
        <Text
          variant="title"
          sx={{
            display: 'block',
            my: 2,
            color: 'white',
            textShadow: 'elevated',
            textDecoration: 'underline',
            mb: 4,
          }}
        >
          Come together to...
        </Text>
      </Link>
      {/* <Text variant="title" color="white" sx={{display:['inline', null,'none']}}>Create a renaissance</Text> */}
      <Grid columns={[1, null, 2]}>
        <InfoBox iconGlyph="support" heading="Share Your Knowledge">
          At Assemble, you'll have the opportunity to give & watch talks from
          peers, gain experience, make connections, and discover yourself.
          You'll meet new people, get help from peers, and teach your fellow
          hackers.
        </InfoBox>
        <ComicImage
          // webp="https://cloud-nmdl7opdm-hack-club-bot.vercel.app/3hibernia.webp"
          // src="https://cloud-me9ijbqml-hack-club-bot.vercel.app/0hibernia.png"
          src="https://cloud-e57ekrxp4-hack-club-bot.vercel.app/0shareknowledge.jpg"
          href="https://cloud-j0br81ugp-hack-club-bot.vercel.app/0zephyr5.jpg"
          alt="Two hackers problem-solving on the Hacker Zephyr"
          objectPosition="left bottom"
        />

        <ComicImage
          webp="https://cloud-nmdl7opdm-hack-club-bot.vercel.app/3hibernia.webp"
          src="https://cloud-me9ijbqml-hack-club-bot.vercel.app/0hibernia.png"
          href="https://cloud-kmmvp0jlq-hack-club-bot.vercel.app/0img_1372.jpg"
          alt="At the corner of Figma HQ"
        />
        <InfoBox iconGlyph="explore" heading="Build For Yourself">
          At Assemble, projects are judged on "hacker value" by peers– other
          attendees. To get a vote, you need to ship something! You'll also have
          to build something not to impress a business-type or thoughtleader,
          but other fellow hackers.
        </InfoBox>

        <InfoBox iconGlyph="announcement" heading="Hack The Planet">
          One hackathon doesn’t constitute a renaissance, so we’re open-sourcing
          and documenting everything we work on for Assemble to allow others to
          create incredible hackathons in their communities. At the end of
          Assemble, we’ll launch a comprehensive guide for hackathon organizing
          so you can reboot the hackathon ecosystem at your high school.
        </InfoBox>
        <ComicImage
          webp="https://cloud-o7avz9t60-hack-club-bot.vercel.app/020191026_151117.webp"
          src="https://cloud-zlnkdqme0-hack-club-bot.vercel.app/020191026_151117.jpg"
          href="https://cloud-zlnkdqme0-hack-club-bot.vercel.app/020191026_151117.jpg"
          alt="Students at MAHacks with laptops sitting at tables in a room"
        />
      </Grid>
    </Container>
  </Box>
)

const InfoBox = ({ iconGlyph, heading, children }) => (
  <Box
    sx={{
      p: 1,
      pb: 4,
      bg: 'sunken',
      color: 'black',
      textAlign: 'left',
      backgroundSize: '30px',
      backgroundImage: 'url(/patterns/white.png)',
      border: '3px solid black',
    }}
  >
    <Box
      sx={{
        p: 3,
        display: 'flex',
        gap: '12px',
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
          <Box sx={{ color: '#FF544A', display: 'flex', alignItems: 'center' }}>
            <Icon glyph={iconGlyph} size={36} />
          </Box>
          {heading}
        </Heading>
        {children}
      </Box>
    </Box>
  </Box>
)
