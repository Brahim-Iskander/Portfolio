import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Contact() {
  const contactMethods = [
    { label: "Email", href: "mailto:iskanderbrahim2024@gmail.com", icon: <EmailIcon /> },
    { label: "Phone", href: "tel:+21621214512", icon: <PhoneIcon /> },
    { label: "WhatsApp", href: "https://wa.me/21621214512", icon: <WhatsAppIcon /> },
    { label: "GitHub", href: "https://github.com/brahim-iskander", icon: <GitHubIcon /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/iskander-brahim/", icon: <LinkedInIcon /> },
    { label: "Instagram", href: "https://www.instagram.com/iskander_brahim", icon: <InstagramIcon /> }
  ];

  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh", color: "white" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{
          backgroundColor: "#000000",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ width: "100%" }}>
            <div style={{ width: "100%" }}>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                marginBottom: "32px"
              }}>
                <h1 style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "2.125rem",
                  margin: "0",
                  color: "white"
                }}>
                  Get in Touch 🔭
                </h1>
                <p style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "15px",
                  maxWidth: "600px",
                  margin: "0",
                  lineHeight: "1.5",
                  color: "white"
                }}>
                  Have a question, feedback, or just want to say hello? We'd
                  love to hear from you! Feel free to reach out using the
                  contact information below, and we'll get back to you as soon
                  as possible. 😎
                </p>
              </div>
              
              <div style={{
                maxWidth: "600px",
                margin: "32px auto 0"
              }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: "100%"
                }}>
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target= "_blank"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "4px",
                        backgroundColor: "transparent",
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "inherit",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        cursor: "pointer",
                        transition: "all 0.2s ease-in-out",
                        minHeight: "40px",
                        
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = "white";
                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
                        e.target.style.backgroundColor = "transparent";
                      }}
                      onMouseDown={(e) => {
                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                      }}
                      onMouseUp={(e) => {
                        e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      {React.cloneElement(method.icon, { style: { fontSize: '25px' } })}
                      {method.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}