import { Image } from 'theme-ui'

const Ingot = props => {
  return (
    <img
      src="/ingot.png"
      width="32"
      height="32"
      style={{ verticalAlign: 'bottom', paddingLeft: '4px' }}
      onClick={function () {
        function d(a) {
          return a
            .split('')
            .map(x =>
              x == ' ' ? ' ' : (x.charCodeAt(0) - 1) % 2 == 0 ? '.' : '-',
            )
            .join('')
        }
        console.log('Test')

        let code = prompt("Are you g0ld3n? (Dit dit dat, I'm a robot)")
        let ans = '2Tw h~&@T ;"!U NOC wm!BL X['
        if (code === d(ans)) {
          document.body.innerHTML = document.body.innerHTML
            .replaceAll('Hack', 'Wack')
            .replaceAll('hack', 'wack')
        }
      }}
    />
  )
}
export default Ingot
