<?php
include('config/koneksi.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Mengambil nilai dari formulir edit.php
    $bukuID = $_POST['bukuID'];
    $judul = $_POST['judul'];
    $pengarang = $_POST['pengarang'];
    $tahun_terbit = $_POST['tahun_terbit'];

    // Query untuk mengupdate data buku
    $queryUpdate = "UPDATE buku SET Judul = '$judul', Pengarang =
'$pengarang', TahunTerbit = '$tahun_terbit' WHERE BukuID = $bukuID";
    // Eksekusi query
    if (mysqli_query($koneksi, $queryUpdate)) {
        // Jika berhasil, redirect ke halaman index.php
        header("Location: index.php");
        exit();
    } else {
        // Jika terjadi error, tampilkan pesan error
        echo "Error: " . $queryUpdate . "<br>" .
            mysqli_error($koneksi);
    }
} else {
    // Jika bukan metode POST, redirect ke halaman index.php
    header("Location: index.php");
    exit();
}
