
// $('#table-rows').hide()
var cart = [];

function setCartIocal() {
    var corner = JSON.stringify(cart)
    localStorage.setItem('myCart', corner)
}

function getCart() {
    var data = localStorage.getItem('myCart')
    cart = JSON.parse(data)
    console.log('data', cart);
    display()
}

getCart()

function display() {
    let container = ``
    let total = 0;
    cart.map((product, index) => {
        total += product.productPrice * product.productCount;
        container += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.productName}</td>
                <td>${product.productPrice}</td>
                <td><button type="button" class="btn btn-success" onclick='count(1,${index})'>&lt;</button>
                </td>
                <td>
                <div class="d-inline-block px-1">${product.productCount}
                </div>
                </td>
                <td>
                    <button type="button" class="btn btn-secondary" onclick='count(-1,${index})'>&gt;</button>
                </td>
                <td>${product.productPrice * product.productCount}</td>

                <td><button type="button" class="btn btn-danger" onclick='count("#",${index})'>-</button></td>
            </tr>`;
    });
    $('#table-rows').html(container);
    $('#totalAll').text(total);

}

function count(x, i) {
    if (x == 1) {
        cart[i].productCount++
    } else if (x == -1) {
        cart[i].productCount--
    } else if (x == "#") {
        cart[i].productCount = 0
    } else {
        alert('callback custmer servies')
    }

    if (cart[i].productCount == 0) {
        cart.splice(i, 1)
    }
    display()
    setCartIocal()
}


function deleteAll() {
    cart = []
    display()
    setCartIocal()
    window.location.href = '/index.html'
}

function sendWhatsapp() {
    let massage = `اود شراء:
    `
    for (const item of cart) {
        massage += `عدد (${item.productCount})
        من ${item.productName}  
        `
    }
    console.log(massage);
    window.location.href = `https://wa.me/+201554367882?text=${massage}`
}