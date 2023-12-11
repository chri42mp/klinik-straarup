import React from "react";

const HeartIcon = ({ onClick, fill, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 55 59"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path d="M29.9999 43.7497C29.7258 43.7513 29.454 43.6987 29.2001 43.595C28.9463 43.4914 28.7154 43.3386 28.5208 43.1455L12.3333 26.9372C10.3028 24.8855 9.16382 22.1154 9.16382 19.2288C9.16382 16.3422 10.3028 13.5722 12.3333 11.5205C14.3796 9.4799 17.1517 8.33398 20.0416 8.33398C22.9315 8.33398 25.7036 9.4799 27.7499 11.5205L29.9999 13.7705L32.2499 11.5205C34.2963 9.4799 37.0683 8.33398 39.9583 8.33398C42.8482 8.33398 45.6202 9.4799 47.6666 11.5205C49.6971 13.5722 50.8361 16.3422 50.8361 19.2288C50.8361 22.1154 49.6971 24.8855 47.6666 26.9372L31.4791 43.1455C31.2844 43.3386 31.0536 43.4914 30.7997 43.595C30.5459 43.6987 30.2741 43.7513 29.9999 43.7497ZM20.0416 12.4997C19.1597 12.4957 18.2857 12.6667 17.4704 13.0029C16.655 13.339 15.9145 13.8336 15.2916 14.458C14.0334 15.7228 13.3271 17.4344 13.3271 19.2184C13.3271 21.0025 14.0334 22.714 15.2916 23.9788L29.9999 38.708L44.7083 23.9788C45.9665 22.714 46.6728 21.0025 46.6728 19.2184C46.6728 17.4344 45.9665 15.7228 44.7083 14.458C43.4242 13.2449 41.7247 12.569 39.9583 12.569C38.1918 12.569 36.4923 13.2449 35.2083 14.458L31.4791 18.208C31.2854 18.4033 31.055 18.5583 30.8011 18.664C30.5473 18.7698 30.275 18.8242 29.9999 18.8242C29.7249 18.8242 29.4526 18.7698 29.1987 18.664C28.9449 18.5583 28.7144 18.4033 28.5208 18.208L24.7916 14.458C24.1687 13.8336 23.4282 13.339 22.6128 13.0029C21.7975 12.6667 20.9235 12.4957 20.0416 12.4997Z" />
    fill={fill}
  </svg>
);

export default HeartIcon;