import React, { useContext } from "react";
import { UserContext } from "./Routing";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//displaying name after sign up with correct data submition without any errors
const TodoList = () => {
  const { user } = useContext(UserContext);
  return (
    <Box className="mt-8">
      <Typography variant="h5" className="text-green-700 text-center">
        Welcome {user.firstname} {user.lastname}
      </Typography>
    </Box>
  );
};

export default TodoList;
