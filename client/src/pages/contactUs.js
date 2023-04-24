import React from "react";


import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

//show list of movies along with their ids
function ContactUs() {
    return (
        <div>
            <NavBar/>
            <div className="marginAbove">
                <div className="contactUsBannerName">Contact Us</div>
                <div className="contactUsBannerDetails">Get in touch with our team</div>
            </div>
            <div className="contactMiddleDiv">
                <div className="contactForm">
                    <form>
                        <div className="inputDivContact">
                            <label for="fname">First Name</label><br></br>
                            <input type="text" id="fname" name="firstname" placeholder="Your name..."></input>
                        </div>
                        <div className="inputDivContact">
                            <label for="lname">Last Name</label><br></br>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name..."></input>
                        </div>
                        <div className="inputDivContact">
                            <label for="email">Email</label><br></br>
                            <input type="email" id="email" name="email" placeholder="Your email address..."></input>
                        </div>
                        <div className="inputDivContact">
                            <label for="subject">Subject</label>
                            <textarea id="subject" name="Message" placeholder="Let us know what you think..." />
                        </div>

                        <input className="bookNowButton" type="submit" value="Submit"></input>
                    </form>
                </div>
                <div className="contactInfo">
                    <ul>
                        <li> 
                            P: +353 XXX XXXX
                        </li>
                        <li>
                            E: email@email.com
                        </li>
                    </ul>
                </div>
            </div>
                <Footer />
        </div>
    );
}

export default ContactUs;

