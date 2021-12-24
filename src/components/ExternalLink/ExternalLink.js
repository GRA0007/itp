const ExternalLink = props => (
  // eslint complains about an empty link here
  // eslint-disable-next-line
  <a
    target="_blank"
    rel="noreferrer nofollow"
    {...props}
  />
)

export default ExternalLink