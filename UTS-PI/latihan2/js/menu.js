document.addEventListener('DOMContentLoaded', function () {
    const buyNowButtons = document.querySelectorAll('.overlay-buy-btn');
    const cart = document.getElementById('cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const chartBtn = document.getElementById('chart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
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

            const parentBox = event.target.closest('.box');
            const imgSrc = parentBox.querySelector('.slide-img img').src;
            const title = parentBox.querySelector('.type a').innerText;
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
                        const price = parseFloat(parentBox.querySelector('.price').innerText.replace('Rp. ', ''));
                        addToCart(imgSrc, title, qty, price);
                    }
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
        updateCheckoutButtonVisibility();
    }


    function updateCheckoutButtonVisibility() {
        const checkoutBtn = document.getElementById('checkout-btn');
        const cartItemsContainer = document.getElementById('cart-items');

        const totalQty = cartItemsContainer.children.length;
        console.log("Total Qty:", totalQty);

        checkoutBtn.style.display = totalQty > 0 ? 'block' : 'none';
    }




    function addToCart(imgSrc, title, qty, price) {
        console.log("Adding to cart:", title);
        console.log("Total Qty:", totalQty);
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
        <img src="${imgSrc}" alt="${title}">
        <p>${title}</p>
        <p class="qty">${qty}</p>
        <p class="price">Rp. ${(qty * price).toFixed(2)}</p>
        <span class="edit-btn" onclick="editCartItem(this)">Edit</span>
        <span class="delete-btn" onclick="removeCartItem(this)">Delete</span>
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
        const cartTotal = document.getElementById('cart-total');
        cartTotal.innerHTML = `Total Qty: ${totalQty}<br>Total Price: Rp. ${totalPrice.toFixed(2)}`;
        // updateCheckoutButtonVisibility();
    }

    // ... (fungsi-fungsi lainnya)

    // function updateCartItemQty(cartItem, qty) {
    //     const qtyElement = cartItem.querySelector('.qty');
    //     qtyElement.innerText = `Qty: ${qty}`;
    //     const price = parseFloat(cartItem.dataset.price);
    //     cartItem.querySelector('.price').innerText = `Price: Rp. ${(qty * price).toFixed(2)}`;
    //     cart.classList.add('active');

    //     totalQty += qty - parseInt(cartItem.dataset.qty);
    //     totalPrice += (qty - parseInt(cartItem.dataset.qty)) * price;
    //     updateCartTotal();
    //     cartItem.dataset.qty = qty;
    //     // updateCheckoutButtonVisibility();
    // }

    // ... (fungsi-fungsi lainnya)
    function updateCartItemQty(cartItem, qty) {
        const qtyElement = cartItem.querySelector('.qty');
        qtyElement.innerText = `Qty: ${qty}`;

        const price = parseFloat(cartItem.dataset.price);
        const totalPriceForItem = qty * price;
        cartItem.querySelector('.price').innerText = `Price: Rp. ${totalPriceForItem.toFixed(2)}`;
        cart.classList.add('active');

        // Menghitung total qty dan total price secara keseluruhan
        totalQty = 0;
        totalPrice = 0;

        const cartItems = document.querySelectorAll('.cart-item');
        cartItems.forEach(function (item) {
            const itemQty = parseInt(item.dataset.qty);
            totalQty += itemQty;
            totalPrice += itemQty * parseFloat(item.dataset.price);
        });

        updateCartTotal();

        cartItem.dataset.qty = qty;
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

        // updateCheckoutButtonVisibility();
    };


    window.removeCartItem = function (deleteBtn) {
        const cartItem = deleteBtn.closest('.cart-item');
        cartItem.remove();

        const cartItems = document.querySelectorAll('.cart-item');
        if (cartItems.length === 0) {
            cart.classList.remove('active');
        }
        updateCheckoutButtonVisibility(); // Memanggil fungsi setelah menghapus item
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

        // updateCheckoutButtonVisibility();

        localStorage.setItem('orderData', JSON.stringify(orderData));
        localStorage.setItem('orderTotalQty', totalQty);
        localStorage.setItem('orderTotalPrice', totalPrice.toFixed(2));
        window.location.href = 'order.html';
    };

    // minimaze

    // end
});