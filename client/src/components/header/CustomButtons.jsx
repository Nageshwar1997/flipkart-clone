import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Wrapper = styled(Box)({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > button, & > p, & > div": {
    marginRight: "40px",
    fontSize: "16px",
    alignItems: "center",
  },
});

const Container = styled(Box)({
  display: "flex",
});

const LoginButton = styled(Button)({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  padding: "5px 40px",
  borderRadius: "2px",
  boxShadow: "none",
  fontWeight: 600,
  height: "32px",
});
const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: "3px", width: "135px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};

export default CustomButtons;
