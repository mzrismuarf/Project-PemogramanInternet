<?php
$host = "sql200.infinityfree.com";
$username = "if0_35802392";
$password = "BU7CLri9adI2wR8";
$database = "if0_35802392_pi_uasdbperpus";

$koneksi = mysqli_connect($host, $username, $password, $database);

if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
