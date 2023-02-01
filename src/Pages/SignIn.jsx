import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
// import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import  {IconTextField}  from "../components/textfield/IconTextField";

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

//   const LoginApi = async (e) => {
//     // e.preventDefault();

//     console.log(userData, "userData");
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_URL}signin`,
//         userData
//       );
//       localStorage.setItem("Token", data?.token);
//       console.log(data, "data from response");

//       Navigate("/", { replace: true });
//     } catch (err) {
//       alert("wrong email");
//       console.log(err, "err");
//     }
//   };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const svgIcon = (
    <Icon sx={{ lineHeight: "0.75" }}>
      <img alt="edit" src="google-icon 2 (1).svg" />
    </Icon>
  );
  const svgIconGit = (
    <Icon sx={{ lineHeight: "0.75" }}>
      <img alt="edit" src="icons8-github 1.svg" />
    </Icon>
  );
  // const svgIconApple = (
  //   <Icon sx={{ lineHeight: "0.75" }}>
  //     <img alt="edit" src="apple-seeklogo.com 1.svg" />
  //   </Icon>
  // );

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          flexGrow: 1,
          m: 0,
          width: { sm: `calc(100%)` },
          height: "100vh",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ p: "16px" }}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <form >
            <Box sx={{ width: "400px" }}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "28px",
                    fontWeight: "500",
                    color: "#454545",
                    mb: 0.5,
                  }}
                >
                  Welcome back!
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    color: "#a4a4a4",
                    letterSpacing: "1px",
                  }}
                >
                  welcome back! Please enter your details.
                </Typography>
              </Box>
              <IconTextField
                size="small"
                label={"Enter your email"}
                sx={{}}
                type="text"
                fullWidth
                value={userData.email}
                onChange={(event) => {
                  setUserData((prevState) => ({
                    ...prevState,
                    email: event.target.value,
                  }));
                }}
              />
              <IconTextField
                size="small"
                label={"Enter your password"}
                sx={{ mt: 2.5 }}
                type="password"
                fullWidth
                value={userData.password}
                onChange={(event) => {
                  setUserData((prevState) => ({
                    ...prevState,
                    password: event.target.value,
                  }));
                }}
              />
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems="center"
                sx={{ my: 1 }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 18,
                          "& .MuiCheckbox-root ": { pt: "0px!important" },
                        },
                      }}
                    />
                  }
                  label="Remeber Password"
                  sx={{
                    "& .MuiTypography-root": { fontSize: 14, color: "#787878" },
                  }}
                />
                <Button
                  sx={{
                    textTransform: "none",
                    p: "0px",
                    px: "8px",
                    height: "28px",
                  }}
                >
                  Forgot Password
                </Button>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ fontWeight: "400", mt: 0.5 }}
                
                // type="submit"
              >
                Sign in
              </Button>
              <Box sx={{ display: "block", py: 2 }}>
                <Divider orientation="horizontal" flexItem>
                  <Typography variant="body2" sx={{ color: "#A0A0A0" }}>
                    OR
                  </Typography>
                </Divider>
              </Box>
              <Button
                fullWidth
                variant="outlined"
                startIcon={svgIcon}
                sx={{
                  textTransform: "none",
                  fontWeight: "400",
                  mb: 2,
                  borderColor: "#EBEBEB",
                  color: "#787878",
                }}
              >
                Sign in with Google
              </Button>
              <Button
                fullWidth
                variant="outlined"
                startIcon={svgIconGit}
                sx={{
                  textTransform: "none",
                  fontWeight: "400",
                  mb: 2,
                  borderColor: "#EBEBEB",
                  color: "#787878",
                }}
              >
                Sign in with Github
              </Button>{" "}
              <Box display={"flex"}>
                <Typography
                  sx={{
                    color: "#787878",
                    fontWeight: "400",
                    fontSize: "14px",
                    mr: 1,
                  }}
                >
                  Don't have an account
                </Typography>
                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      color: "#698AFF",
                      fontSize: "14px",
                    }}
                  >
                    Sign-Up
                  </Typography>
                </Link>
              </Box>
            </Box>
          </form>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ p: "16px", backgroundColor: "#EBEFFF" }}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          image
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;