import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" >
                    <Toolbar>
                        <Typography variant="h6" component="h1" sx={{ flexGrow: 1, fontFamily: "cursive" }}>
                            Cars
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;