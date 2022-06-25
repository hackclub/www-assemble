/** @jsxImportSource theme-ui */


const ComicImage = ({
  href,
  src,
  alt,
  webp,
  objectPosition = undefined,
  sx,
  height = undefined
}) => {
  const content = (
    <picture>
      {Boolean(webp) && <source srcSet={webp} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        title={alt}
        sx={{
          objectFit: 'cover',
          border: '3px solid black',
          objectPosition,
          minHeight: height,
          objectFit: 'cover',
          height: '100%',
          width: '100%',
          '&:hover': {
              transform: 'translateY(-7px) translateX(7px)',
              boxShadow: '-7px 7px #000',
              transitionDuration: '200ms'
            }
        }}
      />
    </picture>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        style={{ padding: 0, margin: 0, height: '100%' }}
      >
        {content}
      </a>
    )
  } else {
    return content
  }
}
export default ComicImage
