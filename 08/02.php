<?php
// Soal:
// // Buat program PHP yang menggunakan variabel untuk menghitung luas dan keliling lingkaran. 
// Gunakan variabel untuk menyimpan nilai jari-jari. Tampilkan hasil perhitungan tersebut.

$jari_jari = 7;
$luas = 22/7 * pow($jari_jari, 2);

$keliling = 2 * 22/7 * $jari_jari;

// mencari luas
echo "Mencari Luas Lingkaran <br>";
echo "Rumus: L = phi x r x r <br>";
echo "--------------------------------- <br>";
echo "r = $jari_jari <br>";
echo "Maka Luas lingkaran adalah: <br>";
echo "L = phi x r x r <br>";
echo "L = 22/7 x $jari_jari x $jari_jari <br>";
echo "L = $luas <br>";

// echo "---------------------------------";
echo"<br>";

// mencari keliling
echo "Mencari Keliling Lingkaran <br>";
echo "Rumus K = 2 x phi x r <br>";
echo "--------------------------------- <br>";
echo "r = $jari_jari <br>";
echo "Maka Keliling lingkaran adalah: <br>";
echo "K = 2 x phi x r <br>";
echo "K = 2 x 22/7 x $jari_jari <br>";
echo "K = $keliling";
?>