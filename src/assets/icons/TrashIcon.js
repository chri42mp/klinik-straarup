import React from "react";

const TrashIcon = ({ onClick, fill, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 50 50"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <g clipPath="url(#clip0_406_5708)">
      <path
        d="M36.4349 17.9354H30.2678V15.8756C30.2389 15.0859 29.898 14.34 29.32 13.8013C28.742 13.2626 27.974 12.975 27.1843 13.0017H23.484C22.6943 12.975 21.9263 13.2626 21.3483 13.8013C20.7703 14.34 20.4294 15.0859 20.4005 15.8756V17.9354H14.2334C13.9063 17.9354 13.5926 18.0653 13.3613 18.2966C13.1299 18.5279 13 18.8417 13 19.1688C13 19.4959 13.1299 19.8096 13.3613 20.0409C13.5926 20.2722 13.9063 20.4022 14.2334 20.4022H15.4668V33.9698C15.4668 34.9511 15.8567 35.8923 16.5506 36.5862C17.2445 37.2802 18.1857 37.67 19.1671 37.67H31.5012C32.4826 37.67 33.4238 37.2802 34.1177 36.5862C34.8116 35.8923 35.2015 34.9511 35.2015 33.9698V20.4022H36.4349C36.762 20.4022 37.0757 20.2722 37.307 20.0409C37.5384 19.8096 37.6683 19.4959 37.6683 19.1688C37.6683 18.8417 37.5384 18.5279 37.307 18.2966C37.0757 18.0653 36.762 17.9354 36.4349 17.9354ZM22.8673 15.8756C22.8673 15.6782 23.1263 15.4685 23.484 15.4685H27.1843C27.542 15.4685 27.801 15.6782 27.801 15.8756V17.9354H22.8673V15.8756ZM32.7346 33.9698C32.7346 34.2969 32.6047 34.6106 32.3734 34.8419C32.1421 35.0732 31.8284 35.2032 31.5012 35.2032H19.1671C18.84 35.2032 18.5262 35.0732 18.2949 34.8419C18.0636 34.6106 17.9337 34.2969 17.9337 33.9698V20.4022H32.7346V33.9698Z"
        fill={fill}
      />
      <path
        d="M21.6341 31.504C21.9612 31.504 22.275 31.3741 22.5063 31.1427C22.7376 30.9114 22.8675 30.5977 22.8675 30.2706V25.3369C22.8675 25.0098 22.7376 24.6961 22.5063 24.4648C22.275 24.2335 21.9612 24.1035 21.6341 24.1035C21.307 24.1035 20.9933 24.2335 20.762 24.4648C20.5306 24.6961 20.4007 25.0098 20.4007 25.3369V30.2706C20.4007 30.5977 20.5306 30.9114 20.762 31.1427C20.9933 31.3741 21.307 31.504 21.6341 31.504Z"
        fill={fill}
      />
      <path
        d="M29.0341 31.504C29.3612 31.504 29.6749 31.3741 29.9062 31.1427C30.1375 30.9114 30.2675 30.5977 30.2675 30.2706V25.3369C30.2675 25.0098 30.1375 24.6961 29.9062 24.4648C29.6749 24.2335 29.3612 24.1035 29.0341 24.1035C28.707 24.1035 28.3932 24.2335 28.1619 24.4648C27.9306 24.6961 27.8007 25.0098 27.8007 25.3369V30.2706C27.8007 30.5977 27.9306 30.9114 28.1619 31.1427C28.3932 31.3741 28.707 31.504 29.0341 31.504Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_406_5708">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default TrashIcon;
