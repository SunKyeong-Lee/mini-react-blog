import styled from "styled-components";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    color: #f8f9fa;
    background-color: #212529;
    &:hover {
      background-color: black;
      box-shadow: 0 2px 5px 1px #a5a8ac;
    }
    svg {
      font-size: 1rem;
      margin-right: 0.5rem;
    }
  }
  &.MuiButton-containedInherit {
    background-color: #a1a1a1;
    &:hover {
      background-color: #8d8d8d;
    }
  }
`;

function MyButton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default MyButton;
