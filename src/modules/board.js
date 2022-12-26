// board 리듀서

// board가 증가할 때마다 추가되는 아이디
let boardId = 3;

// 초기값
const initialState = [
  {
    boardId: 1,
    userEmail: "znfnfn2140@gmail.com",
    title: "첫번째 게시물",
    content: "첫 번째 게시물의 내용입니다. 안녕하세요.",
    view: 0,
    like: 1, // 좋아요를 누른 사람의 리스트
  },
  {
    boardId: 2,
    userEmail: "znfnfn2140@gmail.com",
    title: "두번째 게시물",
    content: "두 번째 게시물의 내용입니다. 반갑습니다.",
    view: 0,
    like: 1,
  },
];

// 리듀서 함수
function board(state = initialState, action) {
  switch (action.type) {
    // 현재 게시물의 id를 찾아서, 그 id를 제외하고 새로울 배열을 만듦
    case "deleteBoard":
      const newBoardList = state.filter(
        (item) => item.boardId != action.payload
      );
      return newBoardList;

    // 수정된 board값을 들고와서, 그 값을 통채로 리스트에 바꿔서 넣어줌
    // 배열의 갯수가 바뀌지 않고, 그 안에 값만 수정 : map
    // 수정할 id 값을 비교해서, board
    case "modifyBoard":
      const modifyBoard = state.map((item) =>
        item.boardId == action.payload.boardId ? action.payload : board
      );
      return modifyBoard;

    // 새로운 board값을 받아와서, boardId를 부여한 후에 추가
    // action.payload를 통해서 - userEmail, title, content
    // 리덕스에서 넣어주는 값 - boardId, view, like
    case "addBoard":
      const newBoard = {
        boardId: boardId,
        userEmail: action.payload.userEmail,
        title: action.payload.title,
        content: action.payload.content,
        view: 0,
        like: 0,
      };
      boardId++;
      return state.concat(newBoard);

    // 조회수
    case "updateView":
      return state.map((item) =>
        item.boardId == action.payload ? { ...item, view: item.view + 1 } : item
      );

    default:
      return state;
  }
}

// 액션함수
export const deleteBoard = (id) => ({ type: "deleteBoard", payload: id });
export const modifyBoard = (board) => ({ type: "modifyBoard", payload: board });
export const addBoard = (board) => ({ type: "addBoard", payload: board });
export const updateView = (id) => ({ type: "updateView", payload: id });

export default board;

// 작성 날짜 추가하기
