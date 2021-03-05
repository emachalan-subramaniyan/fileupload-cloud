import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, ListItem, List, Divider, ListItemText, Paper, ListItemAvatar, Avatar, Typography,  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        width: "100%",
        flexDirection: 'column'
    },
    headerStyle: {
        backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    root: {
        width: '100%',
        // maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
      },
      paperCon: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center'
      },
      paperCon1: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45vh'
      },
      tabStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        marginBottom: "10px",
      },
      textstyle: {
          padding: 10,
          textAlign: 'right'
      },
      textstyle1: {
        padding: 10,
        textAlign: 'left'
    },
    textstyle2: {
        padding: 10,
        textAlign: 'center'
    },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
}));

const HomePage = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container maxWidth="lg">
            <div className={classes.headerStyle}>
                <Typography style={{ color: 'white' }} align="left" variant="h5">Username</Typography>
            </div>
            <Paper elevation={3} className={classes.paperCon}>
                <div>
                    <Typography component="span"
                                    variant="body2"
                                    align="right"
                                    className={classes.textstyle}
                                    color="textPrimary">
                        Whenever we want to sync the same file in different clients or keep multiple version of the file to provide history of updates to the file. It isn't good idea to always backup and transfer the whole file to and fro as it takes more space!!
                    </Typography>
                </div>
                <div className={classes.headerStyle}>

                </div>
            </Paper>
            <Paper elevation={3} className={classes.paperCon}>
                <div className={classes.headerStyle}>

                </div>
                <div>
                    <Typography component="span"
                                    variant="body2"
                                    align="left"
                                    className={classes.textstyle1}
                                    color="textPrimary">
                        Whenever we want to sync the same file in different clients or keep multiple version of the file to provide history of updates to the file. It isn't good idea to always backup and transfer the whole file to and fro as it takes more space!!
                    </Typography>
                </div>
            </Paper>
            <div className={classes.tabStyle}>
                <Paper elevation={3} className={classes.paperCon1}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                    <Typography component="span"
                                    variant="body2"
                                    align="center"
                                    className={classes.textstyle2}
                                    color="textPrimary">
                        Whenever we want to sync the same file in different clients or keep multiple version of the file to provide history of updates to the file. It isn't good idea to always backup and transfer the whole file to and fro as it takes more space!!
                    </Typography>
                </Paper>
                <Paper elevation={3} className={classes.paperCon1}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                    <Typography component="span"
                                    variant="body2"
                                    align="center"
                                    className={classes.textstyle2}
                                    color="textPrimary">
                        Whenever we want to sync the same file in different clients or keep multiple version of the file to provide history of updates to the file. It isn't good idea to always backup and transfer the whole file to and fro as it takes more space!!
                    </Typography>
                </Paper>
                <Paper elevation={3} className={classes.paperCon1}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                    <Typography component="span"
                                    variant="body2"
                                    align="center"
                                    className={classes.textstyle2}
                                    color="textPrimary">
                        Whenever we want to sync the same file in different clients or keep multiple version of the file to provide history of updates to the file. It isn't good idea to always backup and transfer the whole file to and fro as it takes more space!!
                    </Typography>
                </Paper>
            </div>
            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Ali Connors
              </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    to Scott, Alex, Jennifer
              </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Sandra Adams
              </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
            </Container>
        </div>
    )
}

export default HomePage;