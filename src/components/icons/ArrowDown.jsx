import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownIcon = ({ className, fill, title, ariaLabel }) => {
  const label = ariaLabel || title;
  return (
    <svg
      width="47px"
      height="47px"
      viewBox="0 0 47 47"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={`title_${label}`}
      className={className}
    >
      <title id={`title_${label}`}>{label}</title>
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="ORGANISM-/-04-ZPS-/-Stage-Fullscreen"
          transform="translate(-697.000000, -783.000000)"
        >
          <g
            id="ICON-/-Streamline-3.0-Regular-/-navigation-down-[Negativ]"
            transform="translate(690.000000, 776.000000)"
          >
            <g
              id="Group-5"
              strokeWidth="1"
              fillRule="evenodd"
              transform="translate(6.428571, 6.428571)"
              stroke={fill}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.84"
            >
              <line
                x1="24.1071429"
                y1="33.7504286"
                x2="24.1071429"
                y2="14.4647143"
                id="Stroke-1"
                strokeWidth="1.5"
              ></line>
              <polyline
                id="Stroke-2"
                strokeWidth="1.5"
                points="32.1428571 25.7147143 24.1071429 33.7504286 16.0714286 25.7147143"
              ></polyline>
              <path
                d="M24.1071429,1.60757143 C36.5335714,1.60757143 46.6071429,11.6811429 46.6071429,24.1075714 C46.6071429,36.534 36.5335714,46.6075714 24.1071429,46.6075714 C11.6807143,46.6075714 1.60714286,36.534 1.60714286,24.1075714 C1.60714286,11.6811429 11.6807143,1.60757143 24.1071429,1.60757143 Z"
                id="Stroke-3"
                strokeWidth="1.5"
              ></path>
            </g>
            <polygon id="Shape" points="0 0 60 0 60 60 0 60"></polygon>
          </g>
        </g>
      </g>
    </svg>
  );
};
ArrowDownIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaLabel: PropTypes.string
};

ArrowDownIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 119.1 19.1',
  fill: 'currentColor'
};

export default ArrowDownIcon;
