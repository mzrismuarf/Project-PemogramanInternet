document.addEventListener('DOMContentLoaded', function () {
    const orderItemsContainer = document.getElementById('MizarIsmuArief_order-items');
    const totalPriceElement = document.getElementById('MizarIsmuArief_total-price');
    const orderForm = document.getElementById('MizarIsmuArief_order-form');
    const orderData = JSON.parse(localStorage.getItem('MizarIsmuArief_orderData'));
    let totalPrice = 0;

    if (orderData) {
        orderData.forEach(function (item) {
            const orderItem = document.createElement('div');
            orderItem.classList.add('MizarIsmuArief_order-item');

            const itemTotalPrice = item.qty * parseFloat(item.price);
            totalPrice += itemTotalPrice;

            orderItem.innerHTML = `
                <p class="MizarIsmuArief_titleOrderItem">${item.title}</p>
                <p class="MizarIsmuArief_totalOrderItemQty">${item.qty}</p>
                <p class="MizarIsmuArief_totalSemuaHargaOrder">Rp. ${itemTotalPrice.toFixed(2)}0</p>
            `;

            orderItemsContainer.appendChild(orderItem);
        });

        // Tampilkan total harga
        totalPriceElement.innerText = `Total Semua Harga: Rp. ${totalPrice.toFixed(2)}0`;
    } else {
        // Redirect back to cart or handle as needed
        window.location.href = 'cart.html';
    }

    window.validateAndPlaceOrder = function () {
        const name = document.getElementById('MizarIsmuArief_name').value;
        const address = document.getElementById('MizarIsmuArief_address').value;
        const phone = document.getElementById('MizarIsmuArief_phone').value;

        if (name && address && phone) {
            // Semua form terisi
            showSuccessPopup();
        } else {
            // Ada form yang belum terisi
            showErrorPopup("Silahkan lengkapi form terlebih dahulu");
        }
    };


    function showSuccessPopup() {
        const orderData = JSON.parse(localStorage.getItem('MizarIsmuArief_orderData'));
        const name = document.getElementById('MizarIsmuArief_name').value;
        const address = document.getElementById('MizarIsmuArief_address').value;
        const phone = document.getElementById('MizarIsmuArief_phone').value;

        const popupContainer = document.createElement('div');
        popupContainer.classList.add('popup-container');

        const popupContent = document.createElement('div');
        popupContent.classList.add('popup-content');


        const formDataContainer = document.createElement('div');
        formDataContainer.classList.add('MizarIsmuArief_form-data-container');
        formDataContainer.innerHTML = `
        <h2>Orderan Berhasil</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Alamat:</strong> ${address}</p>
        <p><strong>No Hp:</strong> ${phone}</p>
        `;
        popupContent.appendChild(formDataContainer);


        const orderItemsContainer = document.createElement('div');
        orderItemsContainer.classList.add('order-items-container');

        orderData.forEach(function (item) {
            const itemTotalPrice = item.qty * parseFloat(item.price);

            const popupItem = document.createElement('div');
            popupItem.classList.add('MizarIsmuArief_popup-item');
            popupItem.innerHTML = `
            <p class="MizarIsmuArief_titlePopUp">${item.title}</p>
            <p class="MizarIsmuArief_totalItemQtyPopUp">${item.qty}</p>
            <p class="MizarIsmuArief_totalSemuaHargaPopUp">Rp. ${itemTotalPrice.toFixed(2)}</p>
            `;


            orderItemsContainer.appendChild(popupItem);
        });

        const totalPrice = orderData.reduce((acc, item) => acc + item.qty * parseFloat(item.price), 0);
        const totalContainer = document.createElement('p');
        totalContainer.textContent = `Total Semua Harga: Rp. ${totalPrice.toFixed(2)}`;

        orderItemsContainer.appendChild(totalContainer);
        popupContent.appendChild(orderItemsContainer);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
        popupContent.appendChild(closeButton);

        popupContainer.appendChild(popupContent);

        document.body.appendChild(popupContainer);
    }

    function showErrorPopup(message) {
        alert(`Orderan Gagal\n${message}`);
    }
});