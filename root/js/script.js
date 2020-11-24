function createHeaderNavbar() {
    var body = document.getElementsByTagName("body")[0];
    var html = "";
    html += "<nav class='navbar navbar-expand-sm bg-light navbar-light sticky-top'>"
    html += '<a class="navbar-brand" href="#"><img src="../images/JAF_logo.png" class="img-fluid" alt="" style="width: 50px;"></a>'
    html += '<ul class="navbar-nav">'
    html += '<li class="nav-item">'
    html += '<a href="#" class="nav-link">Menu</a>'
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
    html += '<button class="btn btn-danger" type="button">Login</button>'    
    html += '</div>'
    html += '</nav>'
    body.insertAdjacentHTML("afterbegin", html)
}