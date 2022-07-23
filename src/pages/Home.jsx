import { Box, Stack } from "@mui/material";
import React from "react";
import Add from "../components/add/Add";
import { Feed } from "../components/feed/Feed";
import { Navbar } from "../components/navbar/Navbar";
import { Rightbar } from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";

export const Home = () => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction={"row"} spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
};
