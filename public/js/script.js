let urlParams = new URLSearchParams(location.search);
let headerNavLinks = [".header__home-link", "header__menu-link", "header__drinks-link", "header__foods-link"];
$(document).ready(() => {
    let pathName = $(location).attr('pathname');
    for(let className of headerNavLinks)
            $(className).parent().removeClass('active');
    if (pathName == "/") {
        $('.header__home-link').parent().addClass('active');
    }
    else if (pathName == "/products" && !urlParams.has('category')) {
        $('.header__menu-link').parent().addClass('active');
    }
    else if (pathName == "/products" && urlParams.get('category') == "0") {
        $('.header__foods-link').parent().addClass('active');
    }
    else if (pathName == "/products" && urlParams.get('category') == "1") {
        $('.header__drinks-link').parent().addClass('active');
    }

    $('.btn-order').on('click', addToCart);
    $('.btn-cart--remove').on('click', removeFromCart);
    $('.btn-like').on('click', likeProduct);
    $('.btn-search').on('click', searchProducts);
    $('.form-search').on('submit', e => {
        e.preventDefault();
    })
    $('.search-field').on('keypress', e => {
        if (e.which == 13) searchProducts();
    });
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })
    $(function () {
        $('[data-toggle="popover"][data-timeout]').popover({ trigger:"manual" }).click(function() { 
            var pop = $(this); 
            var quantity = $('#qtyField') ? Number($('#qtyField').val()) : 1;
            if (quantity <= 0) return;
            pop.popover("show") 
            pop.on('shown.bs.popover',function() { 
             setTimeout(function() {
              pop.popover("hide")}, $(this).data("timeout")); 
            })
        })
    })
    $('.btn-modal-comment').on('click', openCommentModal);
    $('#commentForm').on('submit', e => { e.preventDefault(); });
    $('.btn-sendComment').on('click', sendComment);
    $('.btn-confirm-payment').on('click', order);
    $('#profileForm').on('submit', e => { e.preventDefault(); });   
    $('#update-prof-btn').on('click', updateProf);
    $('.btn-remove-user').on('click', adminRemoveUser);
    $('#confirmAddUserBtn').on('click', adminAddUser);
    $('#confirmAddProductBtn').on('click', adminAddProduct);
    $('.adminDeleteProduct').on('click', adminRemoveProduct);
    $('.adminUpdateProduct').on('click', adminUpdateProduct);
    $('.btn-apply-coupon').on('click', applyCoupon);
    $('#apply-fail-alert').hide()
    $('#apply-success-alert').hide()
});


function addToCart() {
    var id = $(this).data('id');
    var quantity = $('#qtyField') ? Number($('#qtyField').val()) : 1;
    $.ajax({
        url: '/cart',
        type: 'POST',
        data: { id, quantity },
        success: result => {
            $('#cart-badge').html(result.totalQuantity);
        }
    })
}

function removeFromCart() {
    var id = $(this).data('id');
    $.ajax({
        url: '/cart/remove',
        type: 'POST',
        data: {id},
        success: result => {
            $('#cart-badge').html(result.totalQuantity);
            $(this).parent().parent().remove();
            location.reload();
        }
    })
}

function selectParams(key , value) {
    urlParams.set(key, value);
    let pathName = $(location).attr('pathname');
    let url = `${pathName}?${urlParams.toString()}`;
    location.href = url;
}

function likeProduct() {
    let id = $(this).data('id');
    $.ajax({
        url: '/like',
        type: 'post',
        data: { id },
        success: result => {
            console.log($(`#${id}-like`))
            $(`#${id}-like`).html(result);
        }
    })
}

function searchProducts() {
    var keyword = $('.search-field').val();
    console.log(keyword)
    if (keyword) {
        location.href = `/products/search?keyword=${keyword}`;
    }
}

function openCommentModal() {
    $("#commentModal").modal("show");
    $("button.btn-sendComment").data('product', $(this).data('id'));
}

