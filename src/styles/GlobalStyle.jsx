// 전역 스타일

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    background-color: #ccccd3;
  }

  // 푸터 하단 고정
  #wrapper {
    height: auto;
    min-height: 100%;
  }
  .footer {
    height: 100px;
    width: 100%;
    background-color: black;
    color: whitesmoke;
  }

  // 필요에 따라 스타일 추가, 수정
`;

export default GlobalStyle;

// index.js에서 임포트해서 사용
