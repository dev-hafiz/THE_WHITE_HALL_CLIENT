import React from 'react';
import { Link } from 'react-router-dom';
import room1 from '../../../Images/centerPhoto/pic1.jpg';
import room2 from '../../../Images/centerPhoto/pic2.jpg';
import room3 from '../../../Images/centerPhoto/pic3.jpg';
import room4 from '../../../Images/centerPhoto/pic4.jpg';
import room5 from '../../../Images/centerPhoto/pic5.jpg';
import './Decoratiion.css';

const Decoration = () => {
    return (
        <div className="container my-5">
            <h2 className=" my-5 packages-header p-3 m-3 mx-auto text-center">
      Our Decoration   </h2>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <img width="100%" src={room1} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                <img width="100%" src={room2} alt="" />
                </div>
            </div>
            <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-12">
               <div className="side_box">
               <p>The wedding is a very important occasion for every person. We all want everything to be absolutely perfect. The demand for unique and different ideas for weddings have also increased.</p>
               <Link to="/allpackages"><button className="btn btn-outline-dark"> Take Service</button></Link>
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                <div className="mb-3">
                <img class="img-fluid" width="100%"  src={room3} alt="" />
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                <img  width="100%"  src={room5} alt="" />
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Decoration;