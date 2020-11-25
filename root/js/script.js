var MENU_PATH = "../json/menu.json"
var json = '[{"id":0,"name":"Noodle","detail":"Chili noodle soup with fresh vegetables on top","type":"food","src":"../images/food/Chili-noodle-soup-with-fresh-vegetables-on-top.jpg","price":10,"status":"stocking"},{"id":1,"name":"Breakfast Set","detail":"Full english breakfast","type":"food","src":"../images/food/full-english-breakfast.jpg","price":13,"status":"stocking"},{"id":2,"name":"Salad #1","detail":"Green salad with bread","type":"food","src":"../images/food/green-salad-with-bread.jpg","price":8,"status":"stocking"},{"id":3,"name":"Salad #2","detail":"Healthy green beans salad with egg and hemp seeds","type":"food","src":"../images/food/healthy-green-beans-salad-with-egg-and-hemp-seeds.jpg","price":9,"status":"stocking"},{"id":4,"name":"Beef Burger","detail":"Juicy beef burger","type":"food","src":"../images/food/juicy-beef-burger.jpg","price":10,"status":"stocking"},{"id":5,"name":"Omelet","detail":"omelet with ham cheese spinach and tomatoes","type":"food","src":"../images/food/omelet-with-ham-cheese-spinach-and-tomatoes.jpg","price":12,"status":"stocking"}]'

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
    html += '<form class="form ml-auto search-bar mr-lg-5 mr-md-4 mr-sm-0 mr-xs-0 my-auto row">'
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
    let title = document.getElementsByTagName("title")[0];
    title.innerHTML = "JAF-Jerry And Friends";
    let html = '<link rel="icon" href="../images/logo & bg & etc/JAF_logo.png">'
    let head = document.getElementsByTagName("head")[0];
    head.insertAdjacentHTML("afterbegin", html);
}

function initMenu() {
    let data = JSON.parse(json);
    console.log(data)
    let menu = document.getElementById("menu");
    console.log(menu);

    let row1_products = data.slice(0, 3);
    let row2_products = data.slice(3);

    let row1 = createProductRow(row1_products);
    let row2 = createProductRow(row2_products);

    menu.appendChild(row1);
    menu.appendChild(row2);
}

function createProductRow(product_array) {
    let row = document.createElement("div");
    row.className = "row card-group";
    
    let col_1 = createProductCol();
    let col_1_card = createProductCard(product_array[0]);
    col_1.appendChild(col_1_card);

    let col_2 = createProductCol();
    let col_2_card = createProductCard(product_array[1]);
    col_2.appendChild(col_2_card);

    let col_3 = createProductCol();
    let col_3_card = createProductCard(product_array[2]);
    col_3.appendChild(col_3_card);

    row.appendChild(col_1);
    row.appendChild(col_2);
    row.appendChild(col_3);

    return row;
}

function createProductCol() {
    let col = document.createElement("div");
    col.className = "col-sm-12 col-md-12 col-lg-4 g-mb-30 tb-cell";
    return col;
}

function createProductCard(p_data) {
    // Card
    let card = document.createElement("div");
    card.className = "card u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5 h-100";
    
    // Card header
    let card_header = document.createElement("div");
    card_header.className = "card-header d-flex align-items-center justify-content-center g-bg-white";
    
    let card_img = document.createElement("img");
    card_img.className = "img-thumbnail";
    card_img.src = p_data.src;
    card_img.alt = "";
    card_header.appendChild(card_img);
    
    // Card body
    let card_body = document.createElement("div");
    card_body.className = "card-body d-flex flex-column";
    
    let card_body_header = document.createElement("h4");
    card_body_header.className = "h5 g-color-black g-font-weight-600 g-mb-10 mt-0 mb-3";
    card_body_header.innerHTML = p_data.name;
    
    let card_body_paragraph = document.createElement("p");
    card_body_paragraph.innerHTML = p_data.detail;
    
    let card_body_span = document.createElement("span");
    card_body_span.className = "d-block g-color-primary g-font-size-16 mb-3 mt-auto price";
    card_body_span.innerHTML = p_data.price + "$";
    
    let card_body_button = document.createElement("button");
    card_body_button.className = "btn btn-lg btn-block btn-order mb-2 mx-auto";
    card_body_button.type = "button";
    card_body_button.innerHTML = "Order Now";
    card_body_button.onclick = () => {
        document.location.href = "#";
    }

    card_body.appendChild(card_body_header);
    card_body.appendChild(card_body_paragraph);
    card_body.appendChild(card_body_span);
    card_body.appendChild(card_body_button);

    // Connect card header & card body
    card.appendChild(card_header);
    card.appendChild(card_body);

    return card;
}