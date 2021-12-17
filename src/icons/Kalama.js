const Kalama = ({
  color = 'currentColor',
  size = '1.2em',
}) => (
  <svg viewBox="0 0 512 512" fill={color} height={size} width={size}>
    <path d="M256,464C141.31,464,48,370.69,48,256V236H464v20C464,370.69,370.69,464,256,464ZM89.18,276C99.1,359.24,170.13,424,256,424s156.9-64.76,166.82-148Z"/>
    <rect x="236" y="41" width="40" height="113"/>
    <rect x="88" y="82" width="40" height="113" transform="translate(-66.3 116.93) rotate(-45)"/>
    <rect x="347.5" y="118.5" width="113" height="40" transform="translate(20.39 326.24) rotate(-45)"/>
  </svg>
)

export default Kalama