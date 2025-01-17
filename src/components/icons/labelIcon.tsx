interface Props {
  width?: number
  fill?: string
  className?: string
}

const LabelIcon = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={props.width}
    height={props.width}
    fill="currentColor"
    className={props.className}
    version="1.1"
    viewBox="0 0 486.82 486.82"
  >
    <path d="M486.82 21.213 465.607 0l-42.768 42.768H238.991L0 281.759 205.061 486.82l238.992-238.991V63.98zm-72.767 214.19L205.061 444.394 42.427 281.759 251.418 72.768h141.421l-40.097 40.097c-14.56-6.167-32.029-3.326-43.898 8.543-15.621 15.621-15.621 40.948 0 56.569s40.948 15.621 56.568 0c11.869-11.869 14.71-29.338 8.543-43.898l40.097-40.097v141.421z" />
  </svg>
)

export default LabelIcon
