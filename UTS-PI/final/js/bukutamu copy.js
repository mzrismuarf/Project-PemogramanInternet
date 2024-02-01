document.addEventListener("DOMContentLoaded", function () {
    // fungsi ke tombol kirim klik
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", MizarIsmuArief_kirimForm);
});

function MizarIsmuArief_kirimForm() {

    var formElements = document.getElementById("MizarIsmuArief_guestBookForm").elements;
    var isValid = true;

    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].type !== "submit" && formElements[i].value === "") {
            isValid = false;
            break;
        }
    }

    if (isValid) {
        // popup jika berhasil
        MizarIsmuArief_showPopup("Terima kasih sudah mengunjungi dan mengisi buku tamu");
    } else {
        // popup jika gagal
        MizarIsmuArief_showPopup("Mohon diisi semua form terlebih dahulu");
    }
}

function MizarIsmuArief_showPopup(message) {
    document.getElementById("MizarIsmuArief_popupText").innerHTML = message;
    document.getElementById("MizarIsmuArief_popup").style.display = "block";
    document.getElementById("MizarIsmuArief_overlay").style.display = "block";

}

function MizarIsmuArief_closePopup() {
    document.getElementById("MizarIsmuArief_popup").style.display = "none";
    document.getElementById("MizarIsmuArief_overlay").style.display = "none";

}