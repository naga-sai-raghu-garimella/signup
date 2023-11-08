import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// created for nested routing(navbar and sidebar got fixed for todolist and  Profile pages)
const Content = () => {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        className="min-h-screen"
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Navbar />
        <Sidebar mode={mode} setMode={setMode} />
        <Box className="p-4">
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Content;
