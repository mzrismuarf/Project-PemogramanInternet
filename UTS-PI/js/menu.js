document.addEventListener('DOMContentLoaded', function () {
    const buyNowButtons = document.querySelectorAll('.MizarIsmuArief_overlay-buy-btn');
    const cart = document.getElementById('MizarIsmuArief_cart');
    const cartItemsContainer = document.getElementById('MizarIsmuArief_cart-items');
    const chartBtn = document.getElementById('MizarIsmuArief_chart-btn');
    const checkoutBtn = document.getElementById('MizarIsmuArief_checkout-btn');
    let totalQty = 0;
    let totalPrice = 0;

    updateCheckoutButtonVisibility();
    checkoutBtn.style.display = 'none';

    chartBtn.addEventListener('click', function () {
        cart.classList.toggle('active'); // Tambahkan ini
    });



    buyNowButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const parentBox = event.target.closest('.MizarIsmuArief_box');
            const imgSrc = parentBox.querySelector('.MizarIsmuArief_slide-img img').src;
            const title = parentBox.querySelector('.MizarIsmuArief_type a').innerText;
            const existingCartItem = getCartItemByTitle(title);

            if (existingCartItem) {
                const inputQty = prompt(`Item "${title}" sudah ada di keranjang. Masukkan jumlah tambahan:`);
                if (inputQty !== null) {
                    const qty = parseInt(inputQty) || 0;
                    if (qty > 0) {
                        updateCartItemQty(existingCartItem, qty);
                    }
                }
            } else {
                const inputQty = prompt(`Masukkan jumlah item "${title}":`);
                if (inputQty !== null) {
                    const qty = parseInt(inputQty) || 0;
                    if (qty > 0) {
                        const price = parseFloat(parentBox.querySelector('.MizarIsmuArief_price').innerText.replace('Rp. ', ''));
                        addToCart(imgSrc, title, qty, price);
                    }
                }
            }
        });
    });


    function getCartItemByTitle(title) {
        const cartItems = document.querySelectorAll('.MizarIsmuArief_cart-item');
        for (const cartItem of cartItems) {
            if (cartItem.querySelector('p').innerText === title) {
                return cartItem;
            }
        }
        return null;
        updateCheckoutButtonVisibility();
    }


    function updateCheckoutButtonVisibility() {
        const checkoutBtn = document.getElementById('MizarIsmuArief_checkout-btn');
        const cartItemsContainer = document.getElementById('MizarIsmuArief_cart-items');

        const totalQty = cartItemsContainer.children.length;
        console.log("Total Qty:", totalQty);

        checkoutBtn.style.display = totalQty > 0 ? 'block' : 'none';
    }




    function addToCart(imgSrc, title, qty, price) {
        console.log("Adding to cart:", title);
        console.log("Total Qty:", totalQty);
        const cartItem = document.createElement('div');
        cartItem.classList.add('MizarIsmuArief_cart-item');

        cartItem.innerHTML = `
        <img src="${imgSrc}" alt="${title}">
        <p>${title}</p>
        <p class="MizarIsmuArief_qty">${qty}</p>
        <p class="MizarIsmuArief_price">Rp. ${(qty * price).toFixed(2)}</p>
        <span class="MizarIsmuArief_edit-btn" onclick="editCartItem(this)">Edit</span>
        <span class="MizarIsmuArief_delete-btn" onclick="removeCartItem(this)">Delete</span>
    `;
        cartItem.dataset.qty = qty;
        cartItem.dataset.price = price;

        cartItemsContainer.appendChild(cartItem);
        cart.classList.add('active');

        updateCheckoutButtonVisibility();

        totalQty += qty;
        totalPrice += qty * price;
        updateCartTotal();



        console.log("Number of items in cart:", cartItemsContainer.children.length);
    }

    function updateCartTotal() {
        const cartTotal = document.getElementById('MizarIsmuArief_cart-total');
        cartTotal.innerHTML = `Total Qty: ${totalQty}<br>Total Price: Rp. ${totalPrice.toFixed(2)}`;
        // updateCheckoutButtonVisibility();
    }

    function updateCartItemQty(cartItem, qty) {
        const qtyElement = cartItem.querySelector('.MizarIsmuArief_qty');
        qtyElement.innerText = `${qty}`;

        const price = parseFloat(cartItem.dataset.price);
        const totalPriceForItem = qty * price;
        cartItem.querySelector('.MizarIsmuArief_price').innerText = `Rp. ${totalPriceForItem.toFixed(2)}`;
        cart.classList.add('active');

        // Menghitung total qty dan total price secara keseluruhan
        totalQty = 0;
        totalPrice = 0;

        const cartItems = document.querySelectorAll('.MizarIsmuArief_cart-item');
        cartItems.forEach(function (item) {
            const itemQty = parseInt(item.dataset.qty);
            totalQty += itemQty;
            totalPrice += itemQty * parseFloat(item.dataset.price);
        });

        updateCartTotal();

        cartItem.dataset.qty = qty;
    }

    window.editCartItem = function (editBtn) {
        const cartItem = editBtn.closest('.MizarIsmuArief_cart-item');
        const title = cartItem.querySelector('p').innerText;
        const inputQty = prompt(`Edit jumlah item "${title}":`, cartItem.dataset.qty);
        const qty = inputQty ? parseInt(inputQty) : parseInt(cartItem.dataset.qty);

        if (qty > 0) {
            updateCartItemQty(cartItem, qty);
        } else {
            removeCartItem(cartItem);
        }

        // updateCheckoutButtonVisibility();
    };


    window.removeCartItem = function (deleteBtn) {
        const cartItem = deleteBtn.closest('.MizarIsmuArief_cart-item');
        cartItem.remove();

        const cartItems = document.querySelectorAll('.MizarIsmuArief_cart-item');
        if (cartItems.length === 0) {
            cart.classList.remove('active');
        }
        updateCheckoutButtonVisibility(); // Memanggil fungsi setelah menghapus item
    };

    window.redirectToOrderPage = function () {
        const orderData = [];

        const cartItems = document.querySelectorAll('.MizarIsmuArief_cart-item');
        cartItems.forEach(function (cartItem) {
            const title = cartItem.querySelector('p').innerText;
            const qty = parseInt(cartItem.dataset.qty);
            const price = parseFloat(cartItem.dataset.price);

            orderData.push({ title, qty, price });
        });

        // updateCheckoutButtonVisibility();

        localStorage.setItem('MizarIsmuArief_orderData', JSON.stringify(orderData));
        localStorage.setItem('MizarIsmuArief_orderTotalQty', totalQty);
        localStorage.setItem('MizarIsmuArief_orderTotalPrice', totalPrice.toFixed(2));
        window.location.href = 'order.html';
    };

    // minimaze

    // end
});