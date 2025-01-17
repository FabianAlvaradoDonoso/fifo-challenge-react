interface Props {
  height?: number
  width?: number
  color?: string
  bg?: string
}

const MoonIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={props.bg}
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    color={props.color}
  >
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3.32 11.684a9 9 0 0 0 17.357 3.348A9 9 0 0 1 8.32 6.683c0-1.18.23-2.32.644-3.353a9 9 0 0 0-5.645 8.354"
    />
  </svg>
)

export default MoonIcon
