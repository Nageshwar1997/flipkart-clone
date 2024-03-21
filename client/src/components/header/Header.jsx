import React from "react";

// Images Imports
import FlipkartLogo from "../../assets/images/flipkart-logo.png";
import PlusLogo from "../../assets/images/plus_logo.png";

// Material UI Imports
import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";

// Component Imports
import Search from "./Search";
import CustomButtons from "./CustomButtons";


// Styled Component
const StyledHeader = styled(AppBar)({
    background: "#2874f0",
    width: "100%",
});

const Component = styled(Box)({
  marginLeft: "12%",
  lineHeight: 0,
});

const SubHeading = styled(Typography)({
  fontSize: "10px",
  fontWeight: "bold",
  fontStyle: "italic",
});

const PlusImage = styled("img")({
  width: "10px",
  height: "10px",
  marginLeft: "2px",
});

const CustomButtonWrapper = styled(Box)({
    margin: "0 5% 0 auto",
})

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <Component>
          <img
            style={{ width: "75px" }}
            src={FlipkartLogo}
            alt="Flipkart Logo"
          />
          <Box style={{ display: "flex", alignItems: "center" }}>
            <SubHeading>
              Explore{" "}
              <Box component={"span"} style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={PlusLogo} alt="Plus Logo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
