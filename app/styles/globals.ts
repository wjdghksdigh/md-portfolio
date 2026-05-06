import { css } from '@emotion/react';
import font from './font';

const globalStyle = css`
  ${font}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  html {

  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 14px;
  }

  .container {
    max-width: 1240px;
    padding: 0px 20px;
    margin: 0 auto;
  }

  .withheader-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  /* symbols 아이콘 텍스트 깜빡임 */
  .material-symbols-rounded {
    visibility: hidden;
  }
  .material-icons-loaded .material-symbols-rounded {
    visibility: visible;
  }

  .react-datepicker {
    position: absolute;
    top: 48px;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__month-wrapper,
  .react-datepicker__year-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 8px;
    grid-column-gap: 8px;
    padding: 8px 12px 12px;
    max-width: none;
    width: 100%;
  }
  .react-datepicker__year--container {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  .react-datepicker__month-container {
    width: 100%;
  }

  .date-input-container {
    position: relative;
    width: 100%;
  }

  .date-input {
    width: 100%;
    height: 48px;
    padding: 0 40px 0 14px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    font-size: 14px;
    line-height: 1.5;
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .date-input::placeholder {
    color: #bdbdbd;
  }

  .date-input:focus {
    border-color: #5c6bc0;
    box-shadow: 0 0 0 1px rgba(92, 107, 192, 0.25);
  }

  .date-input-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #9e9e9e;
    pointer-events: none;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  .form-label {
    font-size: 14px;
    font-weight: 500;
    color: #424242;
  }

  .form-label-required {
    margin-left: 2px;
    color: #ef5350;
  }

  /* ===== Month / Year 공통 그리드 레이아웃 ===== */
  .react-datepicker__month-wrapper,
  .react-datepicker__year-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 8px;
    grid-column-gap: 8px;
    padding: 8px 12px 12px;
  }

  /* ===== Month / Year 공통 셀 스타일 ===== */
  .react-datepicker__month-text,
  .react-datepicker__year-text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
    border-radius: 6px;
    cursor: pointer;
  }

  /* hover 효과 */
  .react-datepicker__month-text:hover,
  .react-datepicker__year-text:hover {
    background-color: #e3e6ff;
  }

  /* 선택/키보드 포커스 상태 */
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: #5c6bc0;
    color: #fff;
  }

  /* ====== DatePicker 팝업 스타일 ====== */
  .react-datepicker {
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    font-size: 13px;
  }

  .react-datepicker__header {
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #5c6bc0;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--keyboard-selected:hover {
    background-color: #3f51b5;
  }

  .react-datepicker__day:hover {
    background-color: #e3e6ff;
  }

  .datepicker-header-arrow {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 24px;
    cursor: pointer;
  }

  .datepicker-header-label {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
  }
`;

export default globalStyle;
