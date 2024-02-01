<?php

include('../config/koneksi.php');

if (isset($_GET['namaPeminjam'])) {
    $namaPeminjam = $_GET['namaPeminjam'];

    // Query untuk mendapatkan data peminjaman berdasarkan NamaPeminjam
    $query = "SELECT peminjaman.PeminjamanID, peminjam.NamaPeminjam, peminjaman.TanggalPinjam, peminjaman.TanggalKembali, buku.Judul
              FROM peminjaman
              JOIN peminjam ON peminjaman.PeminjamID = peminjam.PeminjamID
              JOIN detailpeminjaman ON peminjaman.PeminjamanID = detailpeminjaman.PeminjamanID
              JOIN buku ON detailpeminjaman.BukuID = buku.BukuID
              WHERE peminjam.NamaPeminjam = '$namaPeminjam'";

    $result = mysqli_query($koneksi, $query);

    // Menghasilkan data sebagai JSON
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
}
