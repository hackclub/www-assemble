import Announcement from './announcement'
import { motion, useViewportScroll, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
/** @jsxImportSource theme-ui */

export const Ref = ref => {
  if (typeof window !== 'undefined') {
    const queryURL = window.location.search
    const urlParams = new URLSearchParams(queryURL)
    ref = urlParams.get('ref')
  }

  switch (ref) {
    case 'codeday':
      ref = 'CodeDay'
      break

    case 'superposition':
      ref = 'Superposition'
      break

    case 'kwk':
      ref = 'Kode With Klossy'
      break
      
    case 'techtogether':
      ref = 'TechTogether'
      break
  }

  console.log(ref)

  let refCheck = true

  if (ref == null) {
    refCheck = false
  }

  const { scrollYProgress } = useViewportScroll()
  const control = useAnimation()

  useEffect(
    () =>
      scrollYProgress.onChange(latest => {
        if (latest <= 0.18) {
          control.start({
            opacity: 1,
            transition: { duration: 0.7 },
          })
        }
        if (latest > 0.18) {
          control.start({
            opacity: 0,
            transition: { duration: 0.7 },
          })
        }
      }),
    [],
  )

  return (
    <>
      {refCheck ? (
        <motion.div animate={control} sx={{ backgroundColor: '#000000' }}>
          <Announcement
            copy="Let's Assemble in San Francisco"
            caption={`Thanks for checking us out! Assemble will be attended by other ${ref} participants/organizers and we’d love to have you there.`}
            href="https://register.assemble.hackclub.com/"
            iconLeft="friend"
            color="primary"
          />
        </motion.div>
      ) : (
        <motion.div
          animate={control}
          sx={{ backgroundColor: '#000000' }}
        ></motion.div> // not super sure why but if motion.div is not called the whole thing turns wack
      )}
      <></>
    </>
  )
}
