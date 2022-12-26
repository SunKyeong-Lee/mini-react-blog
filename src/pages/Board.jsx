import styled from "styled-components";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import MyButton from "../styles/MyButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const boardList = useSelector((state) => state.board);
  // 글쓰기를 위해 로그인 여부를 가져옴
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  // 게시물 이름을 클릭했을 때 실행될 함수
  const toBoardPage = (id) => {
    // 임의의 값을 넣으면 그 값으로 고정되기에 BoardId 값을 받아와서 사용
    navigate("/board/" + id);
  };

  const toBoardAddPage = () => {
    navigate("/board/writeform");
  };

  const toHome = () => {
    navigate("/");
  };

  return (
    <Wrap>
      <h2>Board</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>User</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {boardList.map((item) => (
              <TableRow
                key={item.boardId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.boardId}</TableCell>
                <TableCell
                  className="board-title"
                  onClick={() => {
                    toBoardPage(item.boardId);
                  }}
                >
                  {item.title}
                </TableCell>
                <TableCell>{item.userEmail}</TableCell>
                <TableCell>{item.view}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <MyButton variant="contained" color="inherit" onClick={toHome}>
          홈으로
        </MyButton>
        {user && (
          <MyButton variant="contained" onClick={toBoardAddPage}>
            글쓰기
          </MyButton>
        )}
      </div>
    </Wrap>
  );
};

export default Board;

const Wrap = styled.div`
  padding: 2rem;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: auto;
  h2 {
    margin-bottom: 1rem;
  }
  th,
  td {
    text-align: center;
  }
  th {
    font-weight: bold;
  }
  tbody tr:hover {
    background-color: #e9e9e9;
  }
  .board-title {
    cursor: pointer;
  }
  > div {
    margin-top: 1rem;
    margin-left: auto;
    button {
      margin-left: 1rem;
    }
  }
`;
