<?php
// Soal
// Buat program PHP yang menghitung total harga belanjaan dengan menerapkan diskon.
// Gunakan variabel untuk menyimpan harga awal, persentase diskon, dan harga setelah
// diskon. Tampilkan hasil perhitungan tersebut.


$harga_awal = 133700;
$persentase_diskon = 30;

$hitung_diskon = ($harga_awal*$persentase_diskon)/100;
// $persentase_diskon = ($harga_awal*30)/100;
$harga_setelah_diskon = $hitung_diskon;


echo "[ Menghitung Total Belanjaan] <br>";
echo "------------------------------------- <br>";
echo "Harga awal = Rp.$harga_awal <br>";
echo "Diskon = $persentase_diskon% <br>";
echo "Total setelah diskon = Rp.$harga_setelah_diskon"

?>