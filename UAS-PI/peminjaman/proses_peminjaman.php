<?php
include '../config/koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $namaPeminjam = $_POST['NamaPeminjam'];
    $tanggalPinjam = $_POST['TanggalPinjam'];
    $tanggalKembali = $_POST['TanggalKembali'];
    $bukuDipinjam = $_POST['Buku'];

    // Retrieve PeminjamID and BukuID based on selected values
    $peminjamResult = mysqli_query($koneksi, "SELECT PeminjamID FROM peminjam WHERE NamaPeminjam = '$namaPeminjam'");
    $bukuResult = mysqli_query($koneksi, "SELECT BukuID FROM buku WHERE Judul = '$bukuDipinjam'");

    $peminjamRow = mysqli_fetch_assoc($peminjamResult);
    $bukuRow = mysqli_fetch_assoc($bukuResult);

    $peminjamID = $peminjamRow['PeminjamID'];
    $bukuID = $bukuRow['BukuID'];

    // Insert into peminjaman table
    $insertPeminjaman = mysqli_query($koneksi, "INSERT INTO peminjaman (PeminjamID, TanggalPinjam, TanggalKembali) 
                                               VALUES ('$peminjamID', '$tanggalPinjam', '$tanggalKembali')");

    if ($insertPeminjaman) {
        // Retrieve the PeminjamanID of the newly added entry
        $peminjamanID = mysqli_insert_id($koneksi);

        // Insert into detailpeminjaman table
        $insertDetailPeminjaman = mysqli_query($koneksi, "INSERT INTO detailpeminjaman (PeminjamanID, BukuID) 
                                                         VALUES ('$peminjamanID', '$bukuID')");

        if ($insertDetailPeminjaman) {
            // Return success status
            echo json_encode(["status" => "success"]);
        } else {
            // Return error status
            echo json_encode(["status" => "error"]);
        }
    } else {
        // Return error status
        echo json_encode(["status" => "error"]);
    }
}

mysqli_close($koneksi);
