import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard } from "../modules/board";

const BoardPage = () => {
  // params를 통해서 board의 boardId값 전달
  const { id } = useParams();
  // board의 내용을 출력하기위해 리덕스에서 값 가져오기
  const boardList = useSelector((state) => state.board);
  // board 내용중에 하나만 찾아서 가져오기
  // 배열의 find (return 값 : 배열 값 중 하나만 출력 - 객체)
  const board = boardList.find((item) => item.boardId == id);

  return (
    <div>{board ? <BoardPrint board={board} /> : "없는 페이지입니다"}</div>
  );
};

export default BoardPage;

const BoardPrint = ({ board }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 게시물 삭제 함수
  const onDelete = () => {
    dispatch(deleteBoard(board.boardId));
    navigate("/board");
  };

  // 게시물 수정 함수
  const toModifyBoard = () => {
    navigate("/board/modifyform", { state: board });
  };

  return (
    <Wrap>
      <Paper sx={{ p: 4, maxWidth: "1080px", margin: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h2>{board.title}</h2>
            <div>
              {board.boardId}, {board.userEmail}
            </div>
          </Grid>
          <Grid item xs={4}>
            <button onClick={toModifyBoard}>수정</button>
            <button onClick={onDelete}>삭제</button>
          </Grid>
          <Grid item xs={12}>
            <div>{board.content}</div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <span>조회수 : {board.view}</span>
            </div>
            <div>
              <span>좋아요 : {board.like}</span>
            </div>
          </Grid>
          <Grid item xs={12}>
            <button>홈</button>
            <button>게시글 목록</button>
          </Grid>
        </Grid>
      </Paper>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  background-color: #ccccd3;
  .MuiGrid-item {
    padding: 1rem;
  }
`;
