import { styled } from "@mui/system";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { PhoneAndroidRounded, SendRounded } from "@mui/icons-material";
import Img from './imgs/bg_building.png';


const TextBox = styled(TextField)(() => ({
    '& fieldset': {
      borderRadius: '25px',
    },
  }));
const styles={
    containerStyle:{
        minWidth:`100%`,
        height:`100vh`,
        backgroundImage:`url(${Img})`,
        display: `grid`,
    }
}
const Login=()=>{
    return(
        <Container style={styles.containerStyle}>
            <Paper elevation={4} sx={{height:'250px', width:300, padding:'30px',borderRadius:'10px', margin:'25vh auto', opacity:'90%'}}>
                <TextBox fullWidth required label="Enter Username" size="small" sx={{marginBottom: '20px'}}/>
                <TextBox fullWidth required label="Enter Password" size="small" sx={{marginBottom: '20px'}} type='password'/>
                <TextBox fullWidth label="Enter OTP" size="small" sx={{marginBottom: '10px'}} type='number'/>
                <Grid align='right'>
                    <Button variant="contained" sx ={{borderRadius:'20px'}} endIcon={<PhoneAndroidRounded/>}>Request OTP</Button>
                </Grid>
                <br/>
                <Grid align='center'>
                    <Button variant="contained" color='success' sx ={{borderRadius:'20px'}} endIcon={<SendRounded/>}>LogIN</Button>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Login;