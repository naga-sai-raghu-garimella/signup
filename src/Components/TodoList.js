import React, { useContext } from "react";
import { UserContext } from "./Routing";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TodoTasks from "./TodoTasks";

//displaying name after sign up with correct data submition without any errors
const TodoList = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Box className="bg-sky-300 min-h-screen p-8">
        <Box className="pt-16">
          <Typography
            variant="h5"
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
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
