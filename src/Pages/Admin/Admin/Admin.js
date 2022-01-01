import React, { useState } from 'react';
import AddAdmin from '../AddAdmin/AddAdmin ';
import AddPackage from '../AddPackage/AddPackage';
import AllOrders from '../AllOrders/AllOrders';
import RemovePackage from '../RemovePackage/RemovePackage';
import './Admin.css'
const Admin = () => {
    const [active, setActive] = useState('all orders')

    return (
        <div>
 <div className="row admin">
            <div className="d-flex flex-column flex-shrink-0 bg-light vh-100 col-md-1 col-3">
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">



                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('all orders')}><i className="fas fa-sort-amount-up-alt"></i><small>All Orders</small> </li>

                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('make admin')}> <i className="fas fa-users-cog"></i> <small>Make Admin</small> </li>


                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('add Package to DB')}> <i className="fa fa-first-order" ></i> <small>Add Package</small></li>
                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('Remove Package')}> <i className="fa fa-cog"></i> <small>Remove Package</small> </li>

                </ul>
            </div>
            <div className="col-md-11 col-9" >
                {
                    (active === 'all orders' && <AllOrders></AllOrders>) ||
                    (active === 'add Package to DB' && <AddPackage></AddPackage>) ||
                    (active === 'make admin' && <AddAdmin></AddAdmin>) ||
                    (active === 'Remove Package' && <RemovePackage></RemovePackage>)
                }
            </div>
        </div>        </div>
    );
};

export default Admin;