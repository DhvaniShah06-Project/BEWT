"use client";

import React from "react";
import Link from "next/link";

export default function Auth_Login() {
  return (
    <div style={styles.container}>
      {/* Background Decorative Glows */}
      <div style={styles.glowTop}></div>
      <div style={styles.glowBottom}></div>

      <form style={styles.box} onSubmit={(e) => e.preventDefault()}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Please login to continue</p>

        <input
          type="email"
          placeholder="Email Address"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <div style={styles.forgotPass}>
          <Link href="#" style={styles.linkSmall}>Forgot password?</Link>
        </div>

        <button style={styles.button}>Login</button>

        <p style={styles.footerText}>
          Don't have an account?{" "}
          <Link href="/Lab22/register" style={styles.link}>
            Register here
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
    backgroundColor: "#020617", // Deep Space Background
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  // Theme Glow Effects
  glowTop: {
    position: "absolute",
    top: "-10%",
    right: "-10%",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: "rgba(102, 126, 234, 0.15)",
    filter: "blur(120px)",
    pointerEvents: "none",
  },
  glowBottom: {
    position: "absolute",
    bottom: "-10%",
    left: "10%",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "rgba(118, 75, 162, 0.1)",
    filter: "blur(100px)",
    pointerEvents: "none",
  },
  box: {
    background: "rgba(255, 255, 255, 0.03)", // Ultra-thin glass
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)", // Safari Support
    padding: "45px",
    width: "400px",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    zIndex: 1,
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "32px",
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: "-0.025em",
  },
  subtitle: {
    margin: "0 0 35px 0",
    fontSize: "14px",
    color: "#94a3b8", // Muted slate
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "16px",
    marginBottom: "18px",
    borderRadius: "12px",
    background: "rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  },
  forgotPass: {
    textAlign: "right",
    marginBottom: "24px",
    marginTop: "-8px",
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
    boxShadow: "0 10px 20px -5px rgba(102, 126, 234, 0.4)",
    transition: "transform 0.2s ease",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  footerText: {
    marginTop: "28px",
    fontSize: "14px",
    color: "#64748b",
  },
  link: {
    color: "#a78bfa", // Lighter purple for dark mode visibility
    textDecoration: "none",
    fontWeight: "700",
  },
  linkSmall: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "600",
  }
};