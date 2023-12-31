import React from 'react';
import {Link} from 'react-router-dom';
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">AboutUs</Link></li>
            
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to="/policies">Policies&Schemes</Link></li>
                        <li><Link to="/news">News</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Vit Bhopal<br />
		              Kothri, Sehore<br />
		              Madhya Pradesh 466114<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 9389841660<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:krishi_sashaktikaran@agri.net">
                      krishi_sashaktikaran@agri.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    )
}

export default Footer;