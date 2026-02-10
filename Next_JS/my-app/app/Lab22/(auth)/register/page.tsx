"use client";

import React from "react";
import Link from "next/link";

export default function Auth_Register() {
  return (
    <div style={styles.container}>
      {/* Deep Space Background Orbs */}
      <div style={styles.glowTop}></div>
      <div style={styles.glowBottom}></div>

      <form style={styles.box} onSubmit={(e) => e.preventDefault()}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Join the network to start your journey</p>

        {/* Full Name Input */}
        <input
          type="text"
          placeholder="Full Name"
          style={styles.input}
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email Address"
          style={styles.input}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        {/* Confirm Password Input */}
        <input
          type="password"
          placeholder="Confirm Password"
          style={styles.input}
        />

        <button style={styles.button}>Initialize Account</button>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link href="/Lab22/login" style={styles.link}>
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#020617", // Matches your Deep Space theme
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  // Theme DNA Glows
  glowTop: {
    position: "absolute",
    top: "-15%",
    right: "-10%",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "rgba(102, 126, 234, 0.12)",
    filter: "blur(120px)",
    pointerEvents: "none",
  },
  glowBottom: {
    position: "absolute",
    bottom: "-15%",
    left: "5%",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "rgba(118, 75, 162, 0.08)",
    filter: "blur(100px)",
    pointerEvents: "none",
  },
  box: {
    background: "rgba(255, 255, 255, 0.03)", // Glass layer
    backdropFilter: "blur(25px)",
    WebkitBackdropFilter: "blur(25px)",
    padding: "45px",
    width: "400px",
    borderRadius: "28px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    zIndex: 1,
  },
  title: {
    marginBottom: "8px",
    fontSize: "30px",
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: "-0.03em",
  },
  subtitle: {
    marginBottom: "35px",
    fontSize: "14px",
    color: "#64748b",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "15px",
    marginBottom: "16px",
    borderRadius: "12px",
    background: "rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "16px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    marginTop: "15px",
    boxShadow: "0 10px 20px -5px rgba(118, 75, 162, 0.4)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    transition: "transform 0.2s ease",
  },
  footerText: {
    marginTop: "30px",
    fontSize: "14px",
    color: "#475569",
  },
  link: {
    color: "#a78bfa", // Visible purple for dark mode
    textDecoration: "none",
    fontWeight: "700",
  },
};