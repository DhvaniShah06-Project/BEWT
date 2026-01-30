import Link from "next/link";

export default function Layout() {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand */}
        <Link className="navbar-brand" href="/">Home</Link>

        {/* Links always visible */}
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-3">
            <Link className="nav-link" href="/Lab20">Lab 20</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" href="/Lab21">Lab 21</Link>
          </li>
          <li className="nav-item me-3">
            <Link className="nav-link" href="/Lab22">Lab 22</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/Lab23">Lab 23</Link>
          </li>
        </ul>
      </div>
    </nav>
    Default page.tsx
    </>
  );
}