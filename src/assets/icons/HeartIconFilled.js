import React from "react";

const HeartIconFilled = ({ onClick, fill, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 50 50"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M25 43.7497C24.7258 43.7513 24.4541 43.6987 24.2002 43.595C23.9464 43.4914 23.7155 43.3386 23.5209 43.1455L7.33336 26.9372C5.30286 24.8855 4.16391 22.1154 4.16391 19.2288C4.16391 16.3422 5.30286 13.5722 7.33336 11.5205C9.37974 9.4799 12.1518 8.33398 15.0417 8.33398C17.9316 8.33398 20.7036 9.4799 22.75 11.5205L25 13.7705L27.25 11.5205C29.2964 9.4799 32.0684 8.33398 34.9584 8.33398C37.8483 8.33398 40.6203 9.4799 42.6667 11.5205C44.6972 13.5722 45.8361 16.3422 45.8361 19.2288C45.8361 22.1154 44.6972 24.8855 42.6667 26.9372L26.4792 43.1455C26.2845 43.3386 26.0537 43.4914 25.7998 43.595C25.546 43.6987 25.2742 43.7513 25 43.7497Z"
      fill={fill}
    />
  </svg>
);

export default HeartIconFilled;
