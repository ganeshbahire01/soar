import { SVGProps } from "react";

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="33"
    fill="none"
    viewBox="0 0 25 33"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.875.917a2.92 2.92 0 0 1 2.526 1.458h1.849a2.916 2.916 0 0 1 2.917 2.917v17.5a7.29 7.29 0 0 1-7.292 7.291H3.75a2.917 2.917 0 0 1-2.917-2.916V5.292A2.917 2.917 0 0 1 3.75 2.375H5.6A2.92 2.92 0 0 1 8.124.917zm-.257 10.76-6.186 6.188-2.063-2.063a1.458 1.458 0 0 0-2.062 2.062l2.99 2.991a1.604 1.604 0 0 0 2.268 0l7.117-7.115a1.458 1.458 0 1 0-2.064-2.062m-.472-7.844H8.854a.73.73 0 0 0-.717.598l-.012.132V6.02a.73.73 0 0 0 .598.717l.131.012h7.292a.73.73 0 0 0 .717-.598l.012-.131V4.563a.73.73 0 0 0-.598-.718z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default LogoIcon;
