let footer = document.createElement('div');
footer.id = 'footer'

let table = document.createElement('table');
table.className = "footerTable";
let tr = document.createElement('tr');
tr.className = "footerTR";

let adminFooter = document.createElement('td');
adminFooter.innerHTML = '<a href="adminPage.html"><p>Admin</p></a>';
let contactFooter = document.createElement('td');
contactFooter.innerHTML = '<td><a href=""><p>Contact Us</p></a></td>';
let socialsFooter = document.createElement('td');
socialsFooter.innerHTML= '<td><a href=""><p>SOCIALS</p></a></td>';

tr.append(adminFooter);
tr.append(contactFooter);
tr.append(socialsFooter);

table.append(tr);

footer.append(table)

document.body.append(footer);
