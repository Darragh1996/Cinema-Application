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
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email address..."></input>

                        <label for="subject">Subject</label><br></br>
                        <textarea id="subject" name="Message" placeholder="Let us know what you think..." />

                        <input className="bookNowButton" type="submit" value="Submit"></input>
                    </form>
                </div>
                <div className="contactInfo">
                    <ul>
                        <li>
                            P: +353 XXX XXXX
                        </li>
                    </ul>
                    <ul>
                        <li>
                            E: email@email.com
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
                <Footer />
            </div>
        </div>
    );
}

export default ContactUs;

