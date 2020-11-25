function createHeaderNavbar() {
    var body = document.getElementsByTagName("body")[0];
    var html = "";
    html += "<nav class='navbar navbar-expand-sm bg-light navbar-light sticky-top'>"
    html += '<a class="navbar-brand" href="./index.html"><img src="../images/JAF_logo.png" class="img-fluid" alt="" style="width: 50px;"></a>'
    html += '<ul class="navbar-nav">'
    html += '<li class="nav-item">'
    html += '<a href="./menu.html" class="nav-link">Menu</a>'
    html += '</li>'            
    html += '<li class="nav-item">'
    html += '<a class="nav-link" href="#">Food</a>'
    html += '</li>'
    html += '<li class="nav-item">'
    html += '<a class="nav-link" href="#">Drink</a>'
    html += '</li>'
    html += '<li class="nav-item dropdown">'
    html += '<a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">'
    html += 'Explore'
    html += '</a>'
    html += '<div class="dropdown-menu">'
    html += '<a class="dropdown-item" href="#">Best seller</a>'
    html += '<a class="dropdown-item" href="#">Best comment</a>'
    html += '<a class="dropdown-item" href="#">Newly added</a>'
    html += '</div>'
    html += '</li>'
    html += '</ul>'
    html += '<form class="form ml-auto search-bar mr-5 row">'
    html += '<input class="form-control search-bar-item search-field col-10" type="text" placeholder="Search">'
    html += '<button class="btn search-bar-item btn-search col-2" type="button"><i class="fa fa-search"></i></button>'
    html += '</form>'
    html += '<div class="navbar-nav ml-5">'
    html += '<button id="btn-login" class="btn btn-danger" type="button">Login</button>'    
    html += '</div>'
    html += '</nav>'
    body.insertAdjacentHTML("afterbegin", html)
    document.getElementById("btn-login").onclick = () => { window.location.href='./login.html'; }
}

function createFooter() {
    var body = document.getElementsByTagName("body")[0];
    var html = "";
    html += '<footer class="page-footer bg-light font-small pt-4">'
    html += '<div class="container-fluid text-center text-md-left">'
    html += '<div class="row">'
    html += '<div class="col-md-6 mt-md-0 mt-3">'
    html += '<h5 class="text-uppercase">About Team</h5>'
    html += '<p>Team with student members who are learning to use bs4 to create a website.</p>'
    html += '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quos, ratione cum tenetur perferendis et pariatur. Itaque veritatis vitae, eveniet delectus minus ut consequatur dolore enim quia odit atque sequi quidem maiores consequuntur provident quis assumenda ipsam. Odit deleniti fuga adipisci, velit sequi pariatur beatae ratione maxime, aperiam ad vel.</p>'
    html += '</div>'
    html += '<hr class="clearfix w-100 d-md-none pb-3">'
    html += '<div class="col-md-3 mb-md-0 mb-3">'
    html += '<h5 class="text-uppercase">Useful Links</h5>'
    html += '<ul class="list-unstyled">'
    html += '<li class="mb-3">'
    html += '<a href="./index.html">Home</a>'
    html += '</li>'
    html += '<li class="mb-sm-3">'
    html += '<a href="#!">About Us</a>'
    html += '</li>'
    html += '<li class="mb-sm-3">'
    html += '<a href="#!">Help</a>'
    html += '</li>'
    html += '<li class="mb-sm-3">'
    html += '<a href="#!">Your Account</a>'
    html += '</li></ul></div>'
    html += '<div class="col-md-3 mb-md-0 mb-3">'
    html += '<h5 class="text-uppercase">Contacts</h5>'
    html += '<ul class="list-unstyled"><li>'
    html += '<p>Address: HCM, 123 HCM Street, VN</p>'
    html += '</li><li><p>Phone: 0123456789</p>'
    html += '</li><li><p>Social: <a href="#">fb.com/jafteam</a></p></li><li>'
    html += '<p>E-Mail: jafteam@gmail.com</p>'
    html += '</li></ul></div></div></div>'
    html += '<div class="footer-copyright text-center text-white py-3" style="background-color: #dc3545;">© 2020 Copyright: '
    html += '<a href="https://mdbootstrap.com/" style="color: white; text-decoration: underline;""> MDBootstrap.com</a>'
    html += '</div>'
    body.insertAdjacentHTML("beforeend", html)
}

function createHeaderFooter() {
    createTitle();
    createHeaderNavbar();
    createFooter();
}

function createTitle() {
    var title = document.getElementsByTagName("title")[0];
    title.innerHTML = "JAF-Jerry And Friends";
    var html = '<link rel="icon" href="../images/JAF_logo.png">'
    var head = document.getElementsByTagName("head")[0];
    head.insertAdjacentHTML("afterbegin", html);
}