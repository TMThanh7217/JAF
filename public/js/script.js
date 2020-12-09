var MENU_PATH = "../json/menu.json"
var json = '[{"id":0,"name":"Coffee Americano","detail":"Cold coffee americano with ice cube","type":"drink","src":"../images/drink/cold-coffee-americano-with-ice-cube.jpg","price":12,"status":"stocking"},{"id":1,"name":"Lemon Drink","detail":"Fresh non alcoholic lemon drink","type":"drink","src":"../images/drink/fresh-non-alcoholic-lemon-drink.jpg","price":14,"status":"stocking"},{"id":2,"name":"Cocktail","detail":"Gin and tonic cocktail with orange and thyme","type":"drink","src":"../images/drink/gin-and-tonic-cocktail-with-orange-and-thyme.jpg","price":12,"status":"stocking"},{"id":3,"name":"Lime juice","detail":"Fresh lime juice","type":"drink","src":"../images/drink/lime-juice.jpg","price":9,"status":"stocking"},{"id":4,"name":"Special Drink #1","detail":"Summer good morning drink","type":"drink","src":"../images/drink/summer-good-morning-drink.jpg","price":10,"status":"stocking"},{"id":0,"name":"Noodle","detail":"Chili noodle soup with fresh vegetables on top","type":"food","src":"../images/food/Chili-noodle-soup-with-fresh-vegetables-on-top.jpg","price":10,"status":"stocking"},{"id":1,"name":"Breakfast Set #1","detail":"Full english breakfast","type":"food","src":"../images/food/full-english-breakfast.jpg","price":13,"status":"stocking"},{"id":2,"name":"Salad #1","detail":"Green salad with bread","type":"food","src":"../images/food/green-salad-with-bread.jpg","price":8,"status":"stocking"},{"id":3,"name":"Salad #2","detail":"Healthy green beans salad with egg and hemp seeds","type":"food","src":"../images/food/healthy-green-beans-salad-with-egg-and-hemp-seeds.jpg","price":9,"status":"stocking"},{"id":4,"name":"Beef Burger","detail":"Juicy beef burger","type":"food","src":"../images/food/juicy-beef-burger.jpg","price":10,"status":"stocking"},{"id":5,"name":"Omelet","detail":"Omelet with ham cheese spinach and tomatoes","type":"food","src":"../images/food/omelet-with-ham-cheese-spinach-and-tomatoes.jpg","price":12,"status":"stocking"},{"id":6,"name":"Stuffed bell pepper rice","detail":"Stuffed bell pepper rice","type":"food","src":"../images/food/stuffed-bell-pepper-rice.jpg","price":10,"status":"stocking"},{"id":7,"name":"Tacos #1","detail":"Tacos with pulled pork fresh vegetables and cream","type":"food","src":"../images/food/tacos-with-pulled-pork-fresh-vegetables-and-cream.jpg","price":10,"status":"stocking"},{"id":8,"name":"Couscous","detail":"vegetable-couscous-with-shrimps-and-fishegetable couscous with shrimps and fish","type":"food","src":"../images/food/vegetable-couscous-with-shrimps-and-fish.jpg","price":10,"status":"stocking"},{"id":9,"name":"Tacos #2","detail":"Vegetables tacos with cilantro and lemon","type":"food","src":"../images/food/vegetables-tacos-with-cilantro-and-lemon.jpg","price":10,"status":"stocking"},{"id":10,"name":"Classic burger","detail":"classic-burger","type":"food","src":"../images/food/classic-burger.jpg","price":12,"status":"stocking"},{"id":7,"name":"Orange juice","detail":"Freshly squeeze orange juice","type":"drink","src":"../images/drink/fresh-orange-juice.jpg","price":11,"status":"stocking"},{"id":12,"name":"Salmon","detail":"Salmon with seasame","type":"food","src":"../images/food/salmon-sesame.jpg","price":30,"status":"stocking"},{"id":11,"name":"Pizza","detail":"Pizza with tomato","type":"food","src":"../images/food/pizza-tomato.jpg","price":20,"status":"stocking"},{"id":13,"name":"Pancake","detail":"Pancake with delicious honey on top","type":"food","src":"../images/food/pancakes-honey.jpg","price":25,"status":"stocking"},{"id":5,"name":"Cappuccino","detail":"Hot cappuccino","type":"drink","src":"../images/drink/cappuccino.jpg","price":12,"status":"stocking"},{"id":6,"name":"Cereals muesli","detail":"Tasty cereals muesli","type":"drink","src":"../images/drink/cereals-muesli.jpg","price":10,"status":"stocking"}]'
var drinks_json = '[{"id":0,"name":"Coffee Americano","detail":"Cold coffee americano with ice cube","type":"drink","src":"../images/drink/cold-coffee-americano-with-ice-cube.jpg","price":12,"status":"stocking"},{"id":1,"name":"Lemon Drink","detail":"Fresh non alcoholic lemon drink","type":"drink","src":"../images/drink/fresh-non-alcoholic-lemon-drink.jpg","price":14,"status":"stocking"},{"id":2,"name":"Cocktail","detail":"Gin and tonic cocktail with orange and thyme","type":"drink","src":"../images/drink/gin-and-tonic-cocktail-with-orange-and-thyme.jpg","price":12,"status":"stocking"},{"id":3,"name":"Lime juice","detail":"Fresh lime juice","type":"drink","src":"../images/drink/lime-juice.jpg","price":9,"status":"stocking"},{"id":4,"name":"Special Drink #1","detail":"Summer good morning drink","type":"drink","src":"../images/drink/summer-good-morning-drink.jpg","price":10,"status":"stocking"},{"id":5,"name":"Cappuccino","detail":"Hot cappuccino","type":"drink","src":"../images/drink/cappuccino.jpg","price":12,"status":"stocking"},{"id":6,"name":"Cereals muesli","detail":"Tasty cereals muesli","type":"drink","src":"../images/drink/cereals-muesli.jpg","price":10,"status":"stocking"},{"id":7,"name":"Orange juice","detail":"Freshly squeeze orange juice","type":"drink","src":"../images/drink/fresh-orange-juice.jpg","price":11,"status":"stocking"}]'
var foods_json = '[{"id":0,"name":"Noodle","detail":"Chili noodle soup with fresh vegetables on top","type":"food","src":"../images/food/Chili-noodle-soup-with-fresh-vegetables-on-top.jpg","price":10,"status":"stocking"},{"id":1,"name":"Breakfast Set #1","detail":"Full english breakfast","type":"food","src":"../images/food/full-english-breakfast.jpg","price":13,"status":"stocking"},{"id":2,"name":"Salad #1","detail":"Green salad with bread","type":"food","src":"../images/food/green-salad-with-bread.jpg","price":8,"status":"stocking"},{"id":3,"name":"Salad #2","detail":"Healthy green beans salad with egg and hemp seeds","type":"food","src":"../images/food/healthy-green-beans-salad-with-egg-and-hemp-seeds.jpg","price":9,"status":"stocking"},{"id":4,"name":"Beef Burger","detail":"Juicy beef burger","type":"food","src":"../images/food/juicy-beef-burger.jpg","price":10,"status":"stocking"},{"id":5,"name":"Omelet","detail":"Omelet with ham cheese spinach and tomatoes","type":"food","src":"../images/food/omelet-with-ham-cheese-spinach-and-tomatoes.jpg","price":12,"status":"stocking"},{"id":6,"name":"Stuffed bell pepper rice","detail":"Stuffed bell pepper rice","type":"food","src":"../images/food/stuffed-bell-pepper-rice.jpg","price":10,"status":"stocking"},{"id":7,"name":"Tacos #1","detail":"Tacos with pulled pork fresh vegetables and cream","type":"food","src":"../images/food/tacos-with-pulled-pork-fresh-vegetables-and-cream.jpg","price":10,"status":"stocking"},{"id":8,"name":"Couscous","detail":"vegetable-couscous-with-shrimps-and-fishegetable couscous with shrimps and fish","type":"food","src":"../images/food/vegetable-couscous-with-shrimps-and-fish.jpg","price":10,"status":"stocking"},{"id":9,"name":"Tacos #2","detail":"Vegetables tacos with cilantro and lemon","type":"food","src":"../images/food/vegetables-tacos-with-cilantro-and-lemon.jpg","price":10,"status":"stocking"},{"id":10,"name":"Classic burger","detail":"classic-burger","type":"food","src":"../images/food/classic-burger.jpg","price":12,"status":"stocking"},{"id":11,"name":"Pizza","detail":"Pizza with tomato","type":"food","src":"../images/food/pizza-tomato.jpg","price":20,"status":"stocking"},{"id":12,"name":"Salmon","detail":"Salmon with seasame","type":"food","src":"../images/food/salmon-sesame.jpg","price":30,"status":"stocking"},{"id":13,"name":"Pancake","detail":"Pancake with delicious honey on top","type":"food","src":"../images/food/pancakes-honey.jpg","price":25,"status":"stocking"}]'
var staff_json = '[{"id":"18127130","name":"Tran Phuoc Loc","avt":"","position":"Worker","quote":"OK, FINE, THANKS!"},{"id":"18127217","name":"Trinh Minh Thanh","avt":"","position":"Worker","quote":"STELLAAAAAAAAAAAA!!!!!!!!!!!!"},{"id":"18127xxx","name":"Tran Dinh Phat","avt":"","position":"Worker","quote":"WIBU NEVER DIE!!!!!!!!!!!!!"}]'





