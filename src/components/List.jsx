import {
  Box,
  Container,
  CssBaseline,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const List = () => {
  return (
    <>
      <CssBaseline />
      <Container fixed sx={{ mt: 10 }}>
        {/* CREATE TO DO ITEMS HERE */}
        <Box sx={{ height: "80vh" }}>
          <Typography
            variant="h3"
            sx={{ display: "flex", justifyContent: "center", mb: 3 }}
          >
            To do list
          </Typography>
          {/* CREATE HERE */}
          <Box
            component="form"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField label="Enter a task here" variant="outlined" />
            <FormControl>
            </FormControl>
            <TextField label="Enter a category" variant="outlined" />
          </Box>
          <Box>DISPLAY HERE</Box>
        </Box>
      </Container>
    </>
  );
};

export default List;
