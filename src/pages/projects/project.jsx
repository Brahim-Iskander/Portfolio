import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Footer from "../footer/footer.jsx";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";

export default function Projects() {
  const projects = [
    {
      id: 6,
      web: "https://iskander-blog.netlify.app/home",
      image: "/projectimgage/blogger.png",
      title: "Simple Blogger",
      technologies: ["React", "FireBase", "AI UI"],
      description:
        "📝 This Blogger web app is built with React and enhanced by AI-driven UI for a modern user experience. It uses Firebase for authentication and real-time CRUD operations.",
    },
    {
      id: 3,
      web: "https://tournoilivechat.netlify.app/chat",
      image: "/projectimgage/chat.png",
      title: "Live Chat",
      technologies: ["React", "Express.js", "Socket.io", "MongoDB"],
      description:
        "💬 A real-time chat app built with Socket.io, React, and MongoDB for smooth and instant communication.",
    },
    {
      id: 2,
      logo: "/projectimgage/makinapack.png",
      web: "https://makinapack.netlify.app/",
      image: "/projectimgage/makina.png",
      title: "Makina Pack",
      technologies: ["React", "Express.js", "Node.js", "MongoDB"],
      description:
        "📦 A full-stack web app for managing and showcasing packaging solutions with React and Node.js.",
    },

    {
      id: 4,
      web: "https://meteo-iskander.netlify.app/",
      image: "/projectimgage/weatherapp.png",
      title: "Simple-Weather-App",
      technologies: ["React", "Material-UI", "React-i18next"],
      description:
        "🌤️ A weather app with React, Material-UI, and i18next for multi-language support and clean UI.",
    },
    {
      id: 1,
      web: "https://iskander-todolist.netlify.app/",
      image: "/projectimgage/Todolist.png",
      title: "To-Do-List",
      technologies: ["React", "Material-UI"],
      description:
        "📝 A simple and responsive to-do list app using React and Material-UI to manage daily tasks.",
    },
    {
      id: 5,
      web: "https://crud-iskander-brahim.netlify.app/",
      image: "/projectimgage/pms.png",
      title: "CRUDS",
      technologies: ["Html", "Css", "JavaScript"],
      description:
        "⚙️ A basic CRUD web app using HTML, CSS, and JavaScript to create, read, update, and delete data.",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#000000", minHeight: "100vh", color: "white" }}
    >
      <div style={{ maxWidth: "960px", margin: "80px auto", padding: "0 16px" }}>
        <div
          style={{
            backgroundColor: "#000000",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              {/* Title */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "2.125rem",
                    margin: "0",
                    color: "white",
                  }}
                >
                  Groundbreaking Projects 🚀
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "normal",
                    fontSize: "15px",
                    maxWidth: "600px",
                    margin: "0",
                    lineHeight: "1.5",
                    color: "#ffffff98",
                  }}
                >
                  Pushing the boundaries of what's possible with innovative
                  full-stack applications that solve complex problems.
                </p>
              </div>

              {/* Cards */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    sx={{
                      maxWidth: 345,
                      backgroundColor: "#72616165",
                      color: "white",
                      border: "1px solid #918c8cff",
                    }}
                  >
                    <CardActionArea href={project.web} target="_blank">
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.image}
                        alt={project.title}
                      />
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          {project.logo && (
                            <img
                              src={project.logo}
                              alt="logo"
                              style={{ height: "35px", width: "35px" }}
                            />
                          )}
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: "bold", textAlign: "left" }}
                          >
                            {project.title}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          {project.technologies.map((tech, index) => (
                            <Chip
                              key={index}
                              label={tech}
                              size="small"
                              sx={{
                                backgroundColor: "#ffffff22",
                                color: "#ffffff88",
                                fontSize: "12px",
                              }}
                            />
                          ))}
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ color: "#ffffff88", textAlign: "justify" }}
                        >
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Box>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