function createTitle() {
    let title = document.getElementsByTagName("title")[0];
    title.innerHTML = "JAF-Jerry And Friends";
    let html = '<link rel="icon" href="../images/logo & bg & etc/JAF_logo.png">'
    let head = document.getElementsByTagName("head")[0];
    head.insertAdjacentHTML("afterbegin", html);
}

function initMenu() {
    let data = JSON.parse(json);
    let menu = document.getElementById("menu");
  
    let row1_products = data.slice(0, 3);
    let row2_products = data.slice(3);

    let row1 = createProductRow(row1_products);
    let row2 = createProductRow(row2_products);

    menu.appendChild(row1);
    menu.appendChild(row2);
}

function initFoodMenu() {
    let data = JSON.parse(foods_json);
    let rows = getRows(data, 3);
    let initRows = rows.splice(0, 2);
    let menu = document.getElementById("food_menu");
    for(let line of rows) {
        let row = createProductRow(line);
        menu.appendChild(row);
    }
    
    initSeeMoreBtn();
}

function initSeeMoreBtn() {
    let body = document.getElementsByClassName("container-fluid")[0];
    let moreBtn = document.createElement("button");
    let container = document.createElement("div");
    container.className = "container-fluid d-flex justify-content-center";
    moreBtn.className = "btn btn-danger btn-large btn-seemore mx-auto mb-3";
    moreBtn.innerHTML = "See more";

    container.appendChild(moreBtn);
    body.appendChild(container);
}

