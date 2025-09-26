import React from "react";
import { motion } from "motion/react";
export default function Pricing() {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$300",
      period: "per project",
      features: [
        "Basic Security Assessment",
        "Simple Web Application (React.JS)",
        "1 Month support",
        "Email notifications",
      ],
      popular: false,
    },
    {
      title: "Professional",
      price: "$2000",
      period: "per project",
      features: [
        "Full-Stack Web Platform (Express + React)",
        "Payment Integration (Stripe)",
        "Database Integration (MongoDB)",
        "Priority support",
        "3 Months Support ",
        "Docker Containerization",
        "Performance Optimization",
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "per project",
      features: [
        "Everything in Professional",
        "24/7 phone support",

        "Unlimited Revisions",
        "Advanced security",
      ],
      popular: false,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          Pricing
        </h1>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            margin: "60px auto",
            justifyContent: "center",
            flexDirection: window.innerWidth < 600 ? "column" : "row",
          }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log("hover started!")}
              key={index}
              style={{
                flex: "1 1 300px", // min width 300px, grow if space
                maxWidth: "350px",
                position: "relative",
                backgroundColor: plan.popular
                  ? "rgba(255, 255, 255, 0.15)"
                  : "rgba(255, 255, 255, 0.1)",
                border: plan.popular
                  ? "2px solid #0096dbff"
                  : "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                padding: "32px 24px",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#0096dbff",
                    color: "white",
                    padding: "6px 20px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Plan Title */}
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: "16px",
                }}
              >
                {plan.title}
              </h2>

              {/* Price */}
              <div style={{ marginBottom: "32px" }}>
                <span
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginLeft: "8px",
                  }}
                >
                  /{plan.period}
                </span>
              </div>

              {/* Features */}
              <div style={{ marginBottom: "32px" }}>
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "12px",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <span
                      style={{
                        color: "#4CAF50",
                        marginRight: "12px",
                        fontSize: "18px",
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  backgroundColor: plan.popular ? "#0096dbff" : "transparent",
                  border: plan.popular
                    ? "none"
                    : "2px solid rgba(255, 255, 255, 0.5)",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (plan.popular) {
                    e.target.style.backgroundColor = "#45a049";
                  } else {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.borderColor = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.popular) {
                    e.target.style.backgroundColor = "#0096dbff";
                  } else {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  }
                }}
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                {plan.popular ? "Get Started" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
