<?php
include('config/koneksi.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Mengambil nilai dari formulir tambah.php
    $judul = $_POST['judul'];
    $pengarang = $_POST['pengarang'];
    $tahun_terbit = $_POST['tahun_terbit'];
    // Query untuk menambahkan data ke dalam tabel buku
    $queryTambah = "INSERT INTO buku (Judul, Pengarang, TahunTerbit)
VALUES ('$judul', '$pengarang', '$tahun_terbit')";
    // Eksekusi query
    if (mysqli_query($koneksi, $queryTambah)) {
        // Jika berhasil, redirect ke halaman index.php
        header("Location: index.php");
        exit();
    } else {
        // Jika terjadi error, tampilkan pesan error
        echo "Error: " . $queryTambah . "<br>" .
            mysqli_error($koneksi);
    }
} else {
    // Jika bukan metode POST, redirect ke halaman tambah.php
    header("Location: tambah.php");
    exit();
}
