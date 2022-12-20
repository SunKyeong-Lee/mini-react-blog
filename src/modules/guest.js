// 방명록 리스트 저장

// 값을 구분하기위한 id
let guestId = 3;

const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const today = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${today}`;
};

// 초기값
const initialState = [
  { guestId: 2, name: "익명", text: "블로그 잘 봤습니다.", date: "2022.12.18" },
  { guestId: 1, name: "바닐라라떼팡인", text: "들렸다갑니다.", date: "2022.12.20" },
];

// 리듀서
function guest(state = initialState, action) {
  switch (action.type) {
    // 방명록을 리스트에 추가
    case "addGuest":
      // 방명록 값을 들고와서 리스트에 추가하는 형태 - 들고오는 방명록의 값: name, text / gusetId 값 추가
      const newGuest = { ...action.payload, guestId: guestId, date: getDate() };
      guestId++;
      // 만들어진 방명록 객체를 배열 추가 : 새로 배열을 만들어서 추가 - concat을 통해 사용
      const newGuestArray = state.concat(newGuest);
      return newGuestArray;

    default:
      return state;
  }
}

// 액션함수
export const addGuest = (guest) => ({ type: "addGuest", payload: guest });

export default guest;
