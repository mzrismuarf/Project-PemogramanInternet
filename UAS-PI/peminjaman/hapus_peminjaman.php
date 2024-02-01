<?php
include('../config/koneksi.php');

if (isset($_GET['id'])) {
    $peminjamanID = $_GET['id'];

    // Hapus detail peminjaman terlebih dahulu
    $deleteDetailQuery = "DELETE FROM detailpeminjaman WHERE PeminjamanID = $peminjamanID";
    mysqli_query($koneksi, $deleteDetailQuery);

    // Hapus peminjaman
    $deletePeminjamanQuery = "DELETE FROM peminjaman WHERE PeminjamanID = $peminjamanID";
    mysqli_query($koneksi, $deletePeminjamanQuery);

    // Redirect kembali ke halaman peminjam.php
    header('Location: peminjaman.php');
    exit();
}
