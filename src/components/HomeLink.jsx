import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeLink = () => {
  // 로그인 유무를 확인하기위한 변수
  const login = false;

  return (
    <NavWrap>
      {login ? (
        //로그인이 되었을 때 보이는 화면, 단 관리자페이지는 홈페이지 주인만 보이기
        <div>
          <Link>게시글</Link>
          <Link>방명록</Link>
          <Link>관리자 페이지</Link>
          <Link>마이페이지</Link>
          <Link>로그아웃</Link>
        </div>
      ) : (
        //로그인이 되어있지 않을 때, 보여지는 링크
        <div>
          <Link>게시글</Link>
          <Link to="/guest">방명록</Link>
          <Link to="/loginform">로그인</Link>
        </div>
      )}
    </NavWrap>
  );
};

export default HomeLink;

const NavWrap = styled.div`
  position: fixed;
  top: 5%;
  right: 3%;
  display: flex;
  width: 100%;
  justify-content: right;
  z-index: 2;
  a {
    margin: 1rem;
    text-decoration: none;
    color: whitesmoke;
  }
`;
