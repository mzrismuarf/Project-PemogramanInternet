document.addEventListener("DOMContentLoaded", function () {

    function registerUser() {
        var email = document.getElementById("mail").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var telepon = document.getElementById("telepon").value;

        // cek apakah semua input telah diisi?
        if (!email || !username || !password || !telepon) {
            alert("Silahkan isi semua kolom dengan lengkap.");
            return; // menghntikan / stop sbuah eksekusi fungsi jika ada input yng kosong
        }

        // simpan data ke dalm local storage
        localStorage.setItem("registeredUsername", username);
        localStorage.setItem("registeredPassword", password);

        // untuk menyimpan data lainya jka diperlukn

        alert("Registrasi berhasil!");
        // meredirect ke sebuah halaman login
        window.location.replace('login.html');
    }

    // membuat sebuah fungsi accessibleRegisterUser untuk memanggil fungsi registerUser dari button
    document.getElementById("submit").addEventListener("click", registerUser);
});