import React from 'react'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://github.com/" target='_blank'><i className="fa-brands fa-github"></i> Github User Finder</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header