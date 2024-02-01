document.addEventListener('DOMContentLoaded', function () {
    const buyNowButtons = document.querySelectorAll('.overlay-buy-btn');
    const cart = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cart-items');
    let totalQty = 0;
    let totalPrice = 0;

    buyNowButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            // ... (kode sebelumnya)

            if (qty > 0) {
                addToCart(imgSrc, title, qty, price);
            }
        });
    });

    // ... (fungsi-fungsi sebelumnya)

    function addToCart(imgSrc, title, qty, price) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${imgSrc}" alt="${title}">
            <p>${title}</p>
            <p class="qty">Qty: ${qty}</p>
            <p class="price">Price: Rp. ${price.toFixed(2)}</p>
            <span class="edit-btn" onclick="editCartItem(this)">Edit</span>
            <span class="delete-btn" onclick="removeCartItem(this)">Delete</span>
        `;
        cartItem.dataset.qty = qty; // tambahkan data attribute untuk menyimpan qty
        cartItem.dataset.price = price; // tambahkan data attribute untuk menyimpan price

        cartItemsContainer.appendChild(cartItem);
        cart.classList.add('active');

        // Update total qty dan total price
        totalQty += qty;
        totalPrice += qty * price;
        updateCartTotal();
    }

    function updateCartTotal() {
        const cartTotal = document.getElementById('cart-total');
        cartTotal.innerHTML = `Total Qty: ${totalQty}<br>Total Price: Rp. ${totalPrice.toFixed(2)}`;
    }

    window.redirectToOrderPage = function () {
        const orderData = [];

        const cartItems = document.querySelectorAll('.cart-item');
        cartItems.forEach(function (cartItem) {
            const title = cartItem.querySelector('p').innerText;
            const qty = parseInt(cartItem.dataset.qty);
            const price = parseFloat(cartItem.dataset.price);

            orderData.push({ title, qty, price });
        });

        localStorage.setItem('orderData', JSON.stringify(orderData));
        localStorage.setItem('orderTotalQty', totalQty);
        localStorage.setItem('orderTotalPrice', totalPrice.toFixed(2));
        window.location.href = 'order.html';
    };

    // ... (fungsi-fungsi lainnya)
});
