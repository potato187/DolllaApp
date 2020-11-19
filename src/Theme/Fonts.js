import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
  /* Font Encode Sans Expanded */
  @font-face  {
    font-family: "encode sans";
    src: url("/fonts/encode-sans-regular.woff2") format("woff2"),
    url("/fonts/encode-sans-regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face  {
    font-family: "encode sans";
    src: url("/fonts/encode-sans-500.woff2") format("woff2"),
    url("/fonts/encode-sans-500.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face  {
    font-family: "encode sans";
    src: url("/fonts/encode-sans-600.woff2") format("woff2"),
    url("/fonts/encode-sans-600.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
  @font-face  {
    font-family: "encode sans";
    src: url("/fonts/encode-sans-700.woff2") format("woff2"),
    url("/fonts/encode-sans-regular.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
`;
export default Fonts;
