import Head from 'next/head'
import theme from '../lib/theme'
import { useEffect, useState } from 'react'

const makeTitle = (title, name) =>
  title === name ? title : `${title} – ${name}`

const Meta = ({
  title = 'Assemble', // page title
  name = 'Assemble', // site name
  description = 'Join us in SF!', // page description
  image = '', // social card image URL
  url = 'https://hackclub.com',
  children,
}) => {
  const [focus, setFocus] = useState(true)

  const onFocus = () => {setFocus(true)}
  const onBlur = () => {setFocus(false)}

  useEffect(() => {
    window.addEventListener("focus", onFocus)
    window.addEventListener("blur", onBlur)
    // Calls onFocus when the window first loads
    onFocus()
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("focus", onFocus)
      window.removeEventListener("blur", onBlur)
    }
  }, [])

  return (
    <Head>
     <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <meta key="tw_site" name="twitter:site" content="@hackclub" />
    <title key="title">{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <React.Fragment>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </React.Fragment>
    )}
    {image && (
      <React.Fragment>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={image} />
      </React.Fragment>
    )}
    <meta key="theme_color" name="theme-color" content={theme.colors.primary} />
    <meta key="tile_color" name="msapplication-TileColor" content={theme.colors.primary} />
    <link
      key="safari_icon"
      rel="mask-icon"
      href="https://assets.hackclub.com/favicons/safari-pinned-tab.svg"
      color={theme.colors.primary}
    />
    <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://assets.hackclub.com/favicons/apple-touch-icon.png"
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://assets.hackclub.com/favicons/favicon-32x32.png"
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://assets.hackclub.com/favicons/favicon-16x16.png"
    />
    {children}
    </Head>
  )
}

export default Meta
