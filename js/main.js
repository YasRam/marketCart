
var products = [
    {
        productId: 1,
        productName: 'book1',
        productDesc: 'lorem',
        productImg: 'lorem 1',
    },
    {
        productId: 2,
        productName: 'book2',
        productDesc: 'lorem',
        productImg: 'lorem 1',
    },
    {
        productId: 3,
        productName: 'book3',
        productDesc: 'lorem',
        productImg: 'lorem 1',
    },
    {
        productId: 4,
        productName: 'book4',
        productDesc: 'lorem',
        productImg: 'lorem 1',
    },
    {
        productId: 5,
        productName: 'book5',
        productDesc: 'lorem',
        productImg: 'lorem 1',
    },
    {
        productId: 6,
        productName: 'book6',
        productDesc: 'lorem',
        productImg: 'lorem 1',
    },
    {
        productId: 7,
        productName: 'book7',
        productDesc: 'lorem',
        productImg: 'lorem 1',
    },
];
var cart = [];

function display() {
    console.log(products);
    var container = ``

    for (product of products) {
        container += `<div class="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
        <img src="img/1.png" alt="" class="w-100">
        <h3>${product.productName}</h3>
        <p class="m-0 p-0">${product.productDesc}</p>
        <div class="btn btn-group w-100">
            <button type="button" class="btn btn-info" onclick = 'addToCard(${product})'>add </button>
            <button type="button" class="btn btn-success">Detailes </button>
        </div>
    </div>`;
    }

    $('#products').html(container);
}

display()

function addToCart(i) {
    cart.push(products[i])
    console.log(cart);
    var corner = JSON.stringify(cart)
    localStorage.setItem('mycart', corner)
    getCart()
}

function getCart() {
    var data = localStorage.getItem('mycart')
    data = JSON.parse(data)
    console.log('data', data);
}


function addToCard(opj) {
    var x = false
    for (let i = 0; i < cart.length; i++) {
        if (opj.id == cart[i].id) {
            cart[i].count++
            break;
        } else {
            x = true
        }
    }
    console.log('x',x);
    console.log('cart',cart);

}