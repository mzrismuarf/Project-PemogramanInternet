<?php

$kali = 2;

echo "Hasil Perkalian dengan angka $kali <br>";

// perulangan dengan metode for
for ($bil = 1; $bil < 11; $bil++) {
    echo "$bil.";

    //proses hitung
    $hasil_kali = $kali * $bil;

    //menampilkan hasil
    echo ("$kali * $bil = $hasil_kali <br>");
}
