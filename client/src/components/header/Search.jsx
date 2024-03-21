import { InputBase, Box, styled } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)({
  backgroundColor: "#fff",
  width: "38%",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
});

const InputSearchBase = styled(InputBase)({
  paddingLeft: "20px",
  width: "100%",
  fontSize: "unset",
});

const SearchIconWrapper = styled(Box)({
  marginLeft: "auto",
  color: "#2874f0",
  padding: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
