import styled from "styled-components";
import Stack from "@mui/material/Stack";
import GoogleIcon from "@mui/icons-material/Google";
import MyButton from "../styles/MyButton";
import MyInput from "../styles/MyInput";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { userLogin } from "../modules/currentUser";

const LoginForm = () => {
  // 리덕스의 리듀서를 사용하기위한 디스패치
  const dispatch = useDispatch();

  // 페이지를 이동하기 위한 navigate();
  const navigate = useNavigate();

  // 이메일과 비밀번호를 가져올 state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일로 회원가입을 하기 위한 함수
  const emailCreate = () => {
    // getAuth는 파이어베이스 앱에서 인증 부분을 받아오는 함수
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in - 회원가입 성공
        const user = userCredential.user;
        // ..
        console.log(user);
        dispatch(userLogin(user));
        alert("회원가입이 완료되었습니다.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        alert.log(errorCode);
        if (errorCode == "auth/email-already-in-use") {
          alert("이미 사용하고 있는 이메일입니다.");
        } else if (errorCode == "auth/weak-password") {
          alert("비밀번호를 6자리 이상으로 작성하세요.");
        }
      });
  };

  // 이메일과 비밀번호로 로그인하기
  const emailLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        dispatch(userLogin(user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode == "auth/wrong-password") {
          alert("잘못된 비밀번호입니다.");
        } else if (errorCode == "auth/user-not-fount") {
          alert("없는 이메일입니다.");
        } else if (errorCode == "auth/invalid-email") {
          alert("이메일을 입력해주세요");
        } // 동시에 출력되는 경우도 있음
      });
  };

  // form의 onSubmit에 연결할 함수
  // form의 경우에는 새로고침으로 값이 사라질 수 있어 preventDefault()를 통해서 막아주어야 한다.
  const onsubmit = (e) => {
    e.preventDefault();
    emailLogin();
  };

  // 구글로 로그인하기 (팝업)
  const gooleLogin = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(user);
        dispatch(userLogin(user));
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode);
      });
  };

  return (
    <Wrap>
      <form onSubmit={onsubmit}>
        <Stack direction="column" spacing={2}>
          <h1>Login</h1>
          <MyInput
            label="e-mail"
            variant="filled"
            size="small"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <MyInput
            label="password"
            variant="filled"
            size="small"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Stack>
        <Stack direction="column" spacing={1} sx={{ mt: 5 }}>
          <MyButton variant="contained" type="submit" size="large">
            로그인
          </MyButton>
          <MyButton variant="contained" size="large" onClick={emailCreate}>
            위 이메일과 비밀번호로 회원가입
          </MyButton>
          <div className="login-with">or login with</div>
          <MyButton size="large" onClick={gooleLogin}>
            <GoogleIcon />
            구글 로그인
          </MyButton>
        </Stack>
      </form>
    </Wrap>
  );
};

export default LoginForm;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 2rem;
  form {
    margin: auto;
    width: 300px;
  }
  h1 {
    margin-bottom: 1rem;
  }
  .login-with {
    margin-top: 1rem;
    color: #acafb1;
  }
`;

// paper 추가하기