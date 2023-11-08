import React, { useContext, useState } from "react";
import {
  Stack,
  Container,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { checkValidateEmail, checkValidatePassword } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../routes/routes";

// Signup form
const SignUp = () => {
  const userData = useContext(UserContext); //useContext hook for creating app level data and used in any component
  const { user, setUser } = userData;

  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  const emailErrorMessage = checkValidateEmail(user.email);
  const passwordErrorMessage = checkValidatePassword(user.password);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitError = (e) => {
    e.preventDefault();

    const combinedErrorMessage = `${emailErrorMessage} ${passwordErrorMessage}`;
    setErrorMessage(combinedErrorMessage.trim());

    if (!emailErrorMessage && !passwordErrorMessage && user) {
      navigate("/todolist");
    } else {
      navigate("/");
    }
  };

  return (
    <Container className="min-h-screen w-full bg-slate-200 py-20">
      <Box className="mx-auto my-20 align-middle bg-white p-4 border rounded-lg lg:w-80 md:w-96 xs:w-full">
        <Typography className="text-blue-700 text-center" variant="h5">
          Sign Up
        </Typography>
        <Box className="shadow-lg p-7">
          <form autoComplete="off" onSubmit={handleSubmitError}>
            <Stack spacing={2}>
              <TextField
                required
                value={user.firstname}
                onChange={handleChange}
                id="firstname"
                name="firstname"
                label="First Name"
              ></TextField>
              <TextField
                required
                value={user.lastname}
                onChange={handleChange}
                id="lastname"
                name="lastname"
                label="Last Name"
              ></TextField>
              <TextField
                required
                value={user.email}
                onChange={handleChange}
                id="email"
                name="email"
                label="Email Id"
              ></TextField>
              <TextField
                required
                value={user.password}
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                label="Password"
              ></TextField>
              <p className="text-red-700 font-thin font-serif pb-4">
                {errorMessage}
              </p>
            </Stack>
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};
export default SignUp;
