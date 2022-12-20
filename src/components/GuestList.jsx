import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

const GuestList = (props) => {
  const { guest } = props;

  return (
    <StyledCard variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {guest.date}
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          {guest.name}
        </Typography>
        <Typography>{guest.text}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default GuestList;

const StyledCard = styled(Card)`
  white-space: pre-wrap;
  .MuiTypography-h5 {
    font-size: 1rem;
    font-weight: bold;
  }
`;
