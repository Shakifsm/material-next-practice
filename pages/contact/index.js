import React from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";

const Contact = () => {
  return (
        <Container maxWidth={false}>
            <Grid container>
                <Grid item={2}>
                <Sidebar></Sidebar>
                </Grid>
                <Grid item={10}>
                <h1>Contact</h1>
                </Grid>
            </Grid>
        </Container>
  );
};

export default Contact;
