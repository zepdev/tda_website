import React from 'react'
import PropTypes from 'prop-types'

const LinkedinIcon = ({ className, width, height, fill, viewBox }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title_linkedin"
    className={className}
  >
    <title id="title_linkedin">Linkedin</title>
    <path
      fill={fill}
      d="M21,21 L17,21 L17,14.25 C17,13.19 15.81,12.31 14.75,12.31 C13.69,12.31 13,13.19 13,14.25 L13,21 L9,21 L9,9 L13,9 L13,11 C13.66,9.93 15.36,9.24 16.5,9.24 C19,9.24 21,11.28 21,13.75 L21,21 L21,21 Z M7,21 L3,21 L3,9 L7,9 L7,21 L7,21 Z M5,3 C6.1045695,3 7,3.8954305 7,5 C7,6.1045695 6.1045695,7 5,7 C3.8954305,7 3,6.1045695 3,5 C3,3.8954305 3.8954305,3 5,3 Z"
    />
  </svg>
)

LinkedinIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}

LinkedinIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
}

export default LinkedinIcon
