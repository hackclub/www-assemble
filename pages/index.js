import { Box, Button, Container, Flex, Grid, Heading } from 'theme-ui'
import { useState, useEffect } from 'react'

export default function Index(props) {
  const [emoji, setEmoji] = useState('👾')
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
  return (
    <>
      <Flex>
        <Heading p={3} sx={{ flexGrow: 1 }}>
          {emoji} Assemble
        </Heading>
        <Heading
          bg="green"
          sx={{ display: 'flex', alignItems: 'center', color: 'white', px: 3 }}
        >
          Schedule
        </Heading>
        <Heading
          bg="blue"
          sx={{ display: 'flex', alignItems: 'center', color: 'white', px: 3 }}
        >
          FAQs
        </Heading>
        <Heading
          bg="red"
          sx={{ display: 'flex', alignItems: 'center', color: 'white', px: 3 }}
        >
          Apply
        </Heading>
      </Flex>
      <Box
        px={3}
        py={5}
        sx={{
          textAlign: 'center',
          background:
            'linear-gradient(rgba(0, 0, 20, 0.6), rgba(0, 0, 20, 0.6)), url(https://raptstudio.com/wp-content/uploads/2018/03/rapt-github-6777.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <Heading as="h1">This summer, we will</Heading>
        <Heading as="h1" sx={{ fontSize: 7 }}>
          Assemble
        </Heading>
        <Heading as="h2" mt={2}>
          in Github's SF HQ from June 14th to June 17th.
        </Heading>
      </Box>
      <Container my={4}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              bg: 'purple',
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
          </Box>
        </Grid>
      </Container>
      <Box bg="orange">
        <Container my={4} py={4}>
          <Heading mb={3} as="h1" sx={{ textAlign: 'center', color: 'white' }}>
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
                  sx={{ position: 'absolute', top: 0, px: 2, width: '100%' }}
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
                  sx={{ position: 'absolute', top: 0, px: 2, width: '100%' }}
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
                  sx={{ position: 'absolute', top: 0, px: 2, width: '100%' }}
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
      <Box bg="red" color="white" py={3}>
        <Container sx={{ textAlign: 'center' }}>Hack Club, 2022.</Container>
      </Box>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

          * {
            box-sizing: border-box;
          }

          .marquee {
            animation: scroll 7s linear 0s infinite;
            position: absolute;
            overflow: hidden;
            white-space: nowrap;
          }

          @keyframes scroll {
            0% {
              transform: translateX(100vw);
            }
            100% {
              transform: translateX(0vw);
            }
          }
        `}
      </style>
    </>
  )
}
