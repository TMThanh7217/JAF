var MENU_PATH = "../json/menu.json"
var json = '[{"id":0,"name":"Chili noodle soup with fresh vegetables on top","type":"food","src":"../images/food/Chili-noodle-soup-with-fresh-vegetables-on-top.jpg","price":10,"status":"stocking"},{"id":1,"name":"Full english breakfast","type":"food","src":"../images/food/full-english-breakfast.jpg","price":13,"status":"stocking"},{"id":2,"name":"Green salad with bread","type":"food","src":"../images/food/green-salad-with-bread.jpg","price":8,"status":"stocking"},{"id":3,"name":"Healthy green beans salad with egg and hemp seeds","type":"food","src":"../images/food/healthy-green-beans-salad-with-egg-and-hemp-seeds.jpg","price":9,"status":"stocking"},{"id":4,"name":"Juicy beef burger","type":"food","src":"../images/food/juicy-beef-burger.jpg","price":10,"status":"stocking"},{"id":5,"name":"omelet with ham cheese spinach and tomatoes","type":"food","src":"../images/food/omelet-with-ham-cheese-spinach-and-tomatoes.jpg","price":12,"status":"stocking"}]'

function createHeaderNavbar() {
    var body = document.getElementsByTagName("body")[0];
    var html = "";
    html += "<nav class='navbar navbar-expand-sm bg-light navbar-light sticky-top mb-5'>"
    html += '<a class="navbar-brand" href="./index.html"><img src="../images/logo & bg & etc/JAF_logo.png" class="img-fluid" alt="" style="width: 50px;"></a>'
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
    html += '<a class="dropdown-item" href="#">Most comments</a>'
    html += '<a class="dropdown-item" href="#">Recently added</a>'
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
    html += '<a href="./credit.html">About Us</a>'
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
    var html = '<link rel="icon" href="../images/logo & bg & etc/JAF_logo.png">'
    var head = document.getElementsByTagName("head")[0];
    head.insertAdjacentHTML("afterbegin", html);
}

function loadMenu() {
    var data = JSON.parse(json);
    console.log(data)
}