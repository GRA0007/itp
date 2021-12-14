const TokiPona = ({
  color = 'currentColor',
  size = '1.2em',
}) => (
  <svg viewBox="0 0 512 512" fill={color} height={size} width={size}>
    <path d="M256,165.38a138,138,0,1,1-97.58,40.42A137.07,137.07,0,0,1,256,165.38m0-40a178,178,0,1,0,178,178,178,178,0,0,0-178-178Z"/>
    <path d="M256,367.38a64.07,64.07,0,0,1-64-64H152a104,104,0,0,0,208,0H320A64.07,64.07,0,0,1,256,367.38Z"/>
    <rect x="236" y="30.62" width="40" height="67.54"/>
    <rect x="74.45" y="88.44" width="40" height="67.55" transform="translate(-58.75 102.59) rotate(-45)"/>
    <rect x="383.77" y="102.21" width="67.55" height="40" transform="translate(35.88 331.04) rotate(-45)"/>
  </svg>
)

export default TokiPona