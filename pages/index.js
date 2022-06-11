import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
} from 'theme-ui'
import Icon from '@hackclub/icons'
import Parallax from '../components/Parallax'
import { Modal, ModalTitle, ModalContent } from '@mattjennings/react-modal'
import { Text } from 'theme-ui'
import NextLink from 'next/link'
import ComicImage from '../components/ComicImage'

export default function Index(props) {
  return (
    <Box
      sx={{
        background: 'white',
      }}
    >
      <Parallax background={true}></Parallax>
      <div
        style={{
          position: 'relative',
          zIndex: '100',
        }}
      >
        <Image
          src="/dinosaur-waving.png"
          sx={{
            position: 'fixed',
            bottom: -120,
            height: '240px',
            right: -45,
            zIndex: '200',
            cursor: 'pointer',
            transition: 'ease-in-out 0.3s',
            '&:hover': {
              bottom: '-80px',
            },
          }}
          onClick={() => window.open('mailto:assemble@hackclub.com', '_blank')}
        />
        <Flex style={{ background: 'white' }}>
          <Heading
            p={3}
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              backgroundImage:
                'linear-gradient(90deg, rgba(5, 11, 20, 0.7) 0%, rgba(5, 11, 20, 0.7) 100% ), url(patterns/black.png)',
              backgroundSize: '70px',
              color: 'white',
            }}
          >
            <img src="/textured-flag.png" height="30px" />
          </Heading>
          <Heading
            sx={{
              backgroundImage:
                'linear-gradient(90deg, rgba(5, 11, 20, 0.3) 0%, rgba(5, 11, 20, 0.3) 100% ), url(/patterns/green.png)',
              textShadow: 'elevated',
              backgroundSize: '190px',
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              px: 3,
              pt: 1,
            }}
          >
            Schedule
          </Heading>
          <Heading
            bg="blue"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              px: 3,
              backgroundImage: ' url(patterns/blue.png)',
              textShadow: 'elevated',
              backgroundSize: '40px',
              pt: 1,
            }}
          >
            FAQs
          </Heading>
          <NextLink href="/register">
            <Heading
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                px: 3,
                backgroundImage: ' url(patterns/red.png)',
                textShadow: 'elevated',
                backgroundSize: '50px',
                pt: 1,
              }}
            >
              Register
            </Heading>
          </NextLink>
        </Flex>
        <Box
          px={3}
          py={5}
          sx={{
            textAlign: 'center',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            position: 'relative',
            height: '400px',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              zIndex: 1,
              top: 0,
              left: 0,
              height: '400px',
              width: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage:
                'linear-gradient(90deg, rgba(5, 11, 20, 0.6) 0%, rgba(5, 11, 20, 0.5) 100% )',
            }}
          >
            <Box>
              <Heading as="h1" sx={{ textShadow: 'elevated' }}>
                Calling all hackers, makers, builders, painters...
              </Heading>
              <Heading as="h1" sx={{ fontSize: 9 }} className="comicHeader">
                ASSEMBLE!
              </Heading>
              <Heading as="h1" mt={2} sx={{ textShadow: 'elevated' }}>
                in San Francisco from June 14th to June 17th.
              </Heading>
            </Box>
          </Box>
          {/* <Box
          as="video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://cloud-r135419pm.vercel.app/screenshot_2020-08-30_at_9.17.45_am.png"
          duration={2000}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 'auto !important',
            width: '100vw !important',
            zIndex: -1
          }}
        >
          <source src="https://stream.mux.com/dTJ01wpc7pKN84IZXzP02LipW6t00tr01U00sQJX00wuGSriE" />
        </Box> */}
        </Box>
        <div
          style={{
            backgroundImage: 'url(patterns/white.png)',
            backgroundSize: '50px',
          }}
        >
          <Container mb={4} pt={4}>
            <Grid columns={2}>
              <Box sx={{gridColumn: '1 / 3'}}>
                <Heading mb={3} as="h1">
                  Let's Get The Band Back Together
                </Heading>
                <Box
                  sx={{
                    p: 1,
                    backgroundImage:
                      'linear-gradient(90deg, rgba(5, 11, 20, 0.3) 0%, rgba(5, 11, 20, 0.3) 100% ), url(patterns/blue.png)',
                    backgroundSize: '50px',
                    color: 'white',
                  }}
                >
                  <Box
                    sx={{
                      border: '2px dashed',
                      borderColor: 'white',
                      p: 3,
                    }}
                  >
                    Hackathons are a hard to understand concept if you haven’t
                    been to one before– let’s make it easier! Hackathons are a
                    place to{' '}
                    <Link
                      sx={{ color: 'white', textDecoration: 'underline' }}
                      target="_blank,  "
                      href="https://www.youtube.com/watch?v=45cYwDMibGo"
                    >
                      come together
                    </Link>{' '}
                    and team up with others to combine your powers. You'll team
                    up with co-conspirators, meet new friends, learn something
                    technical and do something you never thought you could.
                    <br />
                    <br />
                    Hackathons have always been a special part of Hack Club and
                    as we enter into the <i>new normal</i>, we want to reignite
                    the spirit of hackathons and create a new generation of
                    magical hackathons. That all starts with Assemble.
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage: 'url(/flagship.jpg)',
                  backgroundSize: 'cover',
                  border: '8px solid black',
                  position: 'relative',
                  textTransform: 'uppercase',
                  height: '400px'
                }}
              >
                <Box
                  sx={{
                    bg: '#000',
                    p: 2,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    pb: 0,
                    pr: 3,
                    color: 'white',
                    fontFamily: 'heading',
                  }}
                >
                  The last time we were in San Francisco (Flagship, 2019)...
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage: 'url(/flagship2.jpg)',
                  backgroundSize: 'cover',
                  border: '8px solid black',
                  position: 'relative',
                  textTransform: 'uppercase',
                }}
              >
                <Box
                  sx={{
                    bg: '#000',
                    p: 2,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    pb: 0,
                    pl: 3,
                    color: 'white',
                    fontFamily: 'heading',
                  }}
                >
                  ...was incredibly enriching.
                </Box>
              </Box>
              {
             /* <Box
                sx={{
                  p: 1,
                  backgroundImage:
                    'linear-gradient(90deg, rgba(5, 11, 20, 0.3) 0%, rgba(5, 11, 20, 0.3) 100% ), url(/patterns/green.png)',
                  backgroundSize: '190px',
                  color: 'white',
                }}
              >
                <Box
                  sx={{
                    border: '2px dashed',
                    borderColor: 'white',
                    p: 3,
                  }}
                >
                  You can expect the traditional Hack Club antics (but no
                  surprises whatsoever 😉) and more. We may even see the return
                  of the gorilla! Of course, we will have great food, awesome
                  people and corgi-approved swag.
                  <br /> <br />
                  Assemble isn’t taking place in a vacuum, however. We’ll be
                  hosted at Figma’s spectacular headquarters! It’s situated on
                  Market St and is at the heart of SF. We’ll be running tours
                  around San Francisco and collaborating with local tech
                  companies to allow you to experience the city.
                  <br /> <br />
                  So, what’d you say? All are welcome at Assemble and we'd love
                  to meet you!
                </Box>
              </Box>
             <Box
                sx={{
                  p: 1,
                  backgroundSize: '30px',
                  backgroundImage:
                    'linear-gradient(90deg, rgba(5, 11, 20, 0.07) 0%, rgba(5, 11, 20, 0.07) 100% ), url(/patterns/white.png)',
                  color: 'black',
                  border: '3px solid #FF544A',
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: 'flex',
                  }}
                >
                  <Box>
                    <Heading
                      as="h3"
                      mb={1}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        ml: '-2px',
                      }}
                    >
                      <Icon glyph="rep" size={32} />
                      Endless Fun
                    </Heading>
                    We guarantee you'll never want to sleep, the fun will
                    out-weight the sleep deprivation even after 50 hours! What
                    more can we say?
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1,
                  backgroundSize: '30px',
                  backgroundImage:
                    'linear-gradient(90deg, rgba(5, 11, 20, 0.07) 0%, rgba(5, 11, 20, 0.07) 100% ), url(/patterns/white.png)',
                  color: 'black',
                  border: '3px solid #FF544A',
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: 'flex',
                  }}
                >
                  <Box>
                    <Heading
                      as="h3"
                      mb={1}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        ml: '-2px',
                      }}
                    >
                      <Icon glyph="admin" size={32} />
                      Awesome People
                    </Heading>
                    Expect CEOs & awesome programmers casually strolling around
                    the venue to have a chat or to help with your hack.
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1,
                  backgroundSize: '30px',
                  backgroundImage:
                    'linear-gradient(90deg, rgba(5, 11, 20, 0.07) 0%, rgba(5, 11, 20, 0.07) 100% ), url(/patterns/white.png)',
                  color: 'black',
                  border: '3px solid #FF544A',
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: 'flex',
                  }}
                >
                  <Box>
                    <Heading
                      as="h3"
                      mb={1}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        ml: '-2px',
                      }}
                    >
                      <Icon glyph="welcome" size={32} />
                      Everyone's Welcome
                    </Heading>
                    Hack Clubbers & non-Hack Clubbers are all invited. We'll
                    also have resources and workshops for beginners. If you're
                    curious, come along and give it a shot, we promise you'll
                    have a good time!
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1,
                  backgroundSize: '30px',
                  backgroundImage:
                    'linear-gradient(90deg, rgba(5, 11, 20, 0.07) 0%, rgba(5, 11, 20, 0.07) 100% ), url(/patterns/white.png)',
                  color: 'black',
                  border: '3px solid #FF544A',
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    display: 'flex',
                    gap: '8px',
                    backgroundSize: '30px',
                    backgroundImage:
                      'linear-gradient(90deg, rgba(5, 11, 20, 0.07) 0%, rgba(5, 11, 20, 0.07) 100% ), url(/patterns/white.png)',
                    color: 'black',
                  }}
                >
                  <Box>
                    <Heading
                      as="h3"
                      mb={1}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        ml: '-2px',
                      }}
                    >
                      <Icon glyph="shirt-fill" size={32} />
                      Goodies Galore
                    </Heading>
                    When it comes to swag and prizes, you'll feel like a kid in
                    the candy story. Of course, you'll be able to pick up a full
                    collection of Hack Club's infamous stickers but we'll also
                    have special swag and prizes!
                  </Box>
                </Box>
              </Box> */}
              <Box
                sx={{
                  p: 1,
                  bg: 'sunken',
                  color: 'black',
                  gridColumn: '1 / 3',
                  textAlign: 'center',
                  backgroundSize: '30px',
                  backgroundImage:
                    'linear-gradient(90deg, rgba(5, 11, 20, 0.07) 0%, rgba(5, 11, 20, 0.07) 100% ), url(/patterns/white.png)',
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
                      mb={1}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        ml: '-2px',
                        margin: 'auto',
                        width: 'fit-content',
                      }}
                    >
                      <Box sx={{ color: '#FF544A', pt: '1px' }}>
                        <Icon glyph="like-fill" size={32} />
                      </Box>
                      Everything Open Sourced
                    </Heading>
                    IRL high school hackathons are yet to make their return in
                    the <i>new normal</i>, together we want to change this. All
                    of Assemble will be replicable and by the end of this
                    hackathon we'll create the README for starting your own IRL
                    high school hackathon.
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Container>
          <Box
            sx={{
              backgroundImage: 'url(patterns/red.png)',
              backgroundSize: '100px',
            }}
          >
            <Container py={4}>
              <Heading
                mb={3}
                as="h1"
                sx={{ textAlign: 'center', color: 'white' }}
              >
                The Rundown & Registration
              </Heading>
              <Grid>
                <Box bg="white" p={3}>
                  <b>Date & Time:</b> starts at 6:00pm on July 29th and ends at
                  2:00pm on June 31st.
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
                  <b>Travel Stipends:</b> we're offering a limited number of
                  $500 stipends to cover travel expenses. If you need support
                  with your travel stipend, please indicate this on your
                  registration form and we will consider you for a travel
                  stipend.
                </Box>
                <Box bg="white" p={3}>
                  <b>Eligibility:</b> all high-school & upper-middle-school aged
                  students are welcome to come! You don't have to be a member of
                  the Hack Club community or a Hack Club leader.
                </Box>
                <Box bg="white" p={3}>
                  <b>COVID-19:</b> we'll be providing all participants with N95
                  masks and rapid tests. We'll also be performing anonymous
                  contact tracing and supporting any participant who tests
                  positive with isolation.
                </Box>
                <Box
                  p={3}
                  sx={{
                    color: 'white',
                    fontWeight: 800,
                    textAlign: 'center',
                    backgroundImage:
                'linear-gradient(90deg, rgba(5, 11, 20, 0.3) 0%, rgba(5, 11, 20, 0.3) 100% ), url(/patterns/green.png)',
              backgroundSize: '190px',
                    boxShadow: 'elevated',
                    fontSize: 3,
                  }}
                >
                  <u>Register</u>
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
          <Box
            sx={{
              display: 'none',
              backgroundImage:
                'linear-gradient(90deg, rgba(5, 11, 20, 0.3) 0%, rgba(5, 11, 20, 0.3) 100% ), url(/patterns/green.png)',
              backgroundSize: '190px',
            }}
          >
            <Container py={4}>
              <Heading
                mb={3}
                as="h1"
                sx={{ textAlign: 'center', color: 'white' }}
              >
                The Schedule*
              </Heading>
              <Box>
                <Grid columns={3} gap={0}>
                  <Box sx={{ position: 'relative', height: '960px' }}>
                    <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
                      {[...Array(24).keys()].map(_ => (
                        <Box
                          sx={{
                            height: '40px',
                            borderTop: '1px solid',
                            borderColor: 'rgba(255, 255, 255, 0.6)',
                          }}
                        />
                      ))}
                      <Box
                        sx={{
                          height: '0px',
                          borderTop: '1px solid',
                          borderColor: 'rgba(255, 255, 255, 0.6)',
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        px: 2,
                        width: '100%',
                      }}
                    >
                      <Box
                        p={2}
                        mt={'2px'}
                        sx={{
                          height: '356px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          color: 'white',
                          backgroundSize: '50px',
                          backgroundImage:
                            'linear-gradient(90deg, rgba(5, 11, 20, 0.7) 0%, rgba(5, 11, 20, 0.7) 100% ), url(patterns/black.png)',
                        }}
                      >
                        ✈️ Traveling into SF
                      </Box>
                      <Box bg="white" px={2} mt={'4px'} sx={{ height: '316px', border: '3px solid #5bc0de', py: 3}}>
                        <b>🌉 Pre-Event Exploration</b> <br />
                        As hackers trickle into the city, we'll offer early
                        arrivers activities to do within the city. Some of the
                        activities on offer will be neighborhood tours, office
                        visits and hikes. These are all optional.
                      </Box>
                      <Box
                        bg="white"
                        px={2}
                        mt={'4px'}
                        sx={{
                          height: '36px',
                          fontWeight: 800,
                          border: '3px solid #33d6a6',
                          display: 'flex',
                          alignItems: 'center',
                          pt: 1,
                        }}
                      >
                        👋 Check-in Opens @ Figma HQ
                      </Box>
                      <Box
                        bg="white"
                        px={2}
                        mt={'4px'}
                        sx={{
                          height: '36px',
                          fontWeight: 800,
                          border: '3px solid #33d6a6',
                          display: 'flex',
                          alignItems: 'center',
                          pt: 1,
                        }}
                      >
                        📽️ Opening Ceremony
                      </Box>
                      <Box
                        bg="white"
                        px={2}
                        mt={'4px'}
                        sx={{
                          height: '36px',
                          fontWeight: 800,
                          border: '3px solid #ff8c37',
                          display: 'flex',
                          alignItems: 'center',
                          pt: 1,
                        }}
                      >
                        🍝 Dinner
                      </Box>
                      <Box bg="white" px={2} mt={'4px'} sx={{ height: '156px', border: '3px solid #5bc0de', py: 3}}>
                        <b>🕺 Evening Activities & Workshops</b> <br />
                        We’ll have a mixture of starter workshops and fun
                        activities to kick off the evening.
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ position: 'relative', height: '960px' }}>
                    <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
                      {[...Array(24).keys()].map(_ => (
                        <Box
                          sx={{
                            height: '40px',
                            borderTop: '1px solid',
                            borderColor: 'rgba(255, 255, 255, 0.6)',
                          }}
                        />
                      ))}
                      <Box
                        sx={{
                          height: '0px',
                          borderTop: '1px solid',
                          borderColor: 'rgba(255, 255, 255, 0.6)',
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        px: 2,
                        width: '100%',
                      }}
                    >
                      <Box bg="white" px={2} mt={'4px'} sx={{ height: '276px', border: '3px solid #5bc0de', py: 3}}>
                        <b>💤 Midnight Activities & Quiet Time</b>
                        <br />
                        As the night winds down, we'll provide spaces for quiet
                        hacking and rest. For hackers still full of energy,
                        we'll have all sorts of midnight activities (including a
                        murder mystery and a Kahoot).
                      </Box>
                      <Box
                        bg="white"
                        px={2}
                        mt={'4px'}
                        sx={{
                          height: '36px',
                          fontWeight: 800,
                          border: '3px solid #ff8c37',
                          display: 'flex',
                          alignItems: 'center',
                          pt: 1,
                        }}
                      >
                        🧇 Breakfast
                      </Box>
                      <Box bg="white" px={2} mt={'4px'} sx={{ height: '396px', border: '3px solid #5bc0de', py: 3}}>
                        <b>🎉 Hacking, Workshops & Activities</b> <br />
                        After a hearty breakfast, we'll hit the road running
                        with more hacking and exciting activities. We'll also
                        have lunch in this time!
                      </Box>
                      <Box
                        bg="white"
                        px={2}
                        mt={'4px'}
                        sx={{
                          height: '36px',
                          fontWeight: 800,
                          border: '3px solid #ff8c37',
                          display: 'flex',
                          alignItems: 'center',
                          pt: 1,
                        }}
                      >
                        🌯 Dinner
                      </Box>
                      <Box bg="white" px={2} mt={'4px'} sx={{ height: '196px', border: '3px solid #5bc0de', py: 3}}>
                        <b>🌔 Evening Activities</b>
                        <br />
                        Just before everyone starts rushing their projects,
                        we'll let some energy out with some optional social
                        activities.
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ position: 'relative', height: '960px' }}>
                    <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
                      {[...Array(24).keys()].map(_ => (
                        <Box
                          sx={{
                            height: '40px',
                            borderTop: '1px solid',
                            borderColor: 'rgba(255, 255, 255, 0.6)',
                          }}
                        />
                      ))}
                      <Box
                        sx={{
                          height: '0px',
                          borderTop: '1px solid',
                          borderColor: 'rgba(255, 255, 255, 0.6)',
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        px: 2,
                        width: '100%',
                      }}
                    >
                      <Box bg="white" px={2} mt={'4px'} sx={{ height: '276px', border: '3px solid #a633d6', py: 3}}>
                        <b>💻 Last Minute Hacking</b>
                        <br />
                        Code. Code. Code! Expect everybody to be putting the
                        finishing touches on their project or if they're lucky
                        getting some sleep.
                      </Box>
                      <Box
                        bg="white"
                        px={2}
                        mt={'4px'}
                        sx={{
                          height: '36px',
                          fontWeight: 800,
                          border: '3px solid #ff8c37',
                          display: 'flex',
                          alignItems: 'center',
                          pt: 1,
                        }}
                      >
                        🥞 Breakfast
                      </Box>
                      <Box
                        bg="white" px={2} mt={'4px'} sx={{ height: '156px', border: '3px solid #a633d6', py: 3}}
                      >
                        <b>📼 Project Showcase</b> <br />
                        We'll have an exhibition where hackers can wander around
                        to check out / judge each others projects.
                      </Box>
                      <Box
                        bg="white" px={2} mt={'4px'} sx={{ height: '36px', border: '3px solid #33d6a6', pt: '6px', fontWeight: 800}}
                      >
                        🤫 Closing Ceremony
                      </Box>
                      <Box
                        bg="white" px={2} mt={'4px'} sx={{ height: '36px', border: '3px solid #ff8c37', pt: '6px', fontWeight: 800}}
                      >
                        😥 Farewell Lunch
                      </Box>
                      <Box bg="white" px={2} mt={'4px'} sx={{ height: '276px', border: '3px solid #5bc0de', py: 3}}>
                        <b>🧭 Post-Event Exploration</b>
                        <br />
                        This will be similar to the pre-event exploration
                        just for those with late flights! It'll be a chance to
                        hang out with new friends made at the hackathon before
                        parting ways :(
                      </Box>
                      <Box
                        p={2}
                        mt={'4px'}
                        sx={{
                          height: '116px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          color: 'white',
                          backgroundSize: '50px',
                          backgroundImage:
                            'linear-gradient(90deg, rgba(5, 11, 20, 0.7) 0%, rgba(5, 11, 20, 0.7) 100% ), url(patterns/black.png)',
                        }}
                      >
                        👋 Goodbye!
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Box>
            </Container>
          </Box>
        </div>
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
        <Box
          sx={{
            backgroundImage: 'linear-gradient(90deg, rgba(5, 11, 20, 0.9) 0%, rgba(5, 11, 20, 0.9) 100% ), url(patterns/red.png)',
            backgroundSize: '150px',
          }}
          color="white"
          py={3}
        >
          <Container
            sx={{
              textAlign: 'center',
              '> a': {
                color: 'white',
                textDecoration: 'underline',
              },
            }}
          >
            <Box my={1} mb={1} sx={{ fontWeight: 800 }}>
              Hack Club HQ
            </Box>
            <Link href="https://hackclub.com">Home</Link> |{' '}
            <Link href="https://hackclub.com/slack">Slack</Link> |{' '}
            <Link href="https://workshops.hackclub.com">Workshops</Link> |{' '}
            <Link href="https://scrapbook.hackclub.com">Scrapbook</Link>
          </Container>
        </Box>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&family=Luckiest+Guy&display=swap');
          @font-face {
            font-family: 'Comic Helvetic';
            src: url('ComicHelvetic-Light.woff2') format('woff2'),
                url('ComicHelvetic-Light.woff') format('woff');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'Comic Helvetic';
            src: url('ComicHelvetic-Medium.woff2') format('woff2'),
                url('ComicHelvetic-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
        }
        
        @font-face {
            font-family: 'Comic Helvetic';
            src: url('ComicHelvetic-Heavy.woff2') format('woff2'),
                url('ComicHelvetic-Heavy.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
        }
        
        
          * {
            box-sizing: border-box;
          }
          b {
            font-weight: 700
          }
          .comicHeader {
            color: #fcd1cf;
            font-family: 'Luckiest Guy';
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transform: translateY(22px);
            letter-spacing: 12px;
            text-shadow:   0px -2px 0 #212121,  
                           0px -2px 0 #212121,
                           0px  6px 0 #212121,
                           0px  6px 0 #212121,
                          -6px  0px 0 #212121,  
                           6px  0px 0 #212121,
                          -6px  0px 0 #212121,
                           6px  0px 0 #212121,
                          -6px -6px 0 #212121,  
                           6px -6px 0 #212121,
                          -6px  6px 0 #212121,
                           6px  6px 0 #212121,
                          -6px  18px 0 #212121,
                           0px  18px 0 #212121,
                           6px  18px 0 #212121,
                           0 19px 1px rgba(0,0,0,.1),
                           0 0 6px rgba(0,0,0,.1),
                           0 6px 3px rgba(0,0,0,.3),
                           0 12px 6px rgba(0,0,0,.2),
                           0 18px 18px rgba(0,0,0,.25),
                           0 24px 24px rgba(0,0,0,.2),
                           0 36px 36px rgba(0,0,0,.15);
          }
          .smallComicHeader {
            color: #fa6f66;
            font-family: 'Luckiest Guy';
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transform: translateY(6px);
            letter-spacing: 4px;
            text-shadow:   0px -2px 0 #212121,  
                           0px -2px 0 #212121,
                           0px  2px 0 #212121,
                           0px  2px 0 #212121,
                          -2px  0px 0 #212121,  
                           2px  0px 0 #212121,
                          -2px  0px 0 #212121,
                           2px  0px 0 #212121,
                          -2px -2px 0 #212121,  
                           2px -2px 0 #212121,
                          -2px  2px 0 #212121,
                           2px  2px 0 #212121,
                          -2px  4px 0 #212121,
                           0px  4px 0 #212121,
                           2px  4px 0 #212121,
                           0 19px 1px rgba(0,0,0,.1),
                           0 0 6px rgba(0,0,0,.1),
                           0 6px 3px rgba(0,0,0,.3),
                           0 12px 6px rgba(0,0,0,.2),
                           0 18px 18px rgba(0,0,0,.25),
                           0 24px 24px rgba(0,0,0,.2),
                           0 36px 36px rgba(0,0,0,.15);
          }
        `}
      </style>
    </Box>
  )
}
