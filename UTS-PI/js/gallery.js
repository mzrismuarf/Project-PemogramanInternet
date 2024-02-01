document.addEventListener('DOMContentLoaded', function() {
    // meload javascript
    document.querySelectorAll('.MizarIsmuArief_image-container img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.MizarIsmuArief_popup-image').style.display = 'block';
            document.querySelector('.MizarIsmuArief_popup-image img').src = image.getAttribute('src');
        }
    });

    document.querySelector('.MizarIsmuArief_popup-image span').onclick = () => {
        document.querySelector('.MizarIsmuArief_popup-image').style.display = 'none';
    }
});
