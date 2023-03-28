let nav = document.getElementById('nav');

const logoURL = "./img/logo.png";
const logoAlt = "Reel Dreams";

// set this variable
const showTimesLink = ""

// nothing below here should be changed
let navInnerHTML = `
<img src="${ logoURL }" alt="${ logoAlt }">
<a href="${ showTimesLink }"><h3>SHOWTIMES</h3></a>

<div class="dropdown">
    <span>My Account</span>
    <div class="dropdown-content">
        <a href="/viewBookings">My Bookings</a><br>
        <a href="">Log Out</a>
    </div>
</div>
`;

nav.innerHTML = navInnerHTML;