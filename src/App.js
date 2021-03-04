import React, { useState, useEffect } from 'react';
import './App.css';
// import { useMutation, useQuery, gql } from '@apollo/client';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UploadData from './components/uploadData';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
import Register from './components/register';
import UsersList from './components/usersList';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link_style: {
    textDecoration: 'none',
    color: 'white'
  }
}));

const App = () => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [state, setState] = useState({
    file: null,
    accessToken: null,
    filepath: null
  })

  useEffect(async () => {
    let tokenDetails = await fetch("https://accounts.google.com/o/oauth2/token", {
      "method": "POST",
      "body": JSON.stringify({
        "client_id": '117392774494-cffu7uei4ain553kknt7q5vedda8nc62.apps.googleusercontent.com',
        "client_secret": '41HR6xp25UlHv94YryRUdptY',
        "refresh_token": '1//04dYB-he8ezK6CgYIARAAGAQSNwF-L9IrAO0pxmHzpSIAZnCY36AzsSrq3E4fbgJxs_rY-twAxWvRkmAc9AD5REshUCNND6SxWpQ',
        "grant_type": "refresh_token",
      })
    });
    tokenDetails = await tokenDetails.json();
    const accessToken = tokenDetails.access_token;
    console.log('access token', accessToken)
    if (accessToken) {
      setState({ ...state, accessToken: accessToken })
    }
  }, [])


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // console.log('accesstoken', 'Bearer '+ " " +String(state.accessToken))

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              FileUploader
          </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link to="/upload-data" className={classes.link_style}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Typography variant="body2" noWrap>
                    Upload Data
                </Typography>
                </IconButton>
              </Link>
              <Link to="/about" className={classes.link_style}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Typography variant="body2" noWrap>
                    About
                </Typography>
                </IconButton>
              </Link>
              <Link to="/contact" className={classes.link_style}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Typography variant="body2" noWrap>
                    Contact
                </Typography>
                </IconButton>
              </Link>
              <Link to="/login" className={classes.link_style}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Typography variant="body2" noWrap>
                    Login
                </Typography>
                </IconButton>
              </Link>
              <Link to="/register" className={classes.link_style}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Typography variant="body2" noWrap>
                    Register
                </Typography>
                </IconButton>
              </Link>
              <Link to="/users-list" className={classes.link_style}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Typography variant="body2" noWrap>
                    Users
                </Typography>
                </IconButton>
              </Link>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Switch>
          <Route path="/upload-data">
            <UploadData />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/users-list">
            <UsersList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
