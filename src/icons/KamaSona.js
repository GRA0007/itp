const KamaSona = ({
  color = 'currentColor',
  size = '1.2em',
}) => (
  <svg viewBox="0 0 512 512" fill={color} height={size} width={size}>
    <polygon points="126.58 474.88 54.47 474.88 54.47 434.88 109.58 434.88 277.16 261.03 457.53 446.49 350.82 474.24 340.75 435.52 380.91 425.08 277.29 318.53 126.58 474.88"/>
    <path d="M342.22,255.78h-130v-130h130Zm-90-40h50v-50h-50Z"/>
    <rect x="257.22" y="37.12" width="40" height="50.58"/>
    <rect x="324.93" y="64.41" width="50.58" height="40" transform="translate(42.88 272.36) rotate(-45)"/>
    <rect x="184.22" y="59.12" width="40" height="50.58" transform="translate(0.13 169.13) rotate(-45)"/>
  </svg>
)

export default KamaSona