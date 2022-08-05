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
import { useEffect, useState } from 'react'
import Registration, { cache, registrants } from '../components/registration'

export default function Index() {
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    console.log(` █████╗ ███████╗███████╗███████╗███╗   ███╗██████╗ ██╗     ███████╗
██╔══██╗██╔════╝██╔════╝██╔════╝████╗ ████║██╔══██╗██║     ██╔════╝
███████║███████╗███████╗█████╗  ██╔████╔██║██████╔╝██║     █████╗  
██╔══██║╚════██║╚════██║██╔══╝  ██║╚██╔╝██║██╔══██╗██║     ██╔══╝  
██║  ██║███████║███████║███████╗██║ ╚═╝ ██║██████╔╝███████╗███████╗
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚═════╝ ╚══════╝╚══════╝

Hey hacker! Register for Assemble at https://assemble.hackclub.com/register. We hope to see you there!`);
    if (!window.enableValidation) {
      setTimeout(() => {
        cache(registrants);
      }, 8000);
      let input = ``;
      window.enableValidation = true;
      window.onkeydown = async event => {
        input += event.key.toLowerCase();
        if (!input.endsWith('0') && !input.endsWith('d')) return;

        const { success } = await fetch('/api/validation', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ input })
        }).then(res => res.json());

        if (success) setShowRegistration(true);
      }
    }
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
      {showRegistration && <Registration />}
    </>
  )
}
