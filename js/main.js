
var products = [
    {
        productId: 1,
        productName: 'الاربعون',
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

localStorage.getItem('myCart') ? cart = JSON.parse(localStorage.getItem('myCart')) : cart = [];

function display() {
    products.map((product, index) => {
            let container = `<div class="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
                <img src="img/1.png" alt="" class="w-100">
                <h3>${product.productName}</h3>
                <p class="m-0 p-0">${product.productDesc}</p>
                <div class="btn btn-group w-100">
                    <button type="button" class="btn btn-info" onclick = 'addToCard(${index})'>add </button>
                    <button type="button" class="btn btn-success" onclick = 'addToCart(${index})'>Detailes </button>
                </div>
            </div>`;
            $('#products').append(container);
        }
    );
}

display()

function setCartIocal() {
    var corner = JSON.stringify(cart)
    localStorage.setItem('myCart', corner)
}

function addToCart(index) {
    x = false
    let newproduct = products.slice(index, index + 1)[0];

    for (let i = 0; i < cart.length; i++) {
        if (newproduct.productId == cart[i].productId) {
            cart[i].productCount++
            x = true
        }
    }

    if (x == false) {
        newproduct.productCount = 1
        cart.push(newproduct)
        console.log('cart', cart);
    }

    setCartIocal()

    // let newproduct = products.slice(index, index + 1);
    // let search = cart.filter((product) => { product.productId == newproduct[0].productId; 
    //     console.log('product', product.productId);
    //     console.log('newproduct' ,newproduct[0].productId);
    // });

    // if (search.length > 0) {
    //     console.log("increase");

    // for (let i = 0; i < cart.length; i++) {
    //     if (id == cart[i].productId) {
    //         cart[i].productCount++
    //         x = true
    //     }
    // }
    // } else {
    //     newproduct[0].productCount = 1;
    //     cart.push(newproduct[0]);
    // }

}