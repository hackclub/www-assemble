import { Container, Grid, Box, Heading, Text, Link } from 'theme-ui'
import Icon from '@hackclub/icons'
import ComicImage from './comic-image'

export const Rundown2 = () => (
  <Box
    sx={{
      py: 4,
      backgroundAttachment: 'fixed',
      backgroundImage: 'url(patterns/dots_blue.png), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100% )',
    }}
  >
  <Container variant="copy">
    <Link href="https://youtu.be/oolpPmuK2I8" target="_blank">
      <Text
        variant="title"
        sx={{
            display: 'block',
            my: 2
        }}
      >
        Come together...
      </Text>
    </Link>
    {/* <Text variant="title" color="white" sx={{display:['inline', null,'none']}}>Create a renaissance</Text> */}
    <Grid columns={[1, null, 2]}>
        <InfoBox iconGlyph="support" heading="Share your knowledge">
            At Assemble, you'll have the opportunity to give & watch talks from peers, gain experience, make connections, and discover yourself. You'll meet new people, get help from peers, and teach your fellow hackers.
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
        <InfoBox iconGlyph="explore" heading="Build for yourself">
            At Assemble, projects are judged on "hacker value" by the people who matter most. Attendees.
        </InfoBox>


        <InfoBox iconGlyph="announcement" heading="Hack the planet">
            One hackathon doesn’t constitute a renaissance, so we’re open-sourcing and documenting everything we work on for Assemble
            to allow others to create incredible hackathons in their communities. At the end of Assemble, we’ll launch a comprehensive
            guide for hackathon organizing so you can reboot the hackathon ecosystem at your high school.
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

const InfoBox = ({ iconGlyph, heading, children}) => (
    <Box
        sx={{
          p: 1,
          bg: 'sunken',
          color: 'black',
          textAlign: 'left',
          backgroundSize: '30px',
          backgroundImage:
            'url(/patterns/white.png)',
          border: '3px solid #FF544A',
        }}
      >
        <Box
          sx={{
            p: 3,
            display: 'flex',
            gap: '8px',
            
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
                gap: '4px',
                ml: '-2px',
                width: 'fit-content',
                fontSize: 32
              }}
            >
              <Box sx={{ color: '#FF544A', pt: '1px' }}>
                <Icon glyph={iconGlyph} size={32} />
              </Box>
              {heading}
            </Heading>
           {children}
          </Box>
        </Box>
      </Box>
)
