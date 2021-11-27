import React from "react";
import { Container, Grid, CssBaseline } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import Image from "next/image"

const AirFreshner = () => {
  return (
        <div>
            <CssBaseline></CssBaseline>
            <Container maxWidth={false}>
            <Grid container spacing={1}>
                <Grid item lg={2}>
                <Sidebar></Sidebar>
                </Grid>
                <Grid item lg={10} >
                <Grid container spacing={2}>
                            <Grid item lg={3} >
                                
                                <Image height="150" width="150" src="https://chaldn.com/_mpimage/odonil-air-freshener-mix-fragrance-buy-3-get-1-free-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D86109&q=low&v=1&m=400&webp=1" alt="homeCleaning"></Image>
                                <br />
                                <button>Add To Cart</button>
                                
                            </Grid>
                            <Grid item lg={3}>
                                <Image height="150" width="150" src="https://chaldn.com/_mpimage/odonil-air-freshener-block-lavender-meadows-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D86106&q=low&v=1&m=400&webp=1" alt="homeCleaning"></Image>
                                <br />
                                <button>Add To Cart</button>
                            </Grid>
                            <Grid item lg={3}>
                                <Image height="150" width="150" src="https://chaldn.com/_mpimage/odonil-air-freshener-block-orchid-dew-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D87862&q=best&v=1&m=400&webp=1" alt="homeCleaning"></Image>
                                <br />
                                <button>Add To Cart</button>
                            </Grid>
                            <Grid item lg={3}>
                                <Image height="150" width="150" src="https://chaldn.com/_mpimage/odonil-air-freshener-block-jasmine-mist-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D86105&q=low&v=1&m=400&webp=1" alt="homeCleaning"></Image>
                                <br />
                                <button>Add To Cart</button>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Container>
        </div>
  );
};

export default AirFreshner;
