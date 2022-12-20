import styled from "styled-components";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGuest } from "../modules/guest";
import GuestList from "../components/GuestList";

const Guest = () => {
  // 리덕스를 이용하여 guest의 값 가져오기
  const guestList = useSelector((state) => state.guest);
  const dispatch = useDispatch();

  const [name, setName] = useState("익명");
  const [text, setText] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    if (text == "") {
      alert("내용을 작성해주세요");
      return;
    }
    // 스페이스바만 눌렀을 때도 추가
    dispatch(
      addGuest({
        name: name,
        text: text,
      })
    );
  };

  return (
    <Wrap>
      <h3>글을 쓰는 공간</h3>
      <StyledForm onSubmit={onsubmit}>
        <Stack spacing={2}>
          <TextField
            label="이름"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="작성할 내용"
            multiline
            rows={4}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          {/** 버튼을 클릭했을 때, 리듀서에 내용을 추가 */}
          <Button variant="contained" type="submit">
            작성
          </Button>
        </Stack>
      </StyledForm>
      <hr />
      <h3>글 쓴 내용이 출력되는 공간</h3>
      <CartList>
        {guestList.map((guest) => (
          <GuestList key={guest.guestId} guest={guest} />
        ))}
      </CartList>
    </Wrap>
  );
};

export default Guest;

const Wrap = styled.div`
  padding: 2rem;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const StyledForm = styled.form`
  margin: 2rem 0;
`;

const CartList = styled.div`
  margin: 2rem 0;
`;
