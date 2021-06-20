import React, { Component } from 'react'

export class SideBar extends Component {
    render() {
        return (
            <div className="page-sidebar">
                <ul className="list-unstyled accordion-menu">
                    <li className="sidebar-title">
                        Main
                    </li>
                    <li className="active-page">
                        <a href="index.html"><i data-feather="home" />Dashboard</a>
                    </li>
                    <li className="sidebar-title">
                        Apps
                    </li>
                    <li>
                        <a href="email.html"><i data-feather="inbox" />Email</a>
                    </li>
                    <li>
                        <a href="calendar.html"><i data-feather="calendar" />Calendar</a>
                    </li>
                    <li>
                        <a href="social.html"><i data-feather="user" />Social</a>
                    </li><li>
                        <a href="file-manager.html"><i data-feather="message-circle" />File Manager</a>
                    </li>
                    <li className="sidebar-title">
                        Elements
                    </li>
                    <li>
                        <a href="index.html"><i data-feather="code" />Components<i className="fas fa-chevron-right dropdown-icon" /></a>
                        <ul className>
                            <li><a href="alerts.html"><i className="far fa-circle" />Alerts</a></li>
                            <li><a href="typography.html"><i className="far fa-circle" />Typography</a></li>
                            <li><a href="icons.html"><i className="far fa-circle" />Icons</a></li>
                            <li><a href="badge.html"><i className="far fa-circle" />Badge</a></li>
                            <li><a href="buttons.html"><i className="far fa-circle" />Buttons</a></li>
                            <li><a href="dropdowns.html"><i className="far fa-circle" />Dropdowns</a></li>
                            <li><a href="list-group.html"><i className="far fa-circle" />List Group</a></li>
                            <li><a href="toasts.html"><i className="far fa-circle" />Toasts</a></li>
                            <li><a href="modal.html"><i className="far fa-circle" />Modal</a></li>
                            <li><a href="pagination.html"><i className="far fa-circle" />Pagination</a></li>
                            <li><a href="popovers.html"><i className="far fa-circle" />Popovers</a></li>
                            <li><a href="progress.html"><i className="far fa-circle" />Progress</a></li>
                            <li><a href="spinners.html"><i className="far fa-circle" />Spinners</a></li>
                            <li><a href="accordion.html"><i className="far fa-circle" />Accordion</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="index.html"><i data-feather="gift" />Plugins<i className="fas fa-chevron-right dropdown-icon" /></a>
                        <ul className>
                            <li><a href="block-ui.html"><i className="far fa-circle" />Block UI</a></li>
                            <li><a href="session-timeout.html"><i className="far fa-circle" />Session Timeout</a></li>
                            <li><a href="tree-view.html"><i className="far fa-circle" />Tree View</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="index.html"><i data-feather="edit" />Form<i className="fas fa-chevron-right dropdown-icon" /></a>
                        <ul className>
                            <li><a href="form-elements.html"><i className="far fa-circle" />Form Elements</a></li>
                            <li><a href="form-layout.html"><i className="far fa-circle" />Form Layout</a></li>
                            <li><a href="form-validation.html"><i className="far fa-circle" />Form Validation</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="cards.html"><i data-feather="layers" />Cards</a>
                    </li>
                    <li>
                        <a href="index.html"><i data-feather="list" />Tables<i className="fas fa-chevron-right dropdown-icon" /></a>
                        <ul className>
                            <li><a href="tables.html"><i className="far fa-circle" />Basic Tables</a></li>
                            <li><a href="data-tables.html"><i className="far fa-circle" />Data Tables</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="charts.html"><i data-feather="pie-chart" />Charts</a>
                    </li>
                    <li className="sidebar-title">
                        Other
                    </li>
                    <li>
                        <a href="index.html"><i data-feather="star" />Pages<i className="fas fa-chevron-right dropdown-icon" /></a>
                        <ul className>
                            <li><a href="invoice.html"><i className="far fa-circle" />Invoice</a></li>
                            <li><a href="404.html"><i className="far fa-circle" />404 Page</a></li>
                            <li><a href="500.html"><i className="far fa-circle" />500 Page</a></li>
                            <li><a href="blank-page.html"><i className="far fa-circle" />Blank Page</a></li>
                            <li><a href="login.html"><i className="far fa-circle" />Login</a></li>
                            <li><a href="register.html"><i className="far fa-circle" />Register</a></li>
                            <li><a href="lockscreen.html"><i className="far fa-circle" />Lockscreen</a></li>
                            <li><a href="price.html"><i className="far fa-circle" />Price</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i data-feather="check-circle" />Documentation</a>
                    </li>
                </ul>
            </div>

        )
    }
}

export default SideBar
