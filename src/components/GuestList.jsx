import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

const GuestList = (props) => {
  const { guest } = props;

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <StyledCardContent>
        <div>
          <div className="name">{guest.name}</div>
          <div className="date">{guest.date}</div>
        </div>
        <div>{guest.text}</div>
      </StyledCardContent>
    </Card>
  );
};

export default GuestList;

const StyledCardContent = styled(CardContent)`
  white-space: pre-wrap;
  display: flex;
  > div {
    &:first-child {
      padding-right: 1rem;
      border-right: 1px dashed lightgray;
      flex: 1;
    }
    &:last-child {
      padding-left: 1rem;
      flex: 4;
    }
  }
  .css-46bh2p-MuiCardContent-root:last-child {
    padding: 0;
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
