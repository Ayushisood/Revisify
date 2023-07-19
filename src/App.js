// import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/themes";
import { Topics } from "./topics";
import { TopicList } from "./components/TopicList/TopicList";

export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="Dashboard" />
              <Route path="/dashboard" element="Dashboard" />

              {/* Pages */}
              <Route path="/topics" element={<Topics />} />
              <Route path="/topics/:topic" element={<TopicList />}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
