import styled from "styled-components";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MyButton from "../styles/MyButton";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGuest } from "../modules/guest";
import GuestList from "../components/GuestList";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const Guest = () => {
  // 리덕스를 이용하여 guest의 값 가져오기
  const guestList = useSelector((state) => state.guest);
  const dispatch = useDispatch();
  // 이메일정보를 들고오기위해 리덕스의 currentUser 들고오기
  const currentUser = useSelector((state) => state.currentUser);

  const [name, setName] = useState("익명");
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const contentRef = useRef();

  const onsubmit = (e) => {
    e.preventDefault();
    if (text == "") {
      alert("내용을 작성해주세요");
      return;
    }
    dispatch(
      addGuest({
        name: name,
        text: text,
      })
    );
    contentRef.current.value = null;
    setName("익명");
  };

  return (
    <Wrap>
      <Paper sx={{ p: 4, maxWidth: "1080px", margin: "auto" }}>
        <h2>GuestBook</h2>
        <StyledForm onSubmit={onsubmit}>
          <Stack spacing={2}>
            {currentUser ? (
              // 로그인 되었을 때
              <TextField
                label="이름"
                value={currentUser.email}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            ) : (
              // 로그인 되지않았을 때
              <TextField
                label="이름"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            )}
            <TextField
              label="작성할 내용"
              multiline
              inputRef={contentRef}
              rows={4}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            {/** 버튼을 클릭했을 때, 리듀서에 내용을 추가 */}
            <div className="button-wrap">
              <MyButton
                variant="contained"
                color="inherit"
                onClick={() => {
                  navigate("/");
                }}
              >
                홈으로 가기
              </MyButton>
              <MyButton type="submit" variant="contained">
                방명록 작성
              </MyButton>
            </div>
          </Stack>
        </StyledForm>
      </Paper>
      <Paper sx={{ p: 4, maxWidth: "1080px", margin: "auto" }}>
        {guestList
          .slice(0)
          .reverse()
          .map((guest) => (
            <GuestList key={guest.guestId} guest={guest} />
          ))}
      </Paper>
    </Wrap>
  );
};

export default Guest;

const Wrap = styled.div`
  padding: 2rem;
  > div:first-child {
    margin-bottom: 2rem;
  }
`;

const StyledForm = styled.form`
  margin-top: 2rem;
  .button-wrap {
    display: flex;
    margin-left: auto;
    button {
      margin-left: 1rem;
    }
  }
`;
