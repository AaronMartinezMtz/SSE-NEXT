


import React from 'react'

export const Social = () => {
  return (
    <div style={{position: 'absolute', right: '1rem', top: '45%'}}>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a style={{color: '#1977F2' }} className="nav-link" href=""><i className="fa-brands fa-facebook fa-2xl"></i></a>
            </li>
            <li className="nav-item">
                <a style={{color: '#1C9BEF' }} className="nav-link" href=""><i className="fa-brands fa-twitter fa-2xl"></i></a>
            </li>
            <li className="nav-item">
                <a style={{color: '#FF0000' }} className="nav-link" href=""><i className="fa-brands fa-youtube fa-2xl"></i></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href=""><i className="fa-brands fa-tiktok fa-2xl"></i></a>
            </li>
        </ul>
    </div>
  )
}
