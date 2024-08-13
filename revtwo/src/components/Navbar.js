import React, { useState, useEffect } from 'react';
import logo from '../assets/endurancelogo.svg';
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [user, setUser] = useState(null); 


    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
            path: "/home"
        },
        {
            text: "About",
            icon: <InfoIcon />,
            path: "/about"
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
            path: "/contact"
        },
        {
            text: "Work",
            icon: <CommentRoundedIcon />,
            path: "/work"
        },
        {
            text: "Calculate BMI",
            icon: <FitnessCenterIcon />,
            path: "/bmicalculator"
        },
        {
            text: "Discover Workouts",
            icon: <SportsGymnasticsIcon />,
            path: "/workout"
        },
        {
            text: "Calorie Tracker",
            icon: <MenuBookIcon />,
            path: "/workout"
        },
    ];

    return (
        <nav>
            <div className="nav-logo-container">
                <img src={logo} style={{ width: "180px", height: "90px", padding: "5px" }} alt="" />
            </div>

            <div className="navbar-links-container">
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/work' >Work</Link>
                <Link to='/bmicalculator' >Calculate BMI</Link>
                <Link to='/workout' >Discover Workouts!</Link>

                {user ? (
                    <div className="navbar-user-container">
                        <FaUserCircle style={{ marginRight: "10px" }} />
                        <span>{user.username}</span>
                    </div>
                ) : (
                    <Link to='/calorie'>
                        <button className='primary-button'>Calorie Tracker</button>
                    </Link>
                )}
            </div>

            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component={Link} to={item.path}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
