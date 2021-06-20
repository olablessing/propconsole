import React, { Component, Suspense } from 'react'

import Header from './header'
// import Footer from './footer'

import {
    Route, Switch, Redirect
} from 'react-router-dom';

export class Layout extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">
                    {/* <Leftside></Leftside> */}
                    <div id="content-wrapper" class="d-flex flex-column">
                        <div id="content">
                        <Header />
                            {/* <Home /> */}
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout

