import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Skills() {
  const frontend = [
    
    { name: "React", logo: "/logo/reactJS.svg" },
    { name: "Next", logo: "/logo/next.svg" },
    { name: "React Router", logo: "/logo/reactrouter.svg" },
    { name: "Material UI", logo: "/logo/materialui.svg" },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    { name: "Framer-Motion", logo: "/logo/sm.svg" },
  ];

  const backend = [
    {
      name: "Node",
      logo: "/logo/node.svg",
    },
    {
      name: "Express",
      logo: "/logo/express.svg",
    },
   
    {
      name: "MySql",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "Mongo",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Mongoose",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    }
    ,
    {
      name: "FireBase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    },
    {
      name:"SupaBase",
      logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
    },{
      name: "Prisma",
      logo: "/logo/prisma.svg",
    }

    
  ];

  const tools = [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "/logo/Github.svg",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Postman",
      logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    
    {
      name: "Socket",
      logo: "/logo/ssss.svg",
    },
    
    {
      name: "Netlify",
      logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    },
    {
      name: "Cloudinary",
      logo: "/logo/cloudinary.svg",
    },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", }
    ,
    { name: "Neon", logo: "/logo/neon.svg", }
    ,
  ];

  const languages = [
    {
      name: "C",
      logo: "/logo/c.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    }
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="md" sx={{width: "100vw", bgcolor: "#000000ff", paddingTop: "50px", paddingBottom: "50px" }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "flex-start", // Changed from "center" to "flex-start"
            alignItems: "flex-start", // Changed from "center" to "flex-start"
            minHeight: "100vh",
            flexDirection: "column",
            marginTop: "100px",
            width: "100%",
          }}
        >
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                margin: "20px 0",
                color: "#0096dbff",
                textAlign: "left",
              }}
            >
              Frontend
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start", // Changed from "center" to "flex-start"
              }}
            >
              {frontend.map((tech) => (
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
                    padding: "20px",
                    marginBottom: "20px",
                    backgroundColor: "#3636362a",
                  }}
                >
                  <Box
                    component="img"
                    src={tech.logo}
                    alt={tech.name}
                    sx={{
                      width: { xs: "50px", sm: "70px", md: "80px" },
                      height: { xs: "50px", sm: "70px", md: "80px" },
                      mx: { xs: 1, sm: 2 }, // Restore original margins
                      mb: { xs: 1, sm: 2 },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      textAlign: "center", // Keep text centered
                      marginRight: "20px", // Restore original margins
                      marginLeft: "20px", // Restore original margins
                      color: "#ffffffce",
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                margin: "20px 0",
                color: "#0096dbff",
                textAlign: "left",
              }}
            >
              Backend
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start", // Changed from "center" to "flex-start"
              }}
            >
              {backend.map((tech) => (
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
                    padding: "20px",
                    backgroundColor: "#3636362a",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginRight: "20px", // Keep original margins
                      marginLeft: "20px", // Keep original margins
                      marginBottom: "20px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      textAlign: "center", // Keep text centered
                      marginRight: "20px", // Keep original margins
                      marginLeft: "20px", // Keep original margins
                      color: "#ffffffce",
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                margin: "20px 0",
                color: "#0096dbff",
                textAlign: "left",
              }}
            >
              Tools
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start", // Changed from "center" to "flex-start"
              }}
            >
              {tools.map((tech) => (
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
                    padding: "20px",
                    backgroundColor: "#3636362a",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginRight: "20px", // Keep original margins
                      marginLeft: "20px", // Keep original margins
                      marginBottom: "20px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      textAlign: "center", // Keep text centered
                      marginRight: "20px", // Keep original margins
                      marginLeft: "20px", // Keep original margins
                      color: "#ffffffce",
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                margin: "20px 0",
                color: "#0096dbff",
                textAlign: "left",
              }}
            >
              Languages {/* Fixed typo from "Languges" */}
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start", // Changed from "center" to "flex-start"
              }}
            >
              {languages.map((tech) => (
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
                    backgroundColor: "#3636362a",
                    borderRadius: "10px",
                    padding: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginRight: "20px", // Keep original margins
                      marginLeft: "20px", // Keep original margins
                      marginBottom: "20px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.2rem",
                      textAlign: "center", // Keep text centered
                      marginRight: "20px", // Keep original margins
                      marginLeft: "20px", // Keep original margins
                      color: "#ffffffce",
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}