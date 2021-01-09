let urlParams = new URLSearchParams(location.search);

$(document).ready(() => {
    $('.btn-order').on('click', addToCart);
    $('.btn-cart--remove').on('click', removeFromCart);
    $('.btn-like').on('click', likeProduct);
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
        }
    })
}

function selectParams(key , value) {
    urlParams.set(key, value);
    let url = `/products?${urlParams.toString()}`;
    console.log(url);
    location.href = url;
}

function likeProduct() {
    let id = $(this).data('id');
    $.ajax({
        url: '/like',
        type: 'post',
        data: { id },
        success: result => {
            $(`b#${id}-like.like-counter`).html(result);
        }
    })
}