import React from 'react'
import Link from 'next/link'

function Lab21_Layout({children,}: {children: React.ReactNode;}){
  return (
<>
  <nav className="navbar navbar-dark bg-dark px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" href="/">
            Default
          </Link>
           <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3">
              <Link className="nav-link" href="/Lab21">
                Main Page
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" href="/Lab21/template1">
                Template 1
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" href="/Lab21/template2">
                Template 2
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" href="/Lab21/template3">
                Template 3
              </Link>
            </li>
            </ul>

          </div>
          </nav>

      {children}

</>
  )
}

export default Lab21_Layout
