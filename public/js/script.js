let urlParams = new URLSearchParams(location.search);

$(document).ready(() => {
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
            if (result.totalQuantity == 0)
                $('#emptyCartMess').html('Your cart is empty. Please add at least one product to order!')
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