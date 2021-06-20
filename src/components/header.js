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
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Settings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Help</a>
                                </li>
                            </ul>
                        </div>
                        <div className="logo">
                            <a className="navbar-brand" href="index.html" />
                        </div>
                        <div className id="headerNav">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link search-dropdown" href="#" id="searchDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i data-feather="search" /></a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-lg search-drop-menu" aria-labelledby="searchDropDown">
                                        <form>
                                            <input className="form-control" type="text" placeholder="Type something.." aria-label="Search" />
                                        </form>
                                        <h6 className="dropdown-header">Recent Searches</h6>
                                        <a className="dropdown-item" href="#">charts</a>
                                        <a className="dropdown-item" href="#">new orders</a>
                                        <a className="dropdown-item" href="#">file manager</a>
                                        <a className="dropdown-item" href="#">new users</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link notifications-dropdown" href="#" id="notificationsDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false">3</a>
                                    <div className="dropdown-menu dropdown-menu-end notif-drop-menu" aria-labelledby="notificationsDropDown">
                                        <h6 className="dropdown-header">Notifications</h6>
                                        <a href="#">
                                            <div className="header-notif">
                                                <div className="notif-image">
                                                    <span className="notification-badge bg-info text-white">
                                                        <i className="fas fa-bullhorn" />
                                                    </span>
                                                </div>
                                                <div className="notif-text">
                                                    <p className="bold-notif-text">faucibus dolor in commodo lectus mattis</p>
                                                    <small>19:00</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="header-notif">
                                                <div className="notif-image">
                                                    <span className="notification-badge bg-primary text-white">
                                                        <i className="fas fa-bolt" />
                                                    </span>
                                                </div>
                                                <div className="notif-text">
                                                    <p className="bold-notif-text">faucibus dolor in commodo lectus mattis</p>
                                                    <small>18:00</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="header-notif">
                                                <div className="notif-image">
                                                    <span className="notification-badge bg-success text-white">
                                                        <i className="fas fa-at" />
                                                    </span>
                                                </div>
                                                <div className="notif-text">
                                                    <p>faucibus dolor in commodo lectus mattis</p>
                                                    <small>yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="header-notif">
                                                <div className="notif-image">
                                                    <span className="notification-badge">
                                                        <img src="../../assets/images/avatars/profile-image.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="notif-text">
                                                    <p>faucibus dolor in commodo lectus mattis</p>
                                                    <small>yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="header-notif">
                                                <div className="notif-image">
                                                    <span className="notification-badge">
                                                        <img src="../../assets/images/avatars/profile-image.png" alt="" />
                                                    </span>
                                                </div>
                                                <div className="notif-text">
                                                    <p>faucibus dolor in commodo lectus mattis</p>
                                                    <small>yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link profile-dropdown" href="#" id="profileDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="../../assets/images/avatars/profile-image.png" alt="" /></a>
                                    <div className="dropdown-menu dropdown-menu-end profile-drop-menu" aria-labelledby="profileDropDown">
                                        <a className="dropdown-item" href="#"><i data-feather="user" />Profile</a>
                                        <a className="dropdown-item" href="#"><i data-feather="inbox" />Messages</a>
                                        <a className="dropdown-item" href="#"><i data-feather="edit" />Activities<span className="badge rounded-pill bg-success">12</span></a>
                                        <a className="dropdown-item" href="#"><i data-feather="check-circle" />Tasks</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#"><i data-feather="settings" />Settings</a>
                                        <a className="dropdown-item" href="#"><i data-feather="unlock" />Lock</a>
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
