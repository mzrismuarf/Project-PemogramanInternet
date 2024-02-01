<?php
include('config/koneksi.php');
if (isset($_GET['id'])) {
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        // Mendapatkan ID buku dari parameter URL
        $bukuID = $_GET['id'];
        // Query untuk memeriksa apakah buku sedang dipinjam
        $queryCekPeminjaman = "SELECT COUNT(*) as count FROM
    detailpeminjaman WHERE BukuID = $bukuID";
        $resultCekPeminjaman = mysqli_query($koneksi, $queryCekPeminjaman);
        $rowCekPeminjaman = mysqli_fetch_assoc($resultCekPeminjaman);
        $jumlahPeminjaman = $rowCekPeminjaman['count'];
        if ($jumlahPeminjaman > 0) {
            // Jika buku sedang dipinjam, tampilkan pesan dan redirect ke halaman index.php
            echo "Buku sedang dalam peminjaman. Tidak dapat dihapus.";
            header("refresh:3;url=index.php"); // Redirect ke halaman index.php setelah 3 detik
            exit();
        } else {
            // Jika buku tidak sedang dipinjam, lanjutkan proses penghapusan
            $queryHapus = "DELETE FROM buku WHERE BukuID = $bukuID";
            // Eksekusi query
            if (mysqli_query($koneksi, $queryHapus)) {
                // Jika berhasil, redirect ke halaman index.php
                header("Location: index.php");
                exit();
            } else {
                // Jika terjadi error, tampilkan pesan error
                echo "Error: " . $queryHapus . "<br>" .

                    mysqli_error($koneksi);
            }
        }
    } else {
        // Jika bukan metode GET, redirect ke halaman index.php
        header("Location: index.php");
        exit();
    }
} else {
    header("Location: index.php");
    exit();
}
