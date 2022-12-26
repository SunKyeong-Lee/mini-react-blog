// 작성한 리덕스 모듈들을 하나로 묶어서 사용 및 내보내기
import { combineReducers } from "redux";
// 리덕스 모듈 연결
import currentUser from "./currentUser";
import guest from "./guest";
import board from "./board";
import comments from "./comment";

const rootReducer = combineReducers({ currentUser, guest, board, comments });

export default rootReducer;