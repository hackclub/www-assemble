import { Hero } from "../components/hero"
import HeaderSection from "../components/index/header-section"
import { Nav } from "../components/nav"

export default function Index() {
  return (
    <>
      <Nav />
      <HeaderSection />

      {/* Section about documentation/open source */}
      {/* Section about projects */}
      {/* Section about old site */}
      <Hero />
    </>
  )
}