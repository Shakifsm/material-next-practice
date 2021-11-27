import { Container, Grid } from '@mui/material';
import React from 'react';
import PrimarySearchAppBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <PrimarySearchAppBar></PrimarySearchAppBar>
            <Container maxWidth={false} style={{marginTop:"100px", padding:"0"}}>
                <Grid container spacing={1}>
                    <Grid item lg={2}>
                        <Sidebar></Sidebar>
                    </Grid>
                    <Grid item lg={10} >
                        <div className={styles.header}></div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Header;