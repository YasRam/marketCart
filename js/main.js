
var products = [
    {
        productId: 1,
        productName: 'book1',
        productDesc: 'lorem',
        productPrice: 50,
        productImg: 'lorem 1',
    },
    {
        productId: 2,
        productName: 'book2',
        productDesc: 'lorem',
        productPrice: 60,
        productImg: 'lorem 1',
    },
    {
        productId: 3,
        productName: 'book3',
        productDesc: 'lorem',
        productPrice: 20,
        productImg: 'lorem 1',
    },
    {
        productId: 4,
        productName: 'book4',
        productDesc: 'lorem',
        productPrice: 80,
        productImg: 'lorem 1',
    },
    {
        productId: 5,
        productName: 'book5',
        productDesc: 'lorem',
        productPrice: 40,
        productImg: 'lorem 1',
    },
    {
        productId: 6,
        productName: 'book6',
        productDesc: 'lorem',
        productPrice: 90,
        productImg: 'lorem 1',
    },
    {
        productId: 7,
        productName: 'book7',
        productDesc: 'lorem',
        productPrice: 10,
        productImg: 'lorem 1',
    },
];

var cart = [];

function display() {
    console.log(products);
    var container = ``
    var x = 1
    // for (product of products) {

    //     container += `<div class="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
    //     <img src="img/1.png" alt="" class="w-100">
    //     <h3>${product.productName}</h3>
    //     <p class="m-0 p-0">${product.productDesc}</p>
    //     <div class="btn btn-group w-100">
    //         <button type="button" class="btn btn-info" onclick = 'addToCard(product)'>add </button>
    //         <button type="button" class="btn btn-success">Detailes </button>
    //     </div>
    // </div>`;
    // }

    for (var i = 0; i < products.length; i++) {

        container += `<div class="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
        <img src="img/1.png" alt="" class="w-100">
        <h3>${products[i].productName}</h3>
        <p class="m-0 p-0">${products[i].productDesc}</p>
        <div class="btn btn-group w-100">
            <button type="button" class="btn btn-info" onclick = 'addToCard()'>add </button>
            <button type="button" class="btn btn-success" onclick = 'addToCart(${products[i].productId})'>Detailes </button>
        </div>
    </div>`;
    }
    $('#products').html(container);
}

display()

function setCartIocal() {
    var corner = JSON.stringify(cart)
    localStorage.setItem('myCart', corner)
    getCart()
}

function getCart() {
    var data = localStorage.getItem('myCart')
    data = JSON.parse(data)
    console.log('data', data);
}


// function addToCard(opj) {

//     console.log('addToCard', cart);
//     var x = false
//     for (let i = 0; i < cart.length; i++) {
//         if (opj.productId == cart[i].productId) {
//             cart[i].count++
//             x = true
//             break;
//         }
//     }
//     if (x == false) {
//         opj.count = 1
//         cart.push(opj)
//     }
//     console.log('x', x);
//     console.log('cart', cart);
//     console.log('opj', opj);

// }

//test
function addToCart(id) {
    var x = false

    for (let i = 0; i < cart.length; i++) {
        if (id == cart[i].productId) {
            cart[i].productCount++
            x = true
        }
    }

    if (x == false) {
        for (let i = 0; i < products.length; i++) {
            if (id == products[i].productId) {
                products[i].productCount = 1
                cart.push(products[i])
                break;
            }
        }
    }
    setCartIocal()
}