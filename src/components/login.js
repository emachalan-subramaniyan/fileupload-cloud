import React, {useState, useEffect }from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { Grid, Paper, TextField, Typography, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton,  } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const SELECT_USER = gql`
query MyQuery($email: String!, $password: String!) {
    user(where: {email: {_eq: $email}, password: {_eq: $password}}) {
      id
      email
    }
  }
  `;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        width:  "70%",
    },
    control: {
      padding: theme.spacing(2),
    },
    form_root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
        display: 'flex',
        flexDirection: 'column',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
  }));


const Login = () => {
    const classes = useStyles();
    const[state, setState] = useState({
        email: null,
        password: null,
        showPassword: false,
    })
    const [getUser, { loading, data, error }] = useLazyQuery(SELECT_USER);

    useEffect(() => {
        if(data){
            console.log(data.user[0])
        }
    },[data])

    if (loading) return <p>Loading ...</p>;


  const onLoginSubmit = () => {
    getUser({ variables: {
        email: state.email,
        password: state.password
    } })
  }

  const onHandleChange = (item, data) => {
    setState({...state, [item]: data.target.value})
  }

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return(
        <Grid container className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <form className={classes.form_root} noValidate autoComplete="off">
                    <Typography align="left" variant="body2">Username</Typography>
                    <TextField
                        onChange={(event) => onHandleChange('email', event)}
                        id="email"
                        label="Outlined"
                        variant="outlined"
                    />
                    <Typography align="left" variant="body2">Password</Typography>
                    {/* <TextField
                        id="password"
                        label="Outlined"
                        variant="outlined"
                        onChange={(event) => onHandleChange('password', event)}
                    /> */}
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={state.showPassword ? 'text' : 'password'}
                            value={state.password}
                            onChange={(event) => onHandleChange('password', event)}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                        </FormControl>
                    <Button variant="contained" color="primary" onClick={() => onLoginSubmit()}>
                        Login
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login;