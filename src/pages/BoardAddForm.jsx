import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "../modules/board";
import MyInput from "../styles/MyInput";

const BoardAddForm = () => {
  // 새로운 데이터를 받을 Board
  // 미리 객체 형식으로 작성 : 객체로 속성을 접근하면 undefined가 나옴
  const [board, setBoard] = useState({});
  const userEmail = useSelector((state) => state.currentUser.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onchange = (e) => {
    setBoard({
      ...board,
      userEmail: userEmail,
      [e.target.name]: e.target.value,
    });
  };

  const onAddBoard = () => {
    dispatch(addBoard(board));
    navigate("/board");
  };

  const toBoard = () => {
    navigate("/board");
  };

  return (
    <Wrap>
      <Paper sx={{ p: 4, maxWidth: "1080px", margin: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MyInput
              label="제목"
              variant="filled"
              name="title"
              onChange={onchange}
            />
          </Grid>
          <Grid item xs={12}>
            <textarea name="content" onChange={onchange} />
          </Grid>
          <Grid item xs={12}>
            <button onClick={toBoard}>취소</button>
            <button onClick={onAddBoard}>작성 완료</button>
          </Grid>
        </Grid>
      </Paper>
    </Wrap>
  );
};

export default BoardAddForm;

const Wrap = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #ccccd3;
  white-space: pre-wrap;
  .MuiGrid-item {
    padding: 1rem;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  textarea {
    width: 100%;
    border: none;
    background-color: lightblue;
  }
`;

// css 정리할 것
// input, textarea value 콘솔 오류 확인할 것
