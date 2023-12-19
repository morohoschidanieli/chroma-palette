import { createContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header } from "@components";
import { defaultAppClassName } from "@constants/classes";
import { useThemeDetector } from "@hooks";
import { Adjust, Contrast } from "@pages";
import { init } from "@context";
import { InterfaceInit } from "context/init";

export const AppContext = createContext<InterfaceInit>(init);

function App() {
  const isDarkTheme = useThemeDetector();
  const [applicationData, setApplicationData] = useState<InterfaceInit>(init);

  const appClassName = isDarkTheme
    ? "bg-neutral-700 text-neutral-500 "
    : "bg-white ";

  return (
    <AppContext.Provider value={applicationData}>
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
    </AppContext.Provider>
  );
}

export default App;
