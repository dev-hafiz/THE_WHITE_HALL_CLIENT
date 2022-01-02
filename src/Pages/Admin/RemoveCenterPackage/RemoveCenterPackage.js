import React, { useEffect, useState } from 'react';


const RemoveCenterPackage = () => {

    const [bookCenter, setBookCenters] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookCenter')
            .then(res => res.json())
            .then(data => setBookCenters(data))
    }, [])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to DELETE this Package')
        if (proceed) {
            const url = `http://localhost:5000/bookCenter/${id}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = bookCenter?.filter(singlebookCenter => singlebookCenter._id !== id);
                        setBookCenters(remaining);

                    }

                })
        }
    }
    return (
        <div>
        <div className="row">
        </div>
        <div className="d-flex mt-5 justify-content-center "><h1>Packages</h1></div>
        <div className="container text-black mt-5 mb-5" >
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {bookCenter.map(singlebookCenter => <div className="col" key={singlebookCenter.key} >
                    <div className="card h-100 hover custom-cart">
                        <img src={singlebookCenter.img} className="img-fluid rounded-start w-100" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{singlebookCenter.name}</h5>
                            <p className="card-text">{singlebookCenter.desc}</p>
                        </div>
                        <div className="card-footer  text-center">
                            <button className="btn btn-danger" onClick={() => handelDelete(singlebookCenter._id)}>Remove</button>
                        </div>
                    </div>
                </div>)
                }

            </div>
        </div >
    </div>
    );
};

export default RemoveCenterPackage;