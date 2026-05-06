import { css } from '@emotion/react';

const FONT_URL = process.env.NEXT_PUBLIC_FONT_URL;

const font = css`
  @font-face {
    font-family: 'Pretendard';
    //src: url("${FONT_URL}/pretendard/Pretendard-Thin.woff2") format("woff2");
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Thin.woff2') format('woff2');
    font-weight: 100;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    //src: url("${FONT_URL}/pretendard/Pretendard-ExtraLight.woff2") format("woff2");
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    //src: url("${FONT_URL}/pretendard/Pretendard-Light.woff2") format("woff2");
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Light.woff2') format('woff2');
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    //src: url("${FONT_URL}/pretendard/Pretendard-Regular.woff2") format("woff2");
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    //src: url("${FONT_URL}/pretendard/Pretendard-Medium.woff2") format("woff2");
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Medium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    //src: url("${FONT_URL}/pretendard/Pretendard-SemiBold.woff2") format("woff2");
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    //src: url("${FONT_URL}/pretendard/Pretendard-Bold.woff2") format("woff2");
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    //src: url("${FONT_URL}/pretendard/Pretendard-ExtraBold.woff2") format("woff2");
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    //src: url("${FONT_URL}/pretendard/Pretendard-Black.woff2") format("woff2");
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/pretendard@1.0/Pretendard-Black.woff2') format('woff2');
    font-weight: 900;
    font-display: swap;
  }
  @font-face {
    font-family: 'NanumMyeongjo';
    src: url('//fonts.googleapis.com/earlyaccess/nanummyeongjo.css') format('woff2');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansTTFLight.woff2') format('woff2');
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansTTFMedium.woff2') format('woff2');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'GmarketSans';
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansTTFBold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }
`;

export const Pretendard = {
  thin: { fontFamily: 'Pretendard', fontWeight: 100 },
  extraLight: { fontFamily: 'Pretendard', fontWeight: 200 },
  light: { fontFamily: 'Pretendard', fontWeight: 300 },
  regular: { fontFamily: 'Pretendard', fontWeight: 400 },
  medium: { fontFamily: 'Pretendard', fontWeight: 500 },
  semiBold: { fontFamily: 'Pretendard', fontWeight: 600 },
  bold: { fontFamily: 'Pretendard', fontWeight: 700 },
  extraBold: { fontFamily: 'Pretendard', fontWeight: 800 },
  black: { fontFamily: 'Pretendard', fontWeight: 900 },
};

export const NanumMyeongjo = {
  regular: { fontFamily: "'Nanum Myeongjo'", fontWeight: 400 },
  bold: { fontFamily: "'Nanum Myeongjo'", fontWeight: 700 },
  extraBold: { fontFamily: "'Nanum Myeongjo'", fontWeight: 800 },
};

export const BodoniModa = {
  regular: { fontFamily: "'Bodoni Moda'", fontWeight: 400 },
  medium: { fontFamily: "'Bodoni Moda'", fontWeight: 500 },
  semiBold: { fontFamily: "'Bodoni Moda'", fontWeight: 600 },
  bold: { fontFamily: "'Bodoni Moda'", fontWeight: 700 },
  black: { fontFamily: "'Bodoni Moda'", fontWeight: 900 },
};

export const PlayfairDisplay = {
  regular: { fontFamily: "'Playfair Display'", fontWeight: 400 },
  medium: { fontFamily: "'Playfair Display'", fontWeight: 500 },
  semiBold: { fontFamily: "'Playfair Display'", fontWeight: 600 },
  bold: { fontFamily: "'Playfair Display'", fontWeight: 700 },
  black: { fontFamily: "'Playfair Display'", fontWeight: 900 },
};

export const GmarketSans = {
  light: { fontFamily: 'GmarketSans', fontWeight: 300 },
  medium: { fontFamily: 'GmarketSans', fontWeight: 500 },
  bold: { fontFamily: 'GmarketSans', fontWeight: 700 },
};

export const Jost = {
  light: { fontFamily: "'Jost'", fontWeight: 300 },
  regular: { fontFamily: "'Jost'", fontWeight: 400 },
  medium: { fontFamily: "'Jost'", fontWeight: 500 },
  semiBold: { fontFamily: "'Jost'", fontWeight: 600 },
  bold: { fontFamily: "'Jost'", fontWeight: 700 },
};

export default font;
