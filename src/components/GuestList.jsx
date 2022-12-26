import styled from "styled-components";

const GuestList = (props) => {
  const { guest } = props;

  return (
    <MyContainer>
      <div>
        <div className="name">{guest.name}</div>
        <div className="date">{guest.date}</div>
      </div>
      <div>{guest.text}</div>
    </MyContainer>
  );
};

export default GuestList;

const MyContainer = styled.div`
  white-space: pre-wrap;
  display: flex;
  padding: 2rem 1rem;
  border-bottom: 1px solid lightgray;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  > div {
    &:first-child {
      padding-right: 3rem;
      flex: 1;
    }
    &:last-child {
      flex: 4;
    }
  }
  .name {
    font-weight: bold;
  }
  .date {
    font-size: 14px;
    color: gray;
    margin-top: 0.5rem;
  }
`;
