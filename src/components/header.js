import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="">
                <div className="page-header">
                    <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                        <div className id="navbarNav">
                            <ul className="navbar-nav" id="leftNav">
                                <li className="nav-item">
                                    <a className="nav-link" id="sidebar-toggle" href="#"><i data-feather="arrow-left" /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>

                            </ul>
                        </div>

                        <div className id="headerNav">
                            <ul className="navbar-nav">

                                <li className="nav-item dropdown">
                                    <a className="nav-link notifications-dropdown" href="#" id="notificationsDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">3</a>
                                    <div className="dropdown-menu dropdown-menu-end notif-drop-menu" aria-labelledby="notificationsDropDown">
                                        <h6 className="dropdown-header">Notifications</h6>

                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link profile-dropdown" href="#" id="profileDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="../../assets/images/avatars/profile-image.png" alt="" /></a>
                                    <div className="dropdown-menu dropdown-menu-end profile-drop-menu" aria-labelledby="profileDropDown">


                                        <a className="dropdown-item" href="#"><i data-feather="log-out" />Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header
