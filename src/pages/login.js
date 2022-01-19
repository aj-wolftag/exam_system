import { styled } from "@mui/system";
import { Button, Grid, Icon, Paper, TextField } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";
import { PhoneAndroidRounded } from "@mui/icons-material";

const TextBox = styled(TextField)(() => ({
    '& fieldset': {
      borderRadius: '25px',
    },
  }));

const Login=()=>{
    return(
        <Paper elevation={4} sx={{height:'27vh', width:300, padding:'30px',borderRadius:'10px', margin:'25vh auto', opacity:'90%'}}>
            <TextBox fullWidth label="Enter Username" size="small" sx={{marginBottom: '20px'}}/>
            <TextBox fullWidth label="Enter Password" size="small" sx={{marginBottom: '20px'}} type='password'/>
            <TextBox fullWidth label="Enter OTP" size="small" sx={{marginBottom: '10px'}} type='number'/>
            <Grid align='right'>
            <Button variant="contained" sx ={{borderRadius:'20px'}} endIcon={<PhoneAndroidRounded/>}>Request OTP</Button>
            </Grid>
            <br/>
            <Grid align='center'>
            <Button variant="contained" sx ={{borderRadius:'20px'}} >LogIN</Button>
            </Grid>
        </Paper>
    );
}

export default Login;