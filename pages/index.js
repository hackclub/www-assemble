import { Box } from 'theme-ui'
import DinoEasterEgg from '../components/dino-easter-egg'
import Footer from '../components/footer'
import Glossary from '../components/glossary'
import PreviouslySection from '../components/previously'
import ProjectSection from '../components/project'
import { Nav } from '../components/nav'
import { Letter } from '../components/letter'
import { Rundown } from '../components/rundown'

export default function Index() {
  return (
    <>
      <DinoEasterEgg />
      {true && <Nav /> }
      <Letter />
      {false && <ProjectSection />}
      <Rundown />
      {true && <Glossary />}
      {true && <PreviouslySection />}
      <Footer />
    </>
  )
}
