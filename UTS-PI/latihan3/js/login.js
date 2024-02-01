document.addEventListener("DOMContentLoaded", function () {
    // Kode JavaScript Anda di sini
    var attempt = 3; // Variable to count the number of attempts.
    var waiting = false; // Variable to track if the waiting period is active.

    // ...

    function validateLogin() {

        if (waiting) {
            alert("Tunggu 5 detik untuk mencoba login kembali :)");
            return;
        }

        // Mendapatkan nilai input dari halaman login
        var enteredUsername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("password").value;

        // Mendapatkan nilai dari local storage
        var registeredUsername = localStorage.getItem("registeredUsername");
        var registeredPassword = localStorage.getItem("registeredPassword");

        // Memeriksa apakah username dan password yang dimasukkan sama dengan yang terdaftar
        if (enteredUsername === registeredUsername && enteredPassword === registeredPassword) {
            alert("Selamat, Anda sudah berhasil login!");
            alert("Setelah ini, Anda akan dialihkan ke Halaman Menu!");
            window.location.replace('menu.html');
        } else {
            attempt--;
            alert("Username atau password salah. Anda memiliki " + attempt + " kesempatan tersisa.");
            alert("Silahkan Registrasi Terlebih dahulu, agar bisa ke halaman Menu!");

            if (attempt === 0) {
                disableLoginForm();
                setTimeout(enableLoginForm, 5000); // Enable the form after 5 seconds.
            }
        }
    }

    function disableLoginForm() {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        waiting = true;
    }

    function enableLoginForm() {
        document.getElementById("username").disabled = false;
        document.getElementById("password").disabled = false;
        document.getElementById("submit").disabled = false;
        attempt = 3; // Reset the attempts.
        waiting = false;
    }

    // ...
    document.getElementById("submit").addEventListener("click", validateLogin);

});