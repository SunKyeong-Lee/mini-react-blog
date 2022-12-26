import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBoard, updateView } from "../modules/board";
import { useEffect } from "react";

const BoardPage = () => {
  // params를 통해서 board의 boardId값 전달
  const { id } = useParams();
  // board의 내용을 출력하기위해 리덕스에서 값 가져오기
  const boardList = useSelector((state) => state.board);
  // board 내용중에 하나만 찾아서 가져오기
  // 배열의 find (return 값 : 배열 값 중 하나만 출력 - 객체)
  const board = boardList.find((item) => item.boardId == id);
  const dispatch = useDispatch();

  // 화면이 실행되자마자 조회수를 1 올리기 위함
  // 리덕스를 통해서 id값을 전달하여 그 id 값을 가진 board값의 view(조회수)를 올림
  useEffect(() => {
    dispatch(updateView(id));
  }, []);

  return (
    <div>{board ? <BoardPrint board={board} /> : "없는 페이지입니다"}</div>
  );
};

export default BoardPage;

const BoardPrint = ({ board }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comments = useSelector((state) => state.comments);
  const boardComments = comments.filter(
    (item) => item.boardId == board.boardId
  );

  // 게시물 삭제 함수
  const onDelete = () => {
    dispatch(deleteBoard(board.boardId));
    navigate("/board");
  };

  // 게시물 수정 함수
  const toModifyBoard = () => {
    navigate("/board/modifyform", { state: board });
  };

  // 관리자일때만 수정 삭제 할 수있도록 수정하기
  // 홈, 게시글 페이지로 가기

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
          <hr />
          <Grid item xs={12}>
            {
              // 코멘트 작성 추가하기 
              
              // comment에서 boardId가 같은 것만 출력
              // 처음값이 null과 undefined일 때, 그대로 사용해도 ok
              // 처음값이 배열일 경우, length를 이용하여 확인
              // 처음값이 객체일 경우, 속성값으로 들어가서 확인
              boardComments.length > 0 ?
              boardComments.map((item) => (
                <div>
                  <div>{item.userEmail}</div>
                  <div>{item.text}</div>
                </div>
              )) : <div>코멘트가 없습니다</div>
            }
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
  .MuiGrid-item {
    padding: 1rem;
  }
`;
