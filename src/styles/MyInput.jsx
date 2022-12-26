import styled from "styled-components";
import { TextField } from "@mui/material";

const StyledInput = styled(TextField)`
  .css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:after {
    border-bottom: 2px solid #212529;
  }
  label {
    &.Mui-focused {
      color: #212529;
    }
  }
`;

function MyInput({ children, ...rest }) {
  return <StyledInput {...rest}>{children}</StyledInput>;
}

export default MyInput;
