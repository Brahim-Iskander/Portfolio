import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { motion } from "motion/react";
import "./style.css"
import { Typewriter } from "react-simple-typewriter";

const style = {
  span: {
    color: "#3163cfff",
    fontWeight: "bold",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#4f46e5",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  },
};
export default function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ bgcolor: "#000000ff" }}>
        <Box
          sx={{
            bgcolor: "#000000ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            height: "60vh",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <motion.Box
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
          >
            <Typography
              
              sx={{ textAlign: "left", color: "white", fontWeight: "bold",fontSize: {
          xs: "1rem",  
          md: "3rem",   
        }, }}
            >
              <Typewriter
                words={[
                  "Hello, I am Brahim Iskander",
                  "Junior MERN Stack Developer",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
              />
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                color: "#ffffffad",
                maxWidth: "70%",
                fontWeight: "400",
                fontSize: { xs: "14px", md: "18px"}
              }}
            >
              Junior MERN Stack Developer passionate about building modern and
              responsive web applications using{" "}
              <span style={style.span}>MongoDB</span> ,{" "}
              <span style={style.span}>Express.js</span> ,{" "}
              <span style={style.span}>React</span> and{" "}
              <span style={style.span}>Node.js</span>. Focused on writing clean
              code, learning best practices, and creating user-friendly
              experiences.
            </Typography>
            <Box sx={{ textAlign: "left", marginTop: "20px" }}>
              <a
                href="/cv.pdf"
                download="Iskander_Brahim_CV.pdf"
                style={{ textDecoration: "none" }}
              >
                <input type="button" value="Download CV" style={style.button} />
              </a>
            </Box>
          </motion.Box>
          <motion.Box
            initial={{ x: "+100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.8 } }}
          >
            <img
              src="/logo/ska1.jpeg"
              alt="Brahim Iskander"
              style={{ height: "250px", width: "250px", borderRadius: "50%" }}
            />
          </motion.Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
