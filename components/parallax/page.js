export default function Page({ children, style, raw }) {
  return (
    <div
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        ...style,
      }}
    >
      {raw ? children : <div>{children}</div>}
    </div>
  )
}
