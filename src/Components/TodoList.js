import React, { useContext } from "react";
import { UserContext } from "../routes/routes";
import { Box, Typography } from "@mui/material";
import TodoTasks from "./TodoTasks";

//displaying name after sign up with correct data submition without any errors
const TodoList = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Box className="bg-slate-200 min-h-screen p-8">
        <Box className="pt-16">
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
        </Box>
        <TodoTasks />
      </Box>
    </>
  );
};

export default TodoList;
