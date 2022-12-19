import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

// 웹을 사용할 때 파이어베이스를 들고오기 위해 import
// import {} from, import from을 통해서 가져오는 경우
// : export, export default로 되어있는 값을 가져와서,
//   현재 js 파일에서만 사용 (다른 곳에서 사용하려면 다시 import)
// js, css를 들고올 때 import해서만 들고오는 경우
// : 전체 파일에 그 내용이 실행 적용 (어디에서 한 곳에 들고와도)
import "./database/firebase";

// 리덕스를 사용하기위해서 리덕스 프로바이더 추가
import { Provider } from "react-redux";
// createStore를 추가
import { createStore } from "redux";
import rootReducer from "./modules/store";

// createStore를 통해서 store 생성
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
