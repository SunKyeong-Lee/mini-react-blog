import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginForm from "./pages/LoginForm";

// Routes와 Route를 이용하면 화면 관리
function App() {
  return (
    <div>
      {/** 고정할 화면이 있다면 Routes의 바깥에 두거나, Layout 사용 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
