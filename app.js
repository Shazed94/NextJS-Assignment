const products = [
    { id: 1, name: "Product 1", price: 10.5 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20.5 },
    { id: 4, name: "Product 4", price: 22 },
    { id: 5, name: "Product 5", price: 27 },
    { id: 6, name: "Product 6", price: 32 },
];

// JavaScript code for adding products to the cart
const tableBody = document.getElementById("tableBody")
const addToCartBtn = document.getElementById("add-to-cart")
const cartItemsContainer = document.getElementById('cart-items');
const discountBtn = document.getElementById("apply_discount")
const totalAmountElement = document.getElementById('total-amount');
const clearCartBtn = document.getElementById('clear-cart-btn');
const discountAmountTotal = document.getElementById('discount-amount');
const subTotal = document.getElementById('sub-total-amount');
const discountInput = document.getElementById("discount")

let cartItems = [];
let quantity = 1; // Default quantity is 1
totalAmountElement.textContent = (0.00).toFixed(2)
discountAmountTotal.textContent = (0.00).toFixed(2)
subTotal.textContent = (0.00).toFixed(2)

products.forEach(product => {
    tableBody.innerHTML += `
          <tr class="">
            <td class="py-2 px-4 border-b">${product.name}</td>
            <td class="py-2 px-4 border-b">$${product.price.toFixed(2)}</td>
            <td class="py-2 px-4 border-b">
                <button id="add-to-cart" onclick="addToCart(${product.id})" class="add-to-cart-btn bg-blue-500 hover:bg-blue-600 text-white px-2 lg:px-4 py-2 rounded" >Add to
                Cart</button>
            </td>
          </tr>
        `
});

displayCartItems();
function addToCart(id) {
    const selectedProduct = products.find(product => product.id === id);
    discountBtn.classList.remove("hidden")
    discountBtn.classList.add("block")
    discountInput.classList.remove("hidden")
    discountInput.classList.add("block")
    if (selectedProduct) {
        addProductToCart(selectedProduct, quantity);
        clearCartBtn.setAttribute("class", "bg-cyan-800 text-white px-3 py-1")
        clearCartBtn.textContent = "Clear Cart"
    }

}

function addProductToCart(product, quantity) {
    const cartItem = cartItems.find(item => item.id === product.id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cartItems.push({ id: product.id, name: product.name, price: product.price, quantity });
    }
    displayCartItems()
}

function displayCartItems() {
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        const removeItem = document.createElement('button');
        removeItem.classList.add("bg-red-800", "px-2", "py-1", "my-1", "text-white", "align-middle")
        removeItem.setAttribute('onclick', `removeItem(${item.id})`)
        const nameCell = document.createElement('td');
        const quantityCell = document.createElement('td');
        const increseQty = document.createElement('button');
        increseQty.classList.add("bg-blue-500", "px-1", "py-1", "rounded", "my-1", "text-white")
        increseQty.setAttribute('onclick', `increaseQuantity(${item.id})`)
        const decreaseQty = document.createElement('button');
        decreaseQty.classList.add("bg-blue-500", "px-1", "py-1", "rounded", "my-1", "text-white")
        decreaseQty.setAttribute('onclick', `decreaseQuantity(${item.id})`)
        const priceCell = document.createElement('td');
        const totalCell = document.createElement('td');

        removeItem.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        nameCell.textContent = item.name;
        quantityCell.textContent = item.quantity;
        increseQty.innerHTML = `<i class="fa-solid fa-plus fa-sm"></i>`;
        decreaseQty.innerHTML = `<i class="fa-solid fa-minus fa-sm"></i>`;
        priceCell.textContent = '$' + item.price.toFixed(2);
        totalCell.textContent = '$' + (item.price * item.quantity).toFixed(2);


        row.appendChild(removeItem);
        row.appendChild(nameCell);
        row.appendChild(decreaseQty)
        row.appendChild(quantityCell);
        row.appendChild(increseQty);
        row.appendChild(priceCell);
        row.appendChild(totalCell);
        row.setAttribute("class", "text-center align-middle")
        cartItemsContainer.appendChild(row);

        calculateTotalAmount()
        calculateDiscount()
    });
    if (cartItems.length == 0) {
        cartItemsContainer.innerHTML = `<td colspan="7" class="text-center font-semibold pt-5">Cart is Empty</td>`
    }
}

function increaseQuantity(id) {
    const item = cartItems.find(item => item.id === id);

    if (item) {
        item.quantity++;
    }
    displayCartItems()
}

function decreaseQuantity(id) {
    const item = cartItems.find(item => item.id === id);

    if (item.quantity > 1) {
        item.quantity--;
    }
    displayCartItems()
}
function removeItem(id) {
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
        cartItems.splice(index, 1);
    }
    if (cartItems.length == 0) {
        totalAmountElement.textContent = (0.00).toFixed(2)
        discountAmountTotal.textContent = (0.00).toFixed(2)
        subTotal.textContent = (0.00).toFixed(2)
        clearCartBtn.classList.add("hidden")
        discountBtn.classList.add("hidden")
        discountBtn.classList.remove("block")
        discountInput.classList.add("hidden")
        discountInput.classList.remove("block")
        clearCartBtn.classList.add("hidden")

    }
    displayCartItems()
}

function calculateTotalAmount() {
    let totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalAmountElement.textContent = '$' + (totalAmount).toFixed(2);
}


function calculateDiscount() {
    let mainTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let discountAmount = 1 - Number(discountInput.value) / 100;
    let subTotalAmount = mainTotal * discountAmount
    discountAmountTotal.textContent = '$' + (mainTotal - subTotalAmount).toFixed(2)
    subTotal.textContent = '$' + subTotalAmount.toFixed(2);

}

function clearCart() {
    cartItems = [];
    clearCartBtn.textContent = ""
    discountInput.value = ""
    totalAmountElement.textContent = (0.00).toFixed(2)
    discountAmountTotal.textContent = (0.00).toFixed(2)
    subTotal.textContent = (0.00).toFixed(2)
    discountBtn.classList.add("hidden")
    discountBtn.classList.remove("block")
    discountInput.classList.add("hidden")
    discountInput.classList.remove("block")
    clearCartBtn.classList.add("hidden")
    displayCartItems();
}



clearCartBtn.addEventListener('click', clearCart);
discountBtn.addEventListener("click", () => calculateDiscount())

