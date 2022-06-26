import { Box } from 'theme-ui'
import DinoEasterEgg from '../components/dino-easter-egg'
import Footer from '../components/footer'
import Glossary from '../components/glossary'
import PreviouslySection from '../components/previously'
import ProjectSection from '../components/project'
import { Nav } from '../components/nav'
import { Letter } from '../components/letter'
import { Rundown } from '../components/rundown'
import { Features } from '../components/features'
import { BetaWelcome } from '../components/beta-welcome'
import { useEffect } from 'react'

export default function Index() {
  useEffect(() => {
    console.log(` █████╗ ███████╗███████╗███████╗███╗   ███╗██████╗ ██╗     ███████╗
██╔══██╗██╔════╝██╔════╝██╔════╝████╗ ████║██╔══██╗██║     ██╔════╝
███████║███████╗███████╗█████╗  ██╔████╔██║██████╔╝██║     █████╗  
██╔══██║╚════██║╚════██║██╔══╝  ██║╚██╔╝██║██╔══██╗██║     ██╔══╝  
██║  ██║███████║███████║███████╗██║ ╚═╝ ██║██████╔╝███████╗███████╗
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚═════╝ ╚══════╝╚══════╝

Hey hacker! Register for Assemble at https://assemble.hackclub.com/register. We hope to see you there!`)
  }, [])
  return (
    <>
      <DinoEasterEgg />
      {true && <Nav />}
      {/* <BetaWelcome /> */}
      <Letter />
      {false && <ProjectSection />}
      <Features />
      {true && <Rundown />}
      {true && <Glossary />}
      {true && <PreviouslySection />}
      <Footer />
    </>
  )
}
