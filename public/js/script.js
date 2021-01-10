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
    $('.btn-modal-comment').on('click', sendComment);
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

function sendComment() {
    let id = $(this).data('id');
    let content = $('#comment-form_text-area').val();
    let userId = $(this).data('userID');
    let isLike = true;
    $.ajax({
        url: '/comment',
        type: 'post',
        data: { id, content, userId, isLike},
    })
}