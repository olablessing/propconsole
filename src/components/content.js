import React, { Component } from 'react'
import Todo from './todo'
import TodosList from './TodosList'
export class Content extends Component {
    state = {
        curTime: new Date().toLocaleString(),
    }
    render() {
        return (
            <div className="page-content">
                <div className="main-wrapper">
                    <div className="row">
                        <div className="col-md-6 col-xl-3">
                            <div className="card">
                                <div className="card-body ">

                                    <h2 class="text-start">132</h2>
                                    <p class="text-start">Public repos</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card ">
                                <div className="card-body">

                                    <h2 class="text-start">287</h2>
                                    <p class="text-start">Public gist</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card ">
                                <div className="card-body">

                                    <h2 class="text-start">287</h2>
                                    <p class="text-start">Followers</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card ">
                                <div className="card-body">

                                    <h2 class="text-start">287</h2>
                                    <p class="text-start">Following</p>

                                </div>
                            </div>
                        </div>
                    </div>
              
                    <div className="row">
                        <div className="col-md-12 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">About</h5>
                                    <p>Quisque vel tellus sit amet quam efficitur sagittis. Fusce aliquam pulvinar suscipit.</p>
                                    <ul className="list-unstyled profile-about-list">
                                        <li><i className="far fa-edit m-r-xxs" /><span>Studied at <a href="#">San Diego University</a></span></li>
                                        <li><i className="far fa-building m-r-xxs" /><span>Manager at <a href="#">Stacks</a></span></li>
                                        <li><i className="far fa-compass m-r-xxs" /><span>From <a href="#">New York</a></span></li>
                                        <li><i className="far fa-user m-r-xxs" /><span>Followed by 320 people</span></li>
                                        <li className="profile-about-list-buttons">
                                            <button className="btn btn-block btn-primary m-t-md">Follow</button>
                                            <button className="btn btn-block btn-success m-t-md">Message</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.curTime}</h5>
<TodosList />

                                    <div className="add-items d-flex"> <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" /> <button className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> </div>
                                    <div className="list-wrapper">
                                        <ul className="d-flex flex-column-reverse todo-list">
                                            <li>
                                                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" /> For what reason would it be advisable. <i className="input-helper" /></label> </div> <i className="remove mdi mdi-close-circle-outline" />
                                            </li>
                                            <li className="completed">
                                                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" defaultChecked /> For what reason would it be advisable for me to think. <i className="input-helper" /></label> </div> <i className="remove mdi mdi-close-circle-outline" />
                                            </li>
                                            <li>
                                                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" /> it be advisable for me to think about business content? <i className="input-helper" /></label> </div> <i className="remove mdi mdi-close-circle-outline" />
                                            </li>
                                            <li>
                                                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" /> Print Statements all <i className="input-helper" /></label> </div> <i className="remove mdi mdi-close-circle-outline" />
                                            </li>
                                            <li className="completed">
                                                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" defaultChecked /> Call Rampbo <i className="input-helper" /></label> </div> <i className="remove mdi mdi-close-circle-outline" />
                                            </li>
                                            <li>
                                                <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" /> Print bills <i className="input-helper" /></label> </div> <i className="remove mdi mdi-close-circle-outline" />
                                            </li>
                                        </ul>
                                    </div>



                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="card table-widget">
                                <div className="card-body">
                                    <h5 className="card-title">Recent Orders</h5>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Invoice</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><img src="../../assets/images/avatars/profile-image.png" alt="" />Anna Doe</th>
                                                    <td>Modern</td>
                                                    <td>#53327</td>
                                                    <td>$20</td>
                                                    <td><span className="badge bg-info">Shipped</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><img src="../../assets/images/avatars/profile-image.png" alt="" />John Doe</th>
                                                    <td>Alpha</td>
                                                    <td>#13328</td>
                                                    <td>$25</td>
                                                    <td><span className="badge bg-success">Paid</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><img src="../../assets/images/avatars/profile-image.png" alt="" />Anna Doe</th>
                                                    <td>Lime</td>
                                                    <td>#35313</td>
                                                    <td>$20</td>
                                                    <td><span className="badge bg-danger">Pending</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><img src="../../assets/images/avatars/profile-image.png" alt="" />John Doe</th>
                                                    <td>Circl Admin</td>
                                                    <td>#73423</td>
                                                    <td>$23</td>
                                                    <td><span className="badge bg-primary">Shipped</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><img src="../../assets/images/avatars/profile-image.png" alt="" />Nina Doe</th>
                                                    <td>Space</td>
                                                    <td>#54773</td>
                                                    <td>$20</td>
                                                    <td><span className="badge bg-success">Paid</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            
            </div>
        )
    }
}

export default Content
