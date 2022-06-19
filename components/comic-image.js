const ComicImage = ({href, src, alt, webp}) => {
  const content = (
    <picture>
      {Boolean(webp) && <source srcSet={webp} type="image/webp" />}
      <img src={src}
      alt={alt}
      title={alt}
      style={{
        objectFit: 'cover',
        border: '3px solid black',
        height: '200px',
        width: '100%'
      }}/>
    </picture>
  )

  if (href) {
    return <a href={href} target="_blank" style={{padding: 0, margin: 0}}>{content}</a>
  } else {
    return content
  }
}
export default ComicImage