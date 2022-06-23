import Head from 'next/head'
import theme from '../lib/theme'
import React, { useEffect, useState } from 'react'

const makeTitle = (title, name) =>
  title === name ? title : `${title} – ${name}`

const Meta = ({
  title = 'Assemble', // page title
  name = 'Assemble', // site name
  description = 'Join us in SF!', // page description
  image = '/social.png', // social card image URL
  url = 'https://hackclub.com',
  children,
}) => {
  const [focus, setFocus] = useState(true)

  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }

  useEffect(() => {
    window.addEventListener('focus', onFocus)
    window.addEventListener('blur', onBlur)
    // Calls onFocus when the window first loads
    onFocus()
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('blur', onBlur)
    }
  }, [])

  return (
    <Head>
      <meta key="og_locale" property="og:locale" content="en_US" />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_site" property="og:site_name" content={name} />
      <meta key="tw_site" name="twitter:site" content="@hackclub" />
      <title key="title">{focus ? 'Come together...' : '...over me'}</title>
      <meta
        key="og_title"
        property="og:title"
        content={makeTitle(title, name)}
      />
      <meta
        key="tw_title"
        name="twitter:title"
        content={makeTitle(title, name)}
      />
      {description && (
        <React.Fragment>
          <meta key="desc" name="description" content={description} />
          <meta key="og_desc" property="og:description" content={description} />
          <meta
            key="tw_desc"
            name="twitter:description"
            content={description}
          />
        </React.Fragment>
      )}
      {image && (
        <React.Fragment>
          <meta key="og_img" property="og:image" content={image} />
          <meta
            key="tw_card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta key="tw_img" name="twitter:image" content={image} />
        </React.Fragment>
      )}
      <meta
        key="theme_color"
        name="theme-color"
        content={theme.colors.primary}
      />
      <meta
        key="tile_color"
        name="msapplication-TileColor"
        content={theme.colors.primary}
      />
      <link rel="favicon" type="image/png" href="/favicon.png" />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      {children}
    </Head>
  )
}

export default Meta
