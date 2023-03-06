let nav = document.getElementById('nav');

const logoURL = "./img/logo.png";
const logoAlt = "Reel Dreams";

// set this variable
const showTimesLink = ""

const userIconURL = "./img/userIcon.png";
const userIconAlt = "User Icon";

// nothing below here should be changed
let navInnerHTML = `
<img src="${ logoURL }" alt="${ logoAlt }">
<a href="${ showTimesLink }"><h3>SHOWTIMES</h3></a>
<img id="userIcon" src="${ userIconURL }" alt="${ userIconAlt }">"
`;

nav.innerHTML = navInnerHTML;