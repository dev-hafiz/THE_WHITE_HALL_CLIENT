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
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                
                                <Form.Control type="email" placeholder="Enter email" required />
                               
                            </Form.Group>

                            <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
                                
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>
                            
                            <Button className="login-btn mt-4" variant="inherits" type="submit">
                                Login
                            </Button>
                            </Form>

                            <NavLink style={{textDecoration:'none'}} to="/login">
                              <button  variant="text" style={{color:'#585C5F', mt:2
                              }}>Already have an account? Please login</button>
                              </NavLink>  
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
};

export default Register;