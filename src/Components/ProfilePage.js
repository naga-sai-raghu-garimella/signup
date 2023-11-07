import { Container, Box, Typography, List, ListItem, ListItemText, Button, Stack, TextField, } from '@mui/material';
import React, {useContext, useState} from 'react';
import { UserContext } from '../routes/routes';
import EditIcon from '@mui/icons-material/Edit';


const ProfilePage = () => {
    const { user, setUser } = useContext(UserContext);
    const[edit, setEdit] = useState(false);
    //  const[input, setInput] = useState(" ");

     const [userData, setUserData] = useState({
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email
     });

     console.log(userData);
    // const{user, setUser} = userData;

    const updateUserProfile = (newData) => {
        setUser((prevUser) => ({
          ...prevUser,
          ...newData,
        }));
      };
    

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };

//       const handleSubmitError = (e) => {
//     e.preventDefault();
//     setErrorMessage(message);

//     if (!message && user) {
//       navigate("/todolist");
//     } else {
//       navigate("/");
//     }
//   };

const handleUpdate = (newData) => {
      updateUserProfile(newData);
    setEdit(false);
  };

  const cancelUpdate = () =>{
    setEdit(false);
  }

    

  return (
    <Container>
       {!edit && <Box className="border border-stone-950 rounded-md mx-auto my-28 py-12">
            <Box className="flex flex-col items-center">
                <Typography variant="h4" className="font-semibold font-mono text-blue-500">Profile</Typography>
                <List>
          <ListItem className='space-x-6'>
              <ListItemText primary="User Name" />
              <Typography variant="" className="font-mono">{userData.firstname} {userData.lastname}</Typography>
          </ListItem>

          <ListItem>
              <ListItemText primary="Email" />
              <Typography variant="" className="font-mono">{userData.email}</Typography>
          </ListItem>
          <ListItem className='mx-10'>
            <Button variant="outlined" onClick={()=>{setEdit(true)}} startIcon={<EditIcon/>}>Edit Profile</Button>
          </ListItem>
          </List>
            </Box>
        </Box>}

       {edit && <Box className="border border-slate-600 p-7 max-w-fit mx-auto my-14 rounded-md">
          <form autoComplete="off" 
           onSubmit={()=>{handleUpdate(userData)}}
          >
            <Stack spacing={2}>
            <Typography variant = "h4" className='font-semibold font-mono text-blue-500'>Update Profile</Typography>
              <TextField
                required
                value={userData.firstname}
                onChange={handleChange}
                id="firstname"
                name="firstname"
                label="First Name"
              ></TextField>
              <TextField
                required
                value={userData.lastname}
                onChange={handleChange}
                id="lastname"
                name="lastname"
                label="Last Name"
              ></TextField>
              <TextField
                required
                value={userData.email}
                onChange={handleChange}
                id="email"
                name="email"
                label="Email Id"
              ></TextField>
              {/* <p className="text-red-700 font-thin font-serif pb-4">
                {errorMessage}
              </p> */}
            </Stack>
            <Box className=" flex justify-around mt-4">
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button type="submit" variant="outlined" onClick={cancelUpdate}>
              Cancel
            </Button>
            </Box>
          </form>
        </Box>}
    </Container>
  )
}

export default ProfilePage