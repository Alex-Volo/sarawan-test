import { Route, Routes } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

// import { BookCard } from "./components/BookCard/BookCard";
import { Main } from "./pages/Main/Main";
import { NotFound } from "./pages/NotFound";
import { BookPage } from "./pages/BookPage/BookPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/book/:id",
      element: <BookPage />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  /**
   * basename нужен для корректной работы в gh pages
   * он же указан в homepage package.json и в index.html
   */
  { basename: "/sarawan-test" },
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
