import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "@components";
import { defaultAppClassName } from "@constants/classes";
import { useThemeDetector } from "@hooks";
import { Adjust, Contrast } from "@pages";

function App() {
  const isDarkTheme = useThemeDetector();

  const appClassName = isDarkTheme
    ? "bg-neutral-700 text-neutral-500 "
    : "bg-white ";

  return (
    <div className={appClassName + defaultAppClassName}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/adjust" element={<Adjust />} />
          <Route path="/contrast" element={<Contrast />} />
          <Route path="*" element={<Navigate to="/adjust" replace />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
