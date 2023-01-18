import React from 'react'
import { tokens } from "../theme";
import { Box, Button, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle'; import { styled } from '@mui/material/styles';

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
                            <Paper sx={{ml: 5, background: colors.greenAccent[700], borderRadius: 5, width: "80%", height: "100%" }}>
                                <Box pt={1} ml={2} mt={4}>
                                    <Stack direction="row" spacing={1}>
                                        <Item><CircleIcon fontSize='10%' style={{ fill: '#ff4500' }} /></Item>
                                        <Item><CircleIcon fontSize='10%' style={{ fill: 'yellow' }} /></Item>
                                        <Item><CircleIcon fontSize='10%' style={{ fill: 'green' }} /></Item>
                                    </Stack>
                                </Box>
                                <Box p={1} ml={1} mr={1} mb={1}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="600"
                                        color={colors.grey[100]}
                                    >
                                        One way to increase productivity is to break large tasks into smaller, manageable chunks and setting specific deadlines for each one. This can help you stay focused and avoid feeling overwhelmed by the overall task at hand. Additionally, creating a schedule or to-do list for the day can also help you stay on track and prioritize your tasks. Establishing a routine and sticking to it can also help increase productivity.
                                    </Typography>
                                </Box>
                            </Paper>
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