import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginForm from "./pages/LoginForm";
import Guest from "./pages/Guest";
import Board from "./pages/Board";
import BoardPage from "./pages/BoardPage";
import BoardWriteForm from "./pages/BoardWriteForm";
import BoardAddForm from "./pages/BoardAddForm";

// Routes와 Route를 이용하면 화면 관리
function App() {
  return (
    <div>
      {/** 고정할 화면이 있다면 Routes의 바깥에 두거나, Layout 사용 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="/board/modifyform" element={<BoardWriteForm />} />
        <Route path="/board/writeform" element={<BoardAddForm />} />
      </Routes>
    </div>
  );
}

// 404 페이지 만들기

export default App;
