//

// 초기값
const initialState = [
  {
    commentId: 1,
    boardId: 1,
    userEmail: "abc123@dummy.com",
    text: "잘 보고 갑니다.",
  },
];

// 리듀서
function comments(state = initialState, action) {
  switch (action.type) {
    case "":
      return ;
    
    default:
      return state;
  }
}

export default comments;
