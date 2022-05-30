import { Box, Button, Container, Flex, Grid, Heading, Image } from 'theme-ui'
import { useState, useEffect, useRef } from 'react'
import Icon from '@hackclub/icons'
import Parallax from '../components/Parallax'
import Link from 'next/link'

import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from '@mattjennings/react-modal'
import { Text } from 'theme-ui'

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
        <Letter open={letter} onClose={() => setLetter(false)} />
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
            display: letter ? 'none' : 'block',
            '&:hover': {
              bottom: '-80px',
            },
          }}
          onClick={() => setLetter(true)}
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
          <Link href="/register">
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
          </Link>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundImage:
                    'url(https://pbs.twimg.com/media/E85jl4uUcAM7O63?format=jpg&name=large)',
                  backgroundSize: 'cover',
                }}
              ></Box>
              <Box
                sx={{
                  backgroundImage:
                    'url(https://pbs.twimg.com/media/E85jl4uUcAM7O63?format=jpg&name=large)',
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{' '}
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
                      <Icon glyph="food" size={32} />
                      Fabulous Food
                    </Heading>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{' '}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{' '}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{' '}
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
                  Date & Time: starts at 6:00pm on June 2nd and ends at 12pm on
                  June 4th.
                </Box>
                <Box bg="white" p={3}>
                  Venue: TBD
                </Box>
                <Box bg="white" p={3}>
                  Travel Grants: TBD
                </Box>
                <Box bg="white" p={3}>
                  Eligibility: TBD
                </Box>
                <Box
                  bg="blue"
                  p={3}
                  sx={{ color: 'white', fontWeight: 800, textAlign: 'center', fontSize: 3 }}
                >
                  <u>Register</u>
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
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '316px' }}>
                        Pre-Hackathon San Francisco Exploration
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '36px' }}>
                        Check-in Opens @ GitHub HQ
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '36px' }}>
                        Opening Ceremony
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '36px' }}>
                        Dinner
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '156px' }}>
                        Evening Activities & Workshops
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
                      <Box bg="white" p={2} mt={'2px'} sx={{ height: '276px' }}>
                        Late Night Hacking / Down Time / Midnight Activities
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '76px' }}>
                        Breakfast
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '356px' }}>
                        Hacking, Workshops & Activities
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '36px' }}>
                        Dinner
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '196px' }}>
                        Evening Activities & Workshops
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
                      <Box bg="white" p={2} mt={'2px'} sx={{ height: '276px' }}>
                        Last Minute Hacking
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '76px' }}>
                        Breakfast
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '76px' }}>
                        Project Showcase
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '36px' }}>
                        Closing Ceremony
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '36px' }}>
                        Lunch
                      </Box>
                      <Box bg="white" p={2} mt={'4px'} sx={{ height: '316px' }}>
                        Post-Hackathon San Francisco Exploration
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
                Pre-Hackathon San Francisco Exploration
              </Box>
              <Box bg="white" p={3}>
                Pre-Hackathon San Francisco Exploration
              </Box>
            </Grid>
          </Container>
        </Box>
        <Box bg="red" color="white" py={3}>
          <Container sx={{ textAlign: 'center' }}>
            <Box my={1} mb={1} sx={{ fontWeight: 800 }}>
              Hack Club HQ
            </Box>
            Home | Slack | Workshops | Scrapbook
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
