import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { debounce } from "lodash";
import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBar.styled";
import { filterArticles } from "../../redux/articles-slice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const SearchBar: React.FC = () => {
  const currentQuery = useAppSelector((state) => state.query);
  const [query, setQuery] = useState<string>(currentQuery);
  const dispatch = useAppDispatch();

  const debouncedQuery = useRef(
    debounce((query) => {
      if (query) {
        dispatch(filterArticles(query));
      }
    }, 300)
  );

  useEffect(() => {
    debouncedQuery.current(query);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      debouncedQuery.current.cancel();
    };
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <Box
      sx={{
        marginBottom: "40px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        Filter by keywords
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon
            sx={{
              color: "#575757",
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase
          value={query}
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
        />
      </Search>
    </Box>
  );
};

export default SearchBar;
