function openPopup() {
    const popupContainer = document.getElementById('MizarIsmuArief_popup-container');
    const overlay = document.getElementById('MizarIsmuArief_overlay');
    const body = document.body;

    popupContainer.style.display = 'block';
    overlay.style.display = 'block';
    body.classList.add('popup-active');
}

function closePopup() {
    const popupContainer = document.getElementById('MizarIsmuArief_popup-container');
    const overlay = document.getElementById('MizarIsmuArief_overlay');
    const body = document.body;

    popupContainer.style.display = 'none';
    overlay.style.display = 'none';
    body.classList.remove('popup-active');
}
