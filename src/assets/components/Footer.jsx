// import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="container bg-black">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-5 pb-5 border-top">
    <p className="col-md-4 mb-0 text-white">&copy; 2024 SAM Company, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"></svg>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
    </ul>
  </footer>
</div>

    </>
  )
}

export default Footer