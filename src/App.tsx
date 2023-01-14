import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));

const App = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:articleId" element={<ArticlePage />} />
      <Route path="*" element={<p>Page not found</p>} />
    </Routes>
  </Suspense>
);

export default App;
