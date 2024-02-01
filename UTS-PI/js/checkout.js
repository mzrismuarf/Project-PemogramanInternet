document.addEventListener('DOMContentLoaded', function () {
    const buyNowButtons = document.querySelectorAll('.overlay-buy-btn');
    const cart = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cart-items');

    buyNowButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            // ... (kode sebelumnya)

            if (qty > 0) {
                addToCart(imgSrc, title, qty);
            }
        });
    });

    // ... (fungsi-fungsi sebelumnya)

    function addToCart(imgSrc, title, qty) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${imgSrc}" alt="${title}">
            <p>${title}</p>
            <p class="qty">Qty: ${qty}</p>
            <span class="edit-btn" onclick="editCartItem(this)">Edit</span>
            <span class="delete-btn" onclick="removeCartItem(this)">Delete</span>
        `;
        cartItem.dataset.qty = qty; // tambahkan data attribute untuk menyimpan qty

        cartItemsContainer.appendChild(cartItem);
        cart.classList.add('active');
    }

    window.redirectToOrderPage = function () {
        const cartItems = document.querySelectorAll('.cart-item');
        const orderData = [];

        cartItems.forEach(function (cartItem) {
            const title = cartItem.querySelector('p').innerText;
            const qty = parseInt(cartItem.dataset.qty);

            orderData.push({ title, qty });
        });

        localStorage.setItem('orderData', JSON.stringify(orderData));
        window.location.href = 'order.html';
    };

    // ... (fungsi-fungsi lainnya)
});