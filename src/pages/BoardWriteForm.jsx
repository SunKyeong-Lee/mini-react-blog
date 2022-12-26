import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyBoard } from "../modules/board";

const BoardWriteForm = () => {
  const location = useLocation();
  const [board, setBoard] = useState(location.state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 값을 수정했을 때 board의 내용을 수정하는 함수
  const onchange = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  // 수정 완료 버튼을 눌렀을 때 실행하는 함수
  const onModifyBoard = () => {
    dispatch(modifyBoard(board));
    navigate("/board/" + board.boardId);
  };

  return (
    <Wrap>
      <Paper sx={{ p: 4, maxWidth: "1080px", margin: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input name="title" value={board.title} onChange={onchange} />
          </Grid>
          <Grid item xs={12}>
            <textarea name="content" onChange={onchange}>
              {board.content}
            </textarea>
          </Grid>
          <Grid item xs={12}>
            <button>취소</button>
            <button onClick={onModifyBoard}>수정 완료</button>
          </Grid>
        </Grid>
      </Paper>
    </Wrap>
  );
};

export default BoardWriteForm;

const Wrap = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  .MuiGrid-item {
    padding: 1rem;
  }
`;

// css 정리할 것
// input, textarea value 콘솔 오류 확인할 것