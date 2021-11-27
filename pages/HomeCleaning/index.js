import React from 'react';
import { Container, Grid } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import Image from "next/image"

const HomeCleaning = () => {
    return (
        <Container maxWidth={false}>
                <Grid container spacing={2}>
                    <Grid item lg={2}>
                        <Sidebar></Sidebar>
                    </Grid>
                    <Grid item lg={10}>
                        <Grid container spacing={2}>
                            <Grid item lg={3}>
                                <Image height="150" width="150" src="https://chaldn.com/_mpimage/air-fresheners?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35234&q=best&v=1&m=400&webp=1" alt="homeCleaning"></Image>
                                <br />
                                <button>Add To Cart</button>
                            </Grid>
                            <Grid item lg={3}>
                                <Image height="150" width="150" src="https://chaldn.com/_mpimage/dish-detergents?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D83456&q=best&v=1&m=400&webp=1" alt="homeCleaning"></Image>
                                <br />
                                <button>Add To Cart</button>
                            </Grid>
                            <Grid item lg={3}>
                                <Image height="150" width="150" src="https://chaldn.com/_mpimage/cleaning-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D83458&q=low&v=1&m=400&webp=1" alt="homeCleaning"></Image>
                                <br />
                                <button>Add To Cart</button>
                            </Grid>
                            <Grid item lg={3}>
                                <Image height="150" width="150" src="https://chaldn.com/_mpimage/napkins-paper-products?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35249&q=low&v=1&m=400&webp=1" alt="homeCleaning"></Image>
                                <br />
                                <button>Add To Cart</button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
    );
};

export default HomeCleaning;