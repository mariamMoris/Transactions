import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg border rounded-3">
  <div className="container ">
    <Link to={"home"} className="navbar-brand fs-1" >Customers Transactions</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"home"} className="nav-link active fs-2" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"chart"} className="nav-link fs-2" >Chart</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
      
    </>
  )
}
