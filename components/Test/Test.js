import { Container, CssBaseline, Grid, Box } from "@mui/material";
import React from "react";



const Test = () => {

  return (
    <div>
      {/* <CssBaseline></CssBaseline> */}
      <div style={{ marginTop: "100px" }}>
        <Container maxWidth={false} >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <p>xs=4</p>
              <div
                style={{
                  backgroundColor: "red",
                  height: "50px",
                  width: "50px",
                }}
              ></div>
            </Grid>
            <Grid item xs={8}>
              <p>xs=8</p>
              <div
                style={{
                  backgroundColor: "red",
                  height: "50px",
                  width: "50px",
                }}
              ></div>
            </Grid>
            <Grid
              style={{ border: "2px solid blue", padding: "10px" }}
              item
              xs={4}
            >
                
              {/* <p>xs=4</p> */}
              
              <div
                style={{
                  backgroundColor: "red",
                  height: "50px",
                  width: "50px",
                }}
              ></div>
              
              <Grid container spacing={1}>
                  
                <Grid item  md={3} sm={4} xs={6}>
                  <div
                    style={{
                      backgroundColor: "hotpink",
                      borderRight: "2px solid black",
                      height: "40px",
                    }}
                  >
                    <p>1</p>
                  </div>
                </Grid>
                <Grid item md={3}  sm={4} xs={6} style={{border:"1px solid orange"}}>
                  <div
                    style={{
                      backgroundColor: "hotpink",
                      borderRight: "2px solid black",
                      height: "40px",
                    }}
                  >
                    <p>2</p>
                  </div>
                </Grid>
                <Grid item md={3}  sm={4} xs={6} style={{border:"1px solid orange"}}>
                  <div
                    style={{
                      backgroundColor: "hotpink",
                      borderRight: "2px solid black",
                      height: "40px",
                    }}
                  >
                    <p>3</p>
                  </div>
                </Grid>
                <Grid item md={3} sm={4} xs={6}>
                  <div
                    style={{
                      backgroundColor: "hotpink",
                      borderRight: "2px solid black",
                      height: "40px",
                    }}
                  >
                    <p>4</p>
                  </div>
                </Grid>
                
              </Grid>
              
            </Grid>

            <Grid item xs={8}>
              <p>xs=8</p>
              <div
                style={{
                  backgroundColor: "red",
                  height: "50px",
                  width: "50px",
                }}
              ></div>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 8" style={{border:"1px solid purple"}}>
                  <div>xs=8</div>
                </Box>
                <Box gridColumn="span 4" style={{border:"1px solid yellow"}}>
                  <div>xs=4</div>
                </Box>
                <Box gridColumn="span 4" style={{border:"1px solid cyan"}}>
                  <div>xs=4</div>
                </Box>
                <Box gridColumn="span 8" style={{border:"1px solid red"}}>
                  <div>xs=8</div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
    


    
  // <Container maxWidth={false} style={{border:"1px solid blue"}}>
  //   <Grid container srowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0,  }} >
  //     <Grid item xl={3} style={{border:"1px solid red"}}>
  //       <p>large</p>
  //     </Grid>
  //     <Grid item xl={3} style={{border:"1px solid red"}}>
  //       <p>large</p>
  //     </Grid>
  //     <Grid item xl={3} style={{border:"1px solid red"}}>
  //       <p>large</p>
  //     </Grid>
  //     <Grid item xl={3} style={{border:"1px solid red"}}>
  //       <p>large</p>
  //     </Grid>
  //   </Grid>
  
  // </Container>
  

  );
};



export default Test;
