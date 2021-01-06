import React from 'react';
import Posts from "../Posts/posts";
import Form from "../Form/form";

import useStyles from "../../styles";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import imageNav from "../../images/photo.png";

const Layout = ({ currentId, setCurrentId }) => {

    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
        </Typography>
                <img className={classes.image} src={imageNav} alt="imageNavbar" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        className={classes.mainContainer}
                        container
                        justify="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default Layout;