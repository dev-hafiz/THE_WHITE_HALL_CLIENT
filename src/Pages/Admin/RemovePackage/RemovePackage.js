
import React, { useEffect, useState } from 'react';

const RemovePackage = () => {

    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to DELETE this Package')
        if (proceed) {
            const url = `/packages/${id}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = packages?.filter(singlePackage => singlePackage._id !== id);
                        setPackages(remaining);

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
                    {packages.map(singlePackage => <div className="col" key={singlePackage.key} >
                        <div className="card h-100 hover custom-cart">
                            <img src={singlePackage.img} className="img-fluid rounded-start w-100" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{singlePackage.name}</h5>
                                <p className="card-text">{singlePackage.desc}</p>
                            </div>
                            <div className="card-footer  text-center">
                                <button className="btn btn-danger" onClick={() => handelDelete(singlePackage._id)}>Remove</button>
                            </div>
                        </div>
                    </div>)
                    }

                </div>
            </div >
        </div>

    );
};

export default RemovePackage;