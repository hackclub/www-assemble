const ComicImage = ({href, src, alt}) => {
  const content = <img src={src}
  alt={alt}
  title={alt}
  style={{
    objectFit: 'cover',
    border: '3px solid black',
    height: '200px',
    width: '100%'
  }}/>

  if (href) {
    return <a href={href} target="_blank">{content}</a>
  } else {
    return content
  }
}
export default ComicImage