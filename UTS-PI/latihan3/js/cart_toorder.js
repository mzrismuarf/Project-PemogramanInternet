document.addEventListener('DOMContentLoaded', function () {
    const buyNowButtons = document.querySelectorAll('.overlay-buy-btn');
    const cart = document.getElementById('cart');

    buyNowButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const parentBox = event.target.closest('.box');
            const imgSrc = parentBox.querySelector('.slide-img img').src;
            const title = parentBox.querySelector('.type a').innerText;
            const existingCartItem = getCartItemByTitle(title);

            if (existingCartItem) {
                // Jika item sudah ada di keranjang, tampilkan prompt untuk input qty tambahan
                const inputQty = prompt(`Item "${title}" sudah ada di keranjang. Masukkan jumlah tambahan:`);
                const qty = inputQty ? parseInt(inputQty) : 0;

                if (qty > 0) {
                    updateCartItemQty(existingCartItem, qty);
                }
            } else {
                // Jika item belum ada di keranjang, tampilkan prompt untuk input qty
                const inputQty = prompt(`Masukkan jumlah item "${title}":`);
                const qty = inputQty ? parseInt(inputQty) : 0;

                if (qty > 0) {
                    addToCart(imgSrc, title, qty,);
                }
            }
        });
    });

    function getCartItemByTitle(title) {
        const cartItems = document.querySelectorAll('.cart-item');
        for (const cartItem of cartItems) {
            if (cartItem.querySelector('p').innerText === title) {
                return cartItem;
            }
        }
        return null;
    }

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

        cart.appendChild(cartItem);
        cart.classList.add('active');
    }

    function updateCartItemQty(cartItem, qty) {
        const qtyElement = cartItem.querySelector('.qty');
        qtyElement.innerText = `Qty: ${qty}`;
        cart.classList.add('active');
    }

    window.editCartItem = function (editBtn) {
        const cartItem = editBtn.closest('.cart-item');
        const title = cartItem.querySelector('p').innerText;
        const inputQty = prompt(`Edit jumlah item "${title}":`, cartItem.dataset.qty);
        const qty = inputQty ? parseInt(inputQty) : parseInt(cartItem.dataset.qty);

        if (qty > 0) {
            updateCartItemQty(cartItem, qty);
        } else {
            removeCartItem(cartItem);
        }
    };

    window.removeCartItem = function (deleteBtn) {
        const cartItem = deleteBtn.closest('.cart-item');
        cartItem.remove();

        const cartItems = document.querySelectorAll('.cart-item');
        if (cartItems.length === 0) {
            cart.classList.remove('active');
        }
    };

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

});