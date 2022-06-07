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
import { useState, useEffect, useRef } from 'react'
import Icon from '@hackclub/icons'
import Parallax from '../components/Parallax'
import {
  Modal,
  ModalTitle,
  ModalContent,
} from '@mattjennings/react-modal'
import { Text } from 'theme-ui'
import NextLink from 'next/link'
import ComicImage from '../components/ComicImage'

function Letter(props) {
  return (
    <Modal
      {...props}
      sx={{
        padding: 3,
        width: '90vw',
        bg: '#e8e0cc',
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/beige-paper.png")',
        // border: ['none', null, null, '1px dashed black'],
        borderRadius: ['0px', null, null, 6],
        color: '#222',
        mx: 0,
        boxShadow: 'card',
        p: [4, 5],
      }}
    >
      {({ onClose }) => (
        <>
          <ModalTitle>
            <Text
              sx={{
                fontSize: 2,
                fontWeight: 'medium',
              }}
            >
              Hello!
            </Text>
          </ModalTitle>
          <ModalContent
            style={{
              overflow: 'auto',
            }}
          >
            <Text>This is a letter.</Text>
          </ModalContent>
          <Button
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: -10,
              right: -10,
              borderRadius: '999px',
              height: '42px',
              width: '42px',
              bg: 'red',
              color: 'white',
            }}
          >
            <Text
              sx={{
                transform: 'scale(2) rotate(45deg)',
                display: 'inline-block',
              }}
            >
              +
            </Text>
          </Button>
        </>
      )}
    </Modal>
  )
}

export default function Index(props) {
  /*
  const [emoji, setEmoji] = useState('👾')
  const [stage, setStage] = useState(0)
  const [letter, setLetter] = useState(false)
  const [commandLength, setCommandLength] = useState(0)
  const commandLengthRef = useRef()
  const command = `assemble()`
  commandLengthRef.current = commandLength
  useEffect(() => {
    let emojiArray = ['👾', '💻', '🖥', '🎒', '🤯', '🖲', '📀', '💾', '🎮']
    const interval = setInterval(
      () => setEmoji(emojiArray[Math.floor(Math.random() * emojiArray.length)]),
      5000,
    )
    return () => {
      clearInterval(interval)
    }
  }, [])
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStage(1)
      const interval = setInterval(() => {
        setCommandLength(commandLengthRef.current + 1)
      }, 2500 / command.length)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStage(2)
    }, 3200)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  /*
  if (stage == 0) {
    return (
      <Box
        className={styles.crt}
        sx={{
          bg: 'dark',
          color: 'green',
          height: '100vh',
          fontFamily: 'monospace',
          fontWeight: 800,
          fontSize: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pb: 6
        }}
      >
        <h2>BOOTING...</h2>
      </Box>
    )
  }
  if (stage == 1) {
    return (
      <Box
        className={styles.crt}
        sx={{ bg: 'dark', color: 'green', height: '100vh', p: 3 }}
      >
        {'>'} {command.slice(0, commandLength)}
      </Box>
    )
  } */
  return (
    <>
      <Parallax background={true}></Parallax>
      <div
        style={{
          position: 'relative',
          zIndex: '100',
        }}
      >
        {/*<Letter open={letter} onClose={() => setLetter(false)} />*/}
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
            // display: letter ? 'none' : 'block',
            '&:hover': {
              bottom: '-80px',
            },
          }}
          onClick={() => window.open('mailto:assemble@hackclub.com','_blank')}
        />
        <Flex style={{ background: 'white' }}>
          <Heading
            p={3}
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              bg: 'darker',
              color: 'white',
            }}
          >
            Hack Club Assemble
          </Heading>
          <Heading
            bg="green"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              px: 3,
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
            }}
          >
            FAQs
          </Heading>
          <NextLink href="/register">
            <Heading
              bg="red"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                px: 3,
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
              <Heading as="h1">This summer, we will</Heading>
              <Heading as="h1" sx={{ fontSize: 8 }}>
                Assemble
              </Heading>
              <Heading as="h1" mt={2}>
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
        <div style={{ background: 'white' }}>
          <Container mb={4} pt={4}>
            <Grid columns={2}>
              <Box>
                <Heading mb={3} as="h1">
                  A Hackathon For The Ages
                </Heading>
                <Box
                  sx={{
                    p: 1,
                    bg: 'blue',
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
                    Hackathons have always been a special part of Hack Club and
                    as we enter into the new normal, we want to reignite the
                    spirit of hackathons and create a new generation of magical
                    hackathons. That all starts with Assemble.
                    <br />
                    <br />
                    Assemble embraces every word of the Hack Club Philosophy. We
                    believe we're at our best when where making so we'll cut the
                    BS and let you get straight into coding. But we also see
                    making as a social and joyful process so don't expect to be
                    bored!
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage: 'url(/flagship.jpg)',
                  backgroundSize: 'cover',
                }}
              ></Box>
              <Box
                sx={{
                  backgroundImage: 'url(/flagship2.jpg)',
                  backgroundSize: 'cover',
                }}
              ></Box>
              <Box
                sx={{
                  p: 1,
                  bg: 'green',
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
                  bg: 'sunken',
                  color: 'black',
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
                  bg: 'sunken',
                  color: 'black',
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
                  bg: 'sunken',
                  color: 'black',
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
                  bg: 'sunken',
                  color: 'black',
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
              </Box>
            </Grid>
          </Container>
          <Box bg="red">
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
                  12:00pm on June 31st.
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
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
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
                <Box
                  bg="blue"
                  p={3}
                  sx={{
                    color: 'white',
                    fontWeight: 800,
                    textAlign: 'center',
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
          <Box bg="green">
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
                        bg="text"
                        p={2}
                        mt={'2px'}
                        sx={{
                          height: '356px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          color: 'white',
                        }}
                      >
                        ✈️ Traveling into SF
                      </Box>
                      <Box bg="white" p={3} mt={'4px'} sx={{ height: '316px' }}>
                        <b> Pre-Hackathon San Francisco Exploration</b> <br />
                        As hackers trickle into the city, we'll offer early
                        arrivers activities to do within the city. Some of the
                        activities on offer will be neighborhood tours, office
                        visits and hikes. These are all optional.
                      </Box>
                      <Box
                        bg="white"
                        py={2}
                        px={3}
                        mt={'4px'}
                        sx={{ height: '36px', fontWeight: 800 }}
                      >
                        Check-in Opens @ Figma HQ
                      </Box>
                      <Box
                        bg="white"
                        py={2}
                        px={3}
                        mt={'4px'}
                        sx={{ height: '36px', fontWeight: 800 }}
                      >
                        Opening Ceremony
                      </Box>
                      <Box
                        bg="white"
                        py={2}
                        px={3}
                        mt={'4px'}
                        sx={{ height: '36px', fontWeight: 800 }}
                      >
                        Dinner
                      </Box>
                      <Box bg="white" p={3} mt={'4px'} sx={{ height: '156px' }}>
                        <b>Evening Activities & Workshops</b> <br />
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
                      <Box bg="white" p={3} mt={'2px'} sx={{ height: '276px' }}>
                        <b>
                          Late Night Hacking / Down Time / Midnight Activities
                        </b>
                        <br />
                        As the night winds down, we'll provide spaces for quiet
                        hacking and rest. For hackers still ful; of energy,
                        we'll have all sorts of midnight activities (including a murder mystery
                        and a Kahoot).
                      </Box>
                      <Box
                        bg="white"
                        py={2}
                        px={3}
                        mt={'4px'}
                        sx={{ height: '76px', fontWeight: 800 }}
                      >
                        Breakfast
                      </Box>
                      <Box bg="white" p={3} mt={'4px'} sx={{ height: '356px' }}>
                        <b>Hacking, Workshops & Activities</b> <br />
                        After a hearty breakfast, we'll hit the road running
                        with more hacking and exciting activities. We'll also
                        have lunch in this time!
                      </Box>
                      <Box
                        bg="white"
                        py={2}
                        px={3}
                        mt={'4px'}
                        sx={{ height: '36px', fontWeight: 800 }}
                      >
                        Dinner
                      </Box>
                      <Box bg="white" p={3} mt={'4px'} sx={{ height: '196px' }}>
                        <b>Evening Activities</b>
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
                      <Box bg="white" p={3} mt={'2px'} sx={{ height: '276px' }}>
                        <b>Last Minute Hacking</b>
                        <br />
                        Code. Code. Code! Expect everybody to be putting the
                        finishing touches on their project or if they're lucky
                        getting some sleep.
                      </Box>
                      <Box
                        bg="white"
                        p={2}
                        px={3}
                        mt={'4px'}
                        sx={{ height: '36px', fontWeight: 800 }}
                      >
                        Breakfast
                      </Box>
                      <Box
                        bg="white"
                        p={3}
                        py={2}
                        mt={'4px'}
                        sx={{ height: '116px' }}
                      >
                        <b>Project Showcase</b> <br />
                        We'll have an exhibition where hackers can wander around
                        to check out / judge each others projects.
                      </Box>
                      <Box
                        bg="white"
                        p={2}
                        px={3}
                        mt={'4px'}
                        sx={{ height: '36px', fontWeight: 800 }}
                      >
                        Closing Ceremony
                      </Box>
                      <Box
                        bg="white"
                        p={2}
                        px={3}
                        mt={'4px'}
                        sx={{ height: '36px', fontWeight: 800 }}
                      >
                        Farewell Lunch
                      </Box>
                      <Box bg="white" p={3} mt={'4px'} sx={{ height: '316px' }}>
                        <b>Post-Hackathon San Francisco Exploration</b>
                        <br />
                        This will be similar to the pre-hackathon exploration
                        just for those with late flights! It'll be a chance to
                        hang out with new friends made at the hackathon before
                        parting ways!
                      </Box>
                      <Box
                        bg="text"
                        p={2}
                        mt={'4px'}
                        sx={{
                          height: '116px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 800,
                          color: 'white',
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
        <Box bg="blue">
          <Container py={4}>
            <Heading
              mb={3}
              as="h1"
              sx={{ textAlign: 'center', color: 'white' }}
            >
              Frequently Asked Questions
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
            </Grid>
          </Container>
        </Box>
        <Box bg="red" color="white" py={3}>
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
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  )
}
