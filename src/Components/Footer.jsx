import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-info" style={{ height: '300px', width: '100%' }}>

                <div className="d-flex justify-content-center align-items-evenly">
                    <div className="overview" style={{ width: "400px" }}>
                        <Link to={"/"}>
                            <h5><i class="fa-solid fa-layer-group pe-3"></i>
                                <span style={{ color: '#400040', fontWeight: 'bolder' }}>Project</span> <span style={{ color: "white" }}>-Fair</span>
                            </h5>
                            <p style={{ color: "white", textAlign: "justify", fontFamily: "cursive" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore adipisci autem incidunt repellat, dignissimos necessitatibus officia eveniet ullam eligendi neque perspiciatis ipsum suscipit ab laborum mollitia. Recusandae, harum esse.</p>
                        </Link>
                    </div>

                    <div className="links d-flex flex-column ms-4 " style={{ color: 'white' }}>
                        <h4 style={{ fontWeight: 'bolder' }}>HOME</h4>

                        <Link to={"/"} style={{ textDecoration: 'none', color: "white" }}>LANDING PAGE</Link>

                        <Link to={"/cart"} style={{ textDecoration: 'none', color: "white" }}>CART</Link>

                        <Link to={"/wishlist"} style={{ textDecoration: 'none', color: "white" }}>WISHLIST</Link>


                    </div>



                    <div className="links d-flex flex-column ms-4" style={{ color: 'white' }}>
                        <h4 style={{ fontWeight: 'bolder' }}>GUIDES</h4>
                        <a style={{ textDecoration: "none", color: "white" }} target='blank' href="https://react.dev/">REACT</a>

                        <a style={{ textDecoration: "none", color: "white" }} target='blank' href="https://react-bootstrap.netlify.app/"> REACT BOOTSTRAP</a>

                        <a style={{ textDecoration: "none", color: "white" }} target='blank' href="https://fontawesome.com/">FONT AWESOME</a>
                    </div>


                    <div className="contact_us ms-3 " style={{ color: 'white' }}>
                        <h4>CONTACT US</h4>

                        <div className="d-flex">
                            <input type="text" name='' placeholder='Enter Your Name' className='form_control' />
                            <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
                        </div>
                        <div className=" d-flex justify-content-evenly align-item-center mt-3">
                            <i class="fa-brands fa-instagram fa-fade fa-2x"></i>
                            <i class="fa-brands fa-twitter fa-fade fa-2x"></i>
                            <i class="fa-brands fa-whatsapp fa-fade fa-2x"></i>
                            <i class="fa-brands fa-reddit fa-fade fa-2x"></i>
                        </div>
                    </div>



                </div>
            </div>


        </>

    )
}

export default Footer