import { Container, Grid, Box, Heading, Text } from 'theme-ui'
import Icon from '@hackclub/icons'
import ImgFlagship1 from '../public/flagship.jpg'
import ImgFlagship2 from '../public/flagship2.jpg'
import NextImage from 'next/image'
import ComicImage from './comic-image'

export const Rundown = () => (
  <div id="rundown">
    <Box
      sx={{
        backgroundImage: 'url(patterns/red.png)',
        backgroundSize: '100px',
      }}
    >
      <Container py={5}>
        <Heading
          as="h2"
          sx={{
            textAlign: 'center',
            color: 'white',
            fontSize: 5,
            letterSpacing: 'title',
            lineHeight: 'title',
            textDecoration: 'underline',
            mb: 4, 
            mt: 3
          }}
        >
          The Rundown & Registration
        </Heading>
        <Grid>
          <Box bg="white" p={3}>
            <b>Date & Time:</b> Starts at 6:00pm on August 5th and ends at
            2:00pm on August 7th.
          </Box>
          <Grid
            bg="white"
            p={3}
            sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
          >
            <Box>
              <b>Venue:</b> Figma HQ <br /> 760 Market St, San Francisco
              <br /> California 94102
              <Grid columns={2} mt={2}>
                <ComicImage
                  webp="https://cloud-nmdl7opdm-hack-club-bot.vercel.app/3hibernia.webp"
                  src="https://cloud-me9ijbqml-hack-club-bot.vercel.app/0hibernia.png"
                  href="https://cloud-kmmvp0jlq-hack-club-bot.vercel.app/0img_1372.jpg"
                  alt="At the corner of Figma HQ"
                />
                <ComicImage
                  webp="https://cloud-nmdl7opdm-hack-club-bot.vercel.app/2financial_district.webp"
                  src="https://cloud-me9ijbqml-hack-club-bot.vercel.app/1financial_district.png"
                  href="https://cloud-kmmvp0jlq-hack-club-bot.vercel.app/1img_1520.jpg"
                  alt="Within 5 blocks of the venue, overlooking the financial district"
                />
                <ComicImage
                  webp="https://cloud-nmdl7opdm-hack-club-bot.vercel.app/0embarcadero.webp"
                  src="https://cloud-me9ijbqml-hack-club-bot.vercel.app/2embarcadero.png"
                  href="https://cloud-kmmvp0jlq-hack-club-bot.vercel.app/2img_1521.jpg"
                  alt="Water-front Embarcadero, a 7 minute walk from Figma HQ"
                />
                <ComicImage
                  webp="https://cloud-nmdl7opdm-hack-club-bot.vercel.app/1ferry.webp"
                  src="https://cloud-me9ijbqml-hack-club-bot.vercel.app/3ferry.png"
                  href="https://cloud-kmmvp0jlq-hack-club-bot.vercel.app/3img_1377.jpg"
                  alt="Historic ferry building only 2 bus stops from the venue"
                />
              </Grid>
            </Box>
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1516444326576!2d-122.40746738486592!3d37.786485779757264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d45808df5%3A0x4d44fc8167718a61!2sFigma!5e0!3m2!1sen!2ssg!4v1654075144855!5m2!1sen!2ssg"
                height="100%"
                width="100%"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
          <Box bg="white" p={3}>
            <b>Travel Stipends:</b> We're offering a limited number of stipends
            to cover travel expenses. If you need support with your travel
            stipend, please indicate this on your registration form and we will
            consider you for a travel stipend.
          </Box>
          <Box bg="white" p={3}>
            <b>Eligibility:</b> All high-school & upper-middle-school aged
            students are welcome to come! You don't have to be a member of the
            Hack Club community or be a Hack Club leader.
          </Box>
          <Box bg="white" p={3}>
            <b>COVID-19:</b> We require all participants to be vaccinated
            against COVID-19 or to have a medical exemption. We'll be providing
            all participants with N95 masks and rapid tests. We'll also be
            performing anonymous contact tracing and supporting any participant
            who tests positive with isolation.
          </Box>
          <Box
            p={3}
            sx={{
              color: 'white!important',
              fontWeight: 800,
              textAlign: 'center',
              backgroundImage:
                'linear-gradient(90deg, rgba(5, 11, 20, 0.3) 0%, rgba(5, 11, 20, 0.3) 100% ), url(/patterns/dots_blue.png)',
              // backgroundSize: '190px',
              boxShadow: 'elevated',
              fontSize: 3,
            }}
            as="a"
            href="https://airtable.com/shrqNfrlrI6JT5XYP"
            target="_blank"
          >
            REGISTER
            <Text
              sx={{
                transform: 'translateY(-3.5px)',
                display: 'inline-block',
              }}
            >
              <Icon glyph="external" size={16} />
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  </div>
)
