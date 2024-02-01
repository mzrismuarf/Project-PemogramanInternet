function openPopup() {
    const popupContainer = document.getElementById('popup-container');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    popupContainer.style.display = 'block';
    overlay.style.display = 'block';
    body.classList.add('popup-active');
}

function closePopup() {
    const popupContainer = document.getElementById('popup-container');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    popupContainer.style.display = 'none';
    overlay.style.display = 'none';
    body.classList.remove('popup-active');
}
