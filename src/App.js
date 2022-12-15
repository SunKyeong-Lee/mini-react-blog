import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';

// Routes와 Route를 이용하면 화면 관리
function App() {
  return (
    <div>
      {/** 고정할 화면이 있다면 Routes의 바깥에 두거나, Layout 사용 */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
