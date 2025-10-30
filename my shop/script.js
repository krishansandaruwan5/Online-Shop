// Item list
const items = [
    { name: "Blender", price: 5000, image: "images/blender.jpg" },
    { name: "Rice Cooker", price: 6500, image: "images/ricecooker.jpg" },
    { name: "Electric Kettle", price: 2500, image: "images/kettle.jpg" }
];

const cart = [];
const deliveryCharge = 400; // Change this to 350, 400, etc.

const itemsContainer = document.getElementById('items-container');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const deliveryChargeElement = document.getElementById('delivery-charge');

// Render items on the page
function renderItems() {
    itemsContainer.innerHTML = '';
    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: ${item.price} LKR</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        itemsContainer.appendChild(div);
    });
}

// Add item to cart
function addToCart(index) {
    cart.push(items[index]);
    renderCart();
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// Render cart with delivery charge
function renderCart() {
    cartItems.innerHTML = '';
    let itemsTotal = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price} LKR <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
        itemsTotal += item.price;
    });

    // Update delivery charge display
    deliveryChargeElement.textContent = cart.length > 0 ? deliveryCharge : 0;

    // Total including delivery
    const totalIncludingDelivery = cart.length > 0 ? itemsTotal + deliveryCharge : 0;
    totalPrice.textContent = totalIncludingDelivery;
}

// Initialize page
renderItems();