function sendComment() {
    let content = $('#comment-form_text-area').val();
    if (content) {
        let productId = $(this).data('product');
        let userId = $("input[name='userId']").val();
        let isLiked = true;
        $.ajax({
            url: '/comment',
            type: 'post',
            data: { productId, content, userId, isLiked },
            success: () => {
                $('#comment-form_text-area').val("");
                let pathName = $(location).attr('pathname');
                if (pathName != '/')
                    location.reload();
            }
        })
    }
}

function emptyCart() {
    $.ajax({
        url: '/cart/empty',
        type: 'POST',
        success: result => {
            location.reload();         
        }
    })
}

function order() {
    $.ajax({
        url: 'cart/pay',
        method: 'post',
        success: result => {
            emptyCart();
        }
    })
}

function updateProf() {
    let nameField = $('#nameField').val();
    let emailField = $('#emailField').val();
    let maleBtn = $('#maleBtn').val();
    let femaleBtn = $('#femaleBtn').val();
    let phoneField = $('#phoneField').val();
    let addressField = $('#addressField').val();
    $.ajax({
        url: '/profile',
        method: 'post',
        data: {nameField, emailField, maleBtn, femaleBtn, phoneField, addressField},
        success: result => {
            location.reload();
        }
    })
}

function adminAddUser() {
    let email = $('#adminAddEmail').val();
    let username = $('#adminAddUsername').val();
    let password = $('#adminAddPassword').val();
    let name = $('#adminAddName').val();
    let phone = $('#adminAddPhone').val();
    let address = $('#adminAddAddress').val();
    console.log("ok");
    if (username && password) {
        $.ajax({
            url: '/admin/manage/users/add',
            method: 'post',
            data: {email, username, password, name, phone, address},
            success: result => {
                console.log("ok");
                location.reload();
            }
        })
    }
}

function adminRemoveUser() {
    //console.log("ok");
    //console.log($('#adminUserId'));
    let userId = $(this).data('id');
    //console.log(userId);
    $.ajax({
        url: '/admin/manage/users/remove',
        type: 'POST',
        data: {userId},
        success: result => {
            location.reload();
        }
    })
}

function adminAddProduct() {
    let name = $('#adminAddProductname').val();
    let detail = $('#adminAddDetail').val();
    let type = $('#adminAddProductype').val();
    let price = $('#adminAddPrice').val();
    let status = $('#adminAddStatus').val();
    let stock = $('#adminAddQuantity').val();

    if (name && type && price && status && stock) {
        $.ajax({
            url: '/admin/manage/products/add',
            method: 'post',
            data: {name, detail, type, name, price, status, stock},
            success: result => {
                console.log("ok");
                location.reload();
            }
        })
    }
}

function adminRemoveProduct() {
    let productId = $(this).data('id');
    $.ajax({
        url: '/admin/manage/products/remove',
        type: 'post',
        data: {productId},
        success: result => {
            location.reload();
        }
    })
}

function adminUpdateProduct() {
    console.log('hi hi hi');
    let id = $(this).data('id');
    let updateName = "#updateName" + id;
    let updateType = "#updateType" + id;
    let updatePrice = "#updatePrice" + id;
    let updateStatus = "#updateStatus" + id;
    let updateStock = "#updateStock" + id;
    let name = $(updateName).val();
    let type = $(updateType).val();
    let price = $(updatePrice).val();
    let status = $(updateStatus).val();
    let stock = $(updateStock).val();
    $.ajax({
        url: '/admin/manage/products/update',
        type: 'post',
        data: {id, name, type, price, status, stock},
        success: result => {
            location.reload();
        }
    })
}

function applyCoupon() {
    let code = $('#coupon-code-input').val();
    if(code) 
        $.ajax({
            url: '/coupon/check',
            method: 'post',
            data: {code},
            success: result => {
                if(result) {
                    location.reload();
                }
                else {
                    $('#apply-success-alert').hide()
                    $('#apply-fail-alert').show()
                }
            }
        })
}