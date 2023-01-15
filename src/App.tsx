import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));

const App = () => (
  <StyledEngineProvider injectFirst>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:articleId" element={<ArticlePage />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Suspense>
  </StyledEngineProvider>
);

export default App;
