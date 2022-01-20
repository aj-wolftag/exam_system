import { MenuRounded, PersonOutlineRounded } from "@mui/icons-material";
import { AppBar, Avatar, Button, Card, CardHeader, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const UserDashboard=()=>{
    return(
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color='inherit' sx={{mr:2}}><MenuRounded/></IconButton>
                    <Typography variant="h6" sx={{flexGrow:1}}> User Dashboard</Typography>
                    <Button color="inherit"> Logout</Button>
                </Toolbar>
            </AppBar>
            <Card sx={{backgroundImage: 'linear-gradient(#D150FF, #9FBCFF)', height:'100px', margin:'10px', borderRadius:'10px'}}>
                <CardHeader avatar={<Avatar sx={{margin:'10px'}}><PersonOutlineRounded/></Avatar>} >
                </CardHeader>
            </Card>
        </Box>
    )
}

export default UserDashboard;