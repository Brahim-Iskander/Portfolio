import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Introduction from "../../components/introduction.jsx"
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

export default function Home() {
  const Technologie = [

    { name: "React", logo: "/logo/reactJS.svg" },
     {
      name: "Node",
      logo: "/logo/node.svg",
    },
    {
      name: "Express",
      logo: "/logo/express.svg",
    },
    
    {
      name: "Mongo",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
  ];
  const Gridmotion=motion(Grid)
  return (
    <React.Fragment >
      
      <Container maxWidth="lg" sx={{bgcolor: "#000000ff",marginTop:{xs:20,md:0}, }}>
        <Box sx={{ bgcolor: "#000000ff" ,display:"flex", alignItems:"center", justifyContent:"center" ,flexDirection:"column"}}>
          <Introduction />
          <Gridmotion initial={{ filter: "blur(20px)" }} transition={{ duration: 1 }}
  animate={{ filter: "none" }} item xs={12} sx={{  padding: "20px",marginTop: { xs: 20, md: 0 },  border: "1px solid #c5c5c5ff" , borderRadius: "10px", backgroundColor: "#3636362a", }}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                fontWeight: "bold",
                margin: "20px 0",
                color: "#ffffffa4",
                textAlign: "center",
              }}
            >
              Current Tech Stack
            </Typography>
          <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                // Changed from "center" to "flex-start"
              }}
            >
              {Technologie.map((tech) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={tech.name}
                  sx={{
                    display: "flex",
                    justifyContent: "center", // Keep centered for individual items
                    alignItems: "center", // Keep centered for individual items
                    flexDirection: "column",
                    border: "1px solid #c5c5c5ff",
                    borderRadius: "10px",
                    padding: "10px",
                    marginBottom: "20px",
                    backgroundColor: "#3636362a",
                  }}
                >
                  <Box
                    component="img"
                    src={tech.logo}
                    alt={tech.name}
                    sx={{
                      width: {  xs: "30px" },
                      height: {  xs: "30px" },
                     
                    }}
                  />
                  
                </Grid>
              ))}
            </Grid>
          </Gridmotion>
          
        </Box>
      </Container>
    </React.Fragment>
  );
}
