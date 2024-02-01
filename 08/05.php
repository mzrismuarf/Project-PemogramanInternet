<?php
// Soal
// Buatlah program yang di dalamnya terdapat struktur kondisi if ... else if ... else untuk
// melakukan perhitungan total Pembelian dengan ketentuan sbb :
// a. Jika Pembelian lebih besar 1 juta akan mendapatkan diskon 15%
// b. Jika Pembelian diantara 750 ribu sampai 1 juta mendapat diskon 10%
// c. Nilai Pembelian dibawah 750 ribu mendapat diskon 7%

$total_pembelian = '1337000';


echo "[ Menghitung total pembelian dengan ketentuan ] <br>";
echo "-----------------------------------------------------------<br>";
echo "Total Pembelian = $total_pembelian <br>";

if ($total_pembelian >= 1000000 ){
    echo "Selamat, Anda mendapatkan diskon 15%";
} 

else if($total_pembelian >= 750000 && $total_pembelian <= 1000000){
    echo "Selamat, Anda mendapatkan diskon 10%";
} 

else {
    echo "Anda mendapatkan diskon 7%";
}
?>