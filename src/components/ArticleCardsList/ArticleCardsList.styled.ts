import { styled } from "@mui/material/styles";

export const CardsList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 20px;
  align-items: start;
`;

export const CardItem = styled("li")`
  height: 100%;
`;
