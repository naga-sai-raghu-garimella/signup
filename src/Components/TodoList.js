import React, { useContext, useState } from "react";
import { UserContext } from "../routes/routes";
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";
import TodoTasks from "./TodoTasks";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

//displaying name after sign up with correct data submition without any errors
const TodoList = () => {
  // const { user } = useContext(UserContext);

  const[mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Box className="min-h-screen" bgcolor={"background.default"} color={"text.primary"}>
    <Navbar/> 
    <Sidebar mode={mode} setMode={setMode}/>
        {/* <Box className="pt-16">
          <Typography
            variant="h5"
            sx={{
              fontSize: "30px",
              fontFamily: "Raleway",
              fontWeight: "thin",
              color: "green",
              textAlign: "center",
            }}
          >
            Welcome {user.firstname} {user.lastname}
          </Typography>
        </Box> */}
        <TodoTasks />
      </Box>
    </ThemeProvider>
    </>
  );
};

export default TodoList;
