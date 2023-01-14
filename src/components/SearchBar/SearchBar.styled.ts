import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const Search = styled("div")`
  position: relative;
  width: 600px;
  height: 50px;
  border-radius: 5px;
  background-color: white;
  border: solid 1px #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #fafafa;
  }
`;

export const SearchIconWrapper = styled("div")`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  height: 100%;
  pointer-events: none;
`;

export const StyledInputBase = styled(InputBase)`
  width: 100%;

  & .MuiInputBase-input {
    padding: 13px 20px;
    padding-left: 60px;
    color: #575757;
  }
`;
