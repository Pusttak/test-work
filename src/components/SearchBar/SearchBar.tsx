import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { debounce } from "lodash";

import { filterArticles } from "../../redux/articles-slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import s from "./SearchBar.module.scss";

const SearchBar: React.FC = () => {
  const currentQuery = useAppSelector((state) => state.query);
  const [query, setQuery] = useState<string>(currentQuery);
  const dispatch = useAppDispatch();

  const debouncedQuery = useRef(
    debounce((query) => {
      dispatch(filterArticles(query));
    }, 300)
  );

  useEffect(() => {
    debouncedQuery.current(query);
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <Box className={s.box}>
      <Typography className={s.text}>Filter by keywords</Typography>
      <div className={s.search}>
        <div className={s.iconBox}>
          <SearchIcon className={s.icon} />
        </div>
        <InputBase
          value={query}
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
          className={s.inputWrap}
        />
      </div>
    </Box>
  );
};

export default SearchBar;
