import React from 'react';
import './Register.css';
import loginPicture from '../../../src/Images/secuirePicture.png'
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Register = () => {
     return (
          <div className="container mb-5">
            <div className="row mt-5 d-flex align-items-center">
                <div className="col-lg6 col-md-6 col-12">
                <img width="100%" src={loginPicture} alt="" />
                </div>
                <div className="col-lg6 col-md-6 col-12 mb-5">
                    <div>
                        <div>
                        <h4 style={{color:'#212529'}} className="fw-bold text-center my-5">PLEASE REGISTER</h4>
                        </div>

                        <div>
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                
                                <Form.Control
                                name="name"
                                type="text"
                                placeholder="Your Full Name *"
                                required />
                               
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                
                                <Form.Control 
                                type="email" 
                                name="email"
                                placeholder="Enter Email *" 
                                required />
                               
                            </Form.Group>
                            
                            <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                                
                                <Form.Control
                                 type="password"
                                 name="password"
                                 placeholder="Password *"
                                 required />
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                                
                                <Form.Control 
                                name="password2"
                                type="password" 
                                placeholder="Re-Type Password *" 
                                required />
                            </Form.Group>
                            
                            <Button className="login-btn mt-4" variant="inherits" type="submit">
                                Register
                            </Button>
                            </Form>

                            <NavLink style={{textDecoration:'none'}} to="/login">
                              <button className="route-btn" variant="text" style={{color:'#585C5F'}}>Already have an account? Please login</button>
                              </NavLink>  
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
};

export default Register;