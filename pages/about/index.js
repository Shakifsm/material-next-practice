import React from 'react';
import { Container, Grid } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';

const About = () => {
    return (
        <Container maxWidth={false}>
                <Grid container>
                    <Grid item={2}>
                        <Sidebar></Sidebar>
                    </Grid>
                    <Grid item={10}>
                        <h1>About</h1>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default About;