import { Card, Text } from 'theme-ui'
import { keyframes } from '@emotion/react'
import Icon from './icon'
/** @jsxImportSource theme-ui */

const unfold = keyframes({
//   from: { transform: 'scaleY(0)' },
//   to: { transform: 'scaleY(100%)' },
from: { transform: 'translateX(320px)', opacity: '0' },
to: { transform: 'translateX(0px)', opacity: '1' }
})

const Announcement = ({
  caption,
  copy,
  iconLeft,
  iconRight,
  color = 'accent',
  sx = {},
  ...props
}) => (
  <Card
    as={props.href ? 'a' : 'div'}
    variant="interactive"
    sx={{
      position: ['relative','fixed'],
      right: [null, '40px', '40px'],
      bottom: ['-20px', '40px','40px'],
      maxWidth: ['300px', '360px'],
      zIndex: '99999',
      width: '100%',
      textAlign: 'left',
      textDecoration: 'none',
      lineHeight: 'caption',
      display: 'flex',
      alignItems: 'center',
      py: '10px !important',
      px: '20px !important',
        mx: 'auto',
      transform: 'scale(1)',
    //   borderTop: ['20px solid black', null, null],
      '@media (prefers-reduced-motion: no-preference)': {
        animation: [null, `${unfold} 1.5s ease-in`],
      },
      svg: { flexShrink: 'none' },
      ...sx,
    }}
    {...props}
  >
    {iconLeft && (
      <Icon
        glyph={iconLeft}
        sx={{
          mr: [1, 2],
          ml: 2,
          color,
          display: ['none', 'block'],
          width: '82px',
          height: '82px',
          color: 'red',
        }}
      />
    )}
    <Text
      as="p"
      sx={{
        flex: '1 1 auto',
        strong: {
          display: ['inline', 'block'],
          fontSize: '14px',
          color: 'red',
        },
      }}
    >
      <strong>{copy}</strong>
      {caption && (
        <Text
          as="p"
          variant="caption"
          color="secondary"
          sx={{ fontSize: '12px', lineHeight: '1.2em', color: 'black' }}
        >
          {' '}
          {caption}
        </Text>
      )}
    </Text>
    {iconRight && <Icon glyph={iconRight} sx={{ ml: [2, 3], color }} />}
  </Card>
)

export default Announcement