function initFoodMenuOnIndex() {
    let data = JSON.parse(foods_json);
    let rows = getRows(data, 3);
    let menu = document.getElementById("food_menu");
    let row = createProductRow(rows[0]);
    row.id = "food_menu_tmp";
    menu.appendChild(row);
    let more = document.createElement("div");
    let btn = document.createElement("button");
    more.id = "more_food";
    btn.className = "btn-order";
    btn.innerHTML = "More";
    btn.onclick = function() {
        location.href = "food_menu.html";
    };
    more.className = "d-flex justify-content-center";
    more.appendChild(btn);
    menu.appendChild(more);
}

function initMoreFoodMenu() {
    let tmp2 = document.getElementById("more_food");
    tmp2.remove();
    let tmp1 = document.getElementById("food_menu_tmp");
    tmp1.remove();
    initFoodMenu();
}

function initDrinkMenu() {
    let data = JSON.parse(drinks_json);
    let rows = getRows(data, 3);
    console.log(rows)
    let menu = document.getElementById("drink_menu");
    for(let line of rows) {
        let row = createProductRow(line);
        console.log(line);
        menu.appendChild(row);
    }
}

function initDrinkMenuOnIndex() {
    let data = JSON.parse(drinks_json);
    let rows = getRows(data, 3);
    console.log(rows)
    let menu = document.getElementById("drink_menu");
    let row = createProductRow(rows[0]);
    row.id = "drink_menu_tmp";
    console.log(row);
    menu.appendChild(row);
    let more = document.createElement("div");
    let btn = document.createElement("button");
    more.id = "more_drink";
    btn.className = "btn-order";
    btn.innerHTML = "More";
    btn.onclick = function() {
        location.href = "drink_menu.html";
    };
    more.className = "d-flex justify-content-center";
    more.appendChild(btn);
    menu.appendChild(more);
}

