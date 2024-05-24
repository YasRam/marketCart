

var cart = [];

function getCart() {
    var data = localStorage.getItem('myCart')
    data = JSON.parse(data)
    console.log('data', data);
}

getCart()