import React from 'react'
import { tokens } from "../theme";
import { Box, Button, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle'; import { styled } from '@mui/material/styles';
import home from '../assets/home.png'

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? "#21313c" : '#536878',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderTopLeftRadius: 5
}));

const HomePage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <Box display="flex" flexDirection="row" m={1}>
                <Box mt={2}>
                    <Box display="flex" flexDirection="column">
                        <Box ml={5}>
                            LOGO
                        </Box>
                        <Box ml={5}>
                            <Typography
                                variant="h1"
                                fontSize={70}
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                DevProductiv
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box ml={10}>
                    <Box display="flex" flexDirection="column">
                        <Box ml={10}>
                            <Box component="img"
                                width="auto"
                                sx={{
                                    ml: 15,
                                    maxHeight: { xs: 500, md: 500 },
                                    maxWidth: { xs: 500, md: 500},
                                    borderRadius: 1,
                                }}
                                alt="image"
                                src={home}>
                            </Box>
                        </Box>
                        <Box ml={10}>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HomePage