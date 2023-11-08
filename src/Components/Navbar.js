import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  MenuItem,
  Typography,
  Menu,
  Avatar,
} from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Badge from "@mui/material/Badge";
import { Mail, Notifications } from "@mui/icons-material/";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

// navbar
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          TODO-LIST APP
        </Typography>
        <AccessibilityIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1541963463532-d68292c34b19%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%253D%253D%26w%3D1000%26q%3D80&tbnid=U4tLGpje4-JirM&vet=12ahUKEwiT4sD_z-uBAxWVT2wGHed_BJ0QMygBegQIARBu..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbook&docid=8OVmgDmSUbX_QM&w=1000&h=1498&q=images&ved=2ahUKEwiT4sD_z-uBAxWVT2wGHed_BJ0QMygBegQIARBu"
            onClick={() => setOpen(true)}
          ></Avatar>
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1541963463532-d68292c34b19%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%253D%253D%26w%3D1000%26q%3D80&tbnid=U4tLGpje4-JirM&vet=12ahUKEwiT4sD_z-uBAxWVT2wGHed_BJ0QMygBegQIARBu..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbook&docid=8OVmgDmSUbX_QM&w=1000&h=1498&q=images&ved=2ahUKEwiT4sD_z-uBAxWVT2wGHed_BJ0QMygBegQIARBu"
            onClick={() => setOpen(true)}
          ></Avatar>
          <Typography variant="span">Raghu</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link to="/profile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
