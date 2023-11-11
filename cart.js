// Sample product data
const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 99.99,
    },
    // Add more products as needed
];

// Initialize the cart as an empty array
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(product => product.id == productId);
    if (product) {
        cart.push({ ...product });
        updateCart();
    }
}

// Function to update the cart and calculate the total
function updateCart() {
    const cartItemsSection = document.querySelector('.cart-items');
    cartItemsSection.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="item-details">
                <span class="item-name">${item.name}</span>
                <span class="item-price">$${item.price.toFixed(2)}</span>
            </div>
        `;

        cartItemsSection.appendChild(itemElement);
    });
}

// Attach event listeners
// Initialize the cart on page load
updateCart();

// Add event listener for "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
    });
});
