import React from 'react';
import room1 from '../../../Images/centerPhoto/pic1.jpg';
import room2 from '../../../Images/centerPhoto/pic2.jpg';
import room3 from '../../../Images/centerPhoto/pic3.jpg';
import room4 from '../../../Images/centerPhoto/pic4.jpg';
import room5 from '../../../Images/centerPhoto/pic5.jpg';

const Decoration = () => {
    return (
        <div className="container my-5">
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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ullam officiis totam explicabo blanditiis ratione facere voluptatum autem beatae deserunt laboriosam enim ducimus voluptas unde, dolores consequatur ipsam tempore aliquam!</p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                <div className="col-lg-6 col-md-6 col-12">
                <img className="" width="100%" src={room3} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-3">
                <img width="100%" src={room4} alt="" /> 
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-6">
                <img  width="100%" src={room5} alt="" />
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Decoration;