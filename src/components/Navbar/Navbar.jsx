import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="bg-light">
      <div className="d-f">
        <a className="p-5 main  " href="/">Informetica</a>
        <div className="d-f right items " id="navbarSupportedContent">
          <ul className="d-f">
            <li className="me-2">
              <a className="" aria-current="page" href="/">About</a>
            </li>
            <li className="me-2 dropdown">
              <a className="" href="/">Services</a>
              <div className="dropdown-content">
                <span className="erow drop-ero ">^</span>
                <table className='drop-ele'>
                  <tr>
                    <td>farmers</td>
                    <td>farmers</td>
                    <td>farmers</td>
                    <td>farmers</td>
                  </tr>
                  <tr>
                    <td>education</td>
                    <td>education</td>
                    <td>education</td>
                    <td>education</td>
                  </tr>
                  <tr>
                    <td>foren</td>
                    <td>foren</td>
                    <td>foren</td>
                    <td>foren</td>
                  </tr>
                </table>
              </div>
            </li>
            <li className="me-2">
              <a className="" href="/">Your Interest</a>
            </li>
          </ul>
          <form className="d-f" role="search">
            <input className="search me-2" type="search" placeholder="Search" aria-label="Search" />
            <div className="langvage me-2 dropdown"><span>Lang</span> 
            <div className="dropdown-content">
                <span className="erow drop-ero ">^</span>
                <div className="drop-ele">
                  <div>gujarati</div>
                  <div>english</div>
                </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar