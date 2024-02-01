<?php
include('../config/koneksi.php');

// Memastikan bahwa parameter 'id' telah diberikan dalam URL
if (isset($_GET['id'])) {
    // Mendapatkan ID Peminjam dari parameter URL
    $PeminjamID = $_GET['id'];

    // Query untuk memeriksa apakah peminjam sedang meminjam buku
    $queryCekPeminjaman = "SELECT COUNT(*) as count FROM peminjaman WHERE PeminjamID = $PeminjamID AND TanggalKembali IS NULL";
    $resultCekPeminjaman = mysqli_query($koneksi, $queryCekPeminjaman);
    $rowCekPeminjaman = mysqli_fetch_assoc($resultCekPeminjaman);
    $jumlahPeminjaman = $rowCekPeminjaman['count'];

    if ($jumlahPeminjaman > 0) {
        // Jika buku sedang dipinjam, tampilkan pesan
        echo "Peminjam sedang dalam meminjam buku. Tidak dapat dihapus.";
    } else {
        // Jika buku tidak sedang dipinjam, lanjutkan proses penghapusan

        // Hapus detail peminjaman terlebih dahulu
        $queryHapusDetail = "DELETE FROM detailpeminjaman WHERE PeminjamanID IN (SELECT PeminjamanID FROM peminjaman WHERE PeminjamID = $PeminjamID)";
        mysqli_query($koneksi, $queryHapusDetail);

        // Hapus peminjaman
        $queryHapusPeminjaman = "DELETE FROM peminjaman WHERE PeminjamID = $PeminjamID";
        mysqli_query($koneksi, $queryHapusPeminjaman);

        // Hapus peminjam
        $queryHapus = "DELETE FROM peminjam WHERE PeminjamID = $PeminjamID";

        // Eksekusi query
        if (mysqli_query($koneksi, $queryHapus)) {
            // Jika berhasil, redirect ke halaman peminjam.php
            header("Location: peminjam.php");
            exit();
        } else {
            // Jika terjadi error, tampilkan pesan error
            echo "Error: " . $queryHapus . "<br>" . mysqli_error($koneksi);
        }
    }
} else {
    // Jika parameter 'id' tidak diberikan, redirect ke peminjam.php
    header("Location: peminjam.php");
    exit(); // Pastikan tidak ada kode eksekusi setelah redirect
}
