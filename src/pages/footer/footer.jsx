
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "./footer.css";
export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1,marginTop: "50px",}}>
      <Grid
        container
        spacing={2}
        sx={{
          p: 2,
          bgcolor: "#000000ff",
          borderTop: "1px solid #333",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: {xs:"center",md:"space-around"},
          width: "100%",
          
        }}
      >
        <Grid
          item
          md={6}
          sx={{ display: "flex", alignItems: "center", gap: 1,justifyContent:"center" }}
        >
         
          <Typography sx={{ fontSize: "15px", fontWeight: "bold",textAlign:"center" }}>
            {" "}
           © 2025 Brahim Iskander. All rights reserved.
          </Typography>
        </Grid>
        <Grid item md={4}>
          
        </Grid>
        <Grid item md={6}>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="github" sx={{ color: "white" }} href="https://github.com/brahim-iskander" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="instagram" sx={{ color: "white" }} href="https://www.instagram.com/iskander_brahim" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }} aria-label="linkedin" href="https://www.linkedin.com/in/iskander-brahim/" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
