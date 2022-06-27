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
  const [showRegistration, setShowRegistration] = useState(false)

  useEffect(() => {
    console.log(` █████╗ ███████╗███████╗███████╗███╗   ███╗██████╗ ██╗     ███████╗
██╔══██╗██╔════╝██╔════╝██╔════╝████╗ ████║██╔══██╗██║     ██╔════╝
███████║███████╗███████╗█████╗  ██╔████╔██║██████╔╝██║     █████╗  
██╔══██║╚════██║╚════██║██╔══╝  ██║╚██╔╝██║██╔══██╗██║     ██╔══╝  
██║  ██║███████║███████║███████╗██║ ╚═╝ ██║██████╔╝███████╗███████╗
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚═════╝ ╚══════╝╚══════╝

Hey hacker! Register for Assemble at https://assemble.hackclub.com/register. We hope to see you there!`)
    if (!window.enableValidation) {
      setTimeout(() => {
        cache(registrants)
      }, 8000)
      let input = ``
      window.enableValidation = true
      window.onkeydown = async event => {
        input += event.key.toLowerCase()
        if (!input.endsWith('e')) return

        const { success } = await fetch('/api/validation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ input }),
        }).then(res => res.json())

        if (success) setShowRegistration(true)
      }
    }
    // Credit to https://workshops.hackclub.com/konami_code/ for the logic of the konami code.
    const keys = []
    const secretCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
      'Enter',
    ]
    window.addEventListener('keyup', e => {
      keys.push(e.key)
      if (keys.length > secretCode.length) {
        keys.shift()
      }
      if (JSON.stringify(keys) === JSON.stringify(secretCode)) {
        // Credit to https://github.com/sc420/jellify-ur-website for designing this amazing jellifing bookmarklet!

        const urls = [
          // Dependencies should be loaded first
          'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
          'https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js',
          // Main script is loaded last
          'https://sc420.github.io/jellify-ur-website/js/jellify.js',
        ]
        urls.forEach(url => {
          const head = document.getElementsByTagName('head')[0]
          const script = document.createElement('script')
          script.src = url
          head.appendChild(script)
        })
      }
    })
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
