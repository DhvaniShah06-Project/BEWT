import React from "react";
import Link from "next/link";

export default function Lab20_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Brand */}
          <Link className="navbar-brand" href="/">
            Default
          </Link>

          {/* Links always visible */}
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3">
              <Link className="nav-link" href="/Lab20">
                Main Page
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" href="/Lab20/home">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" href="/Lab20/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Lab20/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mt-4">{children}</main>
    </div>
  );
}