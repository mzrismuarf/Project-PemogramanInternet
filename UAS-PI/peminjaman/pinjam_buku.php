<?php
include('../config/koneksi.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $peminjam = $_POST['peminjam'];
    $tanggalPinjam = $_POST['TanggalPinjam'];
    $tanggalKembali = $_POST['TanggalKembali'];
    $buku = $_POST['Buku'];

    // Perform the database insertion here
    // Assuming PeminjamID and BukuID are available in the database
    // You need to adjust the SQL queries based on your database schema
    $queryPeminjam = "SELECT PeminjamID FROM peminjam WHERE NamaPeminjam = '$peminjam'";
    $resultPeminjam = mysqli_query($koneksi, $queryPeminjam);
    $rowPeminjam = mysqli_fetch_assoc($resultPeminjam);
    $peminjamID = $rowPeminjam['PeminjamID'];

    $queryBuku = "SELECT BukuID FROM buku WHERE Judul = '$buku'";
    $resultBuku = mysqli_query($koneksi, $queryBuku);
    $rowBuku = mysqli_fetch_assoc($resultBuku);
    $bukuID = $rowBuku['BukuID'];

    $queryInsert = "INSERT INTO peminjaman (PeminjamID, TanggalPinjam, TanggalKembali) VALUES ('$peminjamID', '$tanggalPinjam', '$tanggalKembali')";
    mysqli_query($koneksi, $queryInsert);

    // Get the last inserted PeminjamanID
    $peminjamanID = mysqli_insert_id($koneksi);

    // Insert into detailpeminjaman table
    $queryDetail = "INSERT INTO detailpeminjaman (PeminjamanID, BukuID) VALUES ('$peminjamanID', '$bukuID')";
    mysqli_query($koneksi, $queryDetail);

    // Redirect back to the original page
    header("Location: peminjaman.php");
    exit();
} else {
    // Handle invalid request
    echo "Invalid request";
}