function initMoreDrinkMenu() {
    let tmp2 = document.getElementById("more_drink");
    tmp2.remove();
    let tmp1 = document.getElementById("drink_menu_tmp");
    tmp1.remove();
    initDrinkMenu();
}

function _getRows(data, cap) {
    let rows = []; 
    for(let i = 0; i < data.length; i += cap) {
        let row_data = data.slice(i, i + cap);
        rows.push(row_data);
    }
    
    return rows;
}

function createProductRow(row_data_array) {
    let row = document.createElement("div");
    row.className = "row card-group";
    
    for(let elem of row_data_array) {
        let cell = createProductCol();
        let cell_data = createProductCard(elem);
        cell.appendChild(cell_data);
        row.appendChild(cell);
    }

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

function initCreditPage() {
    let data = JSON.parse(staff_json);
    let credit = document.getElementById("credit");
    for(let person of data) {
        let card = createProfileCard(person);
        credit.appendChild(card);
    }
}

function createProfileCard(data) {
    // Card
    let card = document.createElement("div");
    card.className = "col-lg-3 col-md-12 col-sm-12 mx-auto card u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5 h-100 card-profile";
    
    // Card header
    let card_header = document.createElement("div");
    card_header.className = "card-header d-flex align-items-center justify-content-center g-bg-white";
    
    let card_img = document.createElement("img");
    card_img.className = "img-thumbnail img-profile";
    let avt_src = data.avt == "" ? "../images/logo & bg & etc/temp_avatar.png": data.avt;
    card_img.src = avt_src;
    card_img.alt = "";
    card_header.appendChild(card_img);
    
    // Card body
    let card_body = document.createElement("div");
    card_body.className = "card-body d-flex flex-column";
    
    let card_body_header = document.createElement("h4");
    card_body_header.className = "h5 g-color-black g-font-weight-600 g-mb-10 mt-0 mb-3";
    card_body_header.innerHTML = data.name;
    
    let card_body_id = document.createElement("p");
    card_body_id.innerHTML = data.id;
    
    let card_body_pos = document.createElement("p");
    card_body_pos.className = "d-block g-color-primary g-font-size-16 mb-3 mt-auto quote";
    card_body_pos.innerHTML = data.position;

    let card_body_quote = document.createElement("p");
    card_body_quote.innerHTML = data.quote;
    
    card_body.appendChild(card_body_header);
    card_body.appendChild(card_body_id);
    card_body.appendChild(card_body_pos);
    card_body.appendChild(card_body_quote);
    
    // Connect card header & card body
    card.appendChild(card_header);
    card.appendChild(card_body);

    return card;
}

// Source: https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
function _setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function _getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
    c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
    }
}
return "";
}

var myModule = {
    setCookie : _setCookie,
    getCookie : _getCookie,
    getRows : _getRows 
}

module.exports = myModule;