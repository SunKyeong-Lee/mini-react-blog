/**
 * User
 * user의 여러명의 정보를 저장할 것인가? 구글인증에 맡김
 * > 구글 인증이 여러명의 정보를 갖고있기 때문에 한명의 정보(현재 로그인한 유저)만 저장
 *
 * Current User
 * 가지고 있는 값 : 구글 인증에 들어가 있는 값
 * 값이 없을 때 : null
 * >> initalState
 *
 * reducer 리듀서 : 값을 변경하는 함수
 * userLogin : currentUser의 state에 값을 넣어줌
 * userLogout : currentUser의 state의 값을 null
 */

// 초기값
// 로그인 여부를 알아보기 위해 초기값을 null
// 안에 [], {}을 넣어두면 값이 있다고 판단
const initalState = null;
// 다른 방법으로 데이터 관리
// { userinfo : null, login: false } 와 같이 객체 안에 속성으로 추가해서 사용

// 리듀서 - switch문으로 작성
function currentUser(state = initalState, action) {
  switch (action.type) {
    // 비동기의 내용은 컴포넌트에서 실행한 후, 리덕스로 들고옴
    // * 비동기를 미들웨어(thunk)를 이용하여 진행할 수 있다.
    // 구글인증을 통해서 가져온 값은 객체를 통해서 가져온다.
    // 그 값을 통채로 넣어준다면, 받아온 값을 그대로 넣어주면 된다.
    // > 그 값을 그대로 넣어주기 보다는 그 안에 있는 값 중에 필요한 것만 골라서 넣는게 좋다.
    case "userLogin":
      return action.payload;
    // 로그아웃을 했을 때, 그 값이 null 값으로 들어감
    case "userLogout":
      return null;
    default:
      return state;
  }
}

// 액션함수
export const userLogin = (user) => ({ type: "userLogin", payload: user });
export const userLogout = () => ({ type: "userLogout" });

export default currentUser;
