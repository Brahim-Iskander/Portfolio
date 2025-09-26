import { useState } from "react";
import TerminalIcon from "@mui/icons-material/Terminal";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./navbar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function BasicGrid() {
  const [activeButton, setActiveButton] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const draweer = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Skills", href: "/skills" },
    { text: "Pricing", href: "/pricing" },
    { text: "Contact", href: "/contact" },
    {
      text: "GitHub",
      href: "https://github.com/brahim-iskander",
      icon: <GitHubIcon />,
    },
    {
      text: "Instagram",
      href: "https://www.instagram.com/iskander_brahim",
      icon: <InstagramIcon />,
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/iskander-brahim/",
      icon: <LinkedInIcon />,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List
        sx={{ backgroundColor: "#000000ff", color: "white", height: "100vh" }}
      >
        {draweer.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{ backgroundColor: "#000000ff", color: "white" }}
          >
            <ListItemButton
              component="a"
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
            >
              <ListItemIcon sx={{ color: "white" }}>
                {item.icon ? item.icon : ""}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <>
      {/* ✅ Desktop Navbar */}
      <Box
        sx={{
          flexGrow: 1,
          width: "100vw",
          display: { xs: "none", md: "block" },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            p: 2,
            bgcolor: "#000000ff",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 1000,
            borderBottom: "1px solid #3163cfff",
          }}
        >
          <Grid
            item
            md={4}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <TerminalIcon sx={{ color: "#3163cfff", fontSize: 30 }} />
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Brahim Iskander
            </Typography>
          </Grid>
          <Grid item md={4}>
            <ButtonGroup variant="none" aria-label="Basic button group">
              <Button
                className="btn"
                href="/"
                onClick={() => handleClick(1)}
                sx={{
                  borderBottom:
                    window.location.pathname === "/"
                      ? "2px solid blue"
                      : "none",
                  fontWeight:
                    window.location.pathname === "/" ? "bold" : "normal",
                  borderRadius: 0,
                }}
              >
                Home
              </Button>
              <Button
                className="btn"
                href="/projects"
                onClick={() => handleClick(2)}
                sx={{
                  borderBottom:
                    window.location.pathname === "/projects"
                      ? "2px solid blue"
                      : "none",
                  fontWeight:
                    window.location.pathname === "/projects"
                      ? "bold"
                      : "normal",
                  borderRadius: 0,
                }}
              >
                Projects
              </Button>
              <Button
                className="btn"
                href="/skills"
                onClick={() => handleClick(3)}
                sx={{
                  borderBottom:
                    window.location.pathname === "/skills"
                      ? "2px solid blue"
                      : "none",
                  fontWeight:
                    window.location.pathname === "/skills" ? "bold" : "normal",
                  borderRadius: 0,
                }}
              >
                Skills
              </Button>
              <Button
                className="btn"
                href="/pricing"
                onClick={() => handleClick(4)}
                sx={{
                  borderBottom:
                    window.location.pathname === "/pricing"
                      ? "2px solid blue"
                      : "none",
                  fontWeight:
                    window.location.pathname === "/pricing" ? "bold" : "normal",
                  borderRadius: 0,
                }}
              >
                Pricing
              </Button>
              <Button
                className="btn"
                href="/contact"
                onClick={() => handleClick(5)}
                sx={{
                  borderBottom:
                    window.location.pathname === "/contact"
                      ? "2px solid blue"
                      : "none",
                  fontWeight:
                    window.location.pathname === "/contact" ? "bold" : "normal",
                  borderRadius: 0,
                }}
              >
                Contact
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item md={4}>
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="github"
                sx={{ color: "white" }}
                href="https://github.com/brahim-iskander"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="instagram"
                sx={{ color: "white" }}
                href="https://www.instagram.com/iskander_brahim"
                target="_blank"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{ color: "white" }}
                aria-label="linkedin"
                href="https://www.linkedin.com/in/iskander-brahim/"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* ✅ Mobile Navbar */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          p: 2,
          bgcolor: "#000000ff",
          color: "white",
          width: "100vw",
          top: 0,
          left: 0,
          borderBottom: "1px solid #3163cfff",
          position: "fixed",
          justifyContent: "space-between", // align button right
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <Grid
          item
          md={4}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <TerminalIcon sx={{ color: "#3163cfff", fontSize: 20 }} />
          <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
            Brahim Iskander
          </Typography>
        </Grid>
        <Button onClick={toggleDrawer(true)} sx={{ marginRight: "20px" }}>
          <MenuIcon />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </>
  );
}
