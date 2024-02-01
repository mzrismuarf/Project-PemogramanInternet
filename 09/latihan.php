<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tabel Perkalian</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    <h1 class="text-center">Table Perkalian</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Perkalian 2</th>
                <th scope="col">Perkalian 3</th>
                <th scope="col">Perkalian 4</th>
                <th scope="col">Perkalian 5</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $bil = 1;

            $perkalian_dua = 2;
            $perkalian_tiga = 3;
            $perkalian_empat = 4;
            $perkalian_lima = 5;

            while ($bil <= 10) {

                $hasil_kali_dua = $perkalian_dua * $bil;
                $hasil_kali_tiga = $perkalian_tiga * $bil;
                $hasil_kali_empat = $perkalian_empat * $bil;
                $hasil_kali_lima = $perkalian_lima * $bil;

                echo "<tr>";
                echo "<td>$bil</td>";
                echo "<td>$bil x $perkalian_dua = $hasil_kali_dua </td>";
                echo "<td>$bil x $perkalian_tiga = $hasil_kali_tiga </td>";
                echo "<td>$bil x $perkalian_empat = $hasil_kali_empat </td>";
                echo "<td>$bil x $perkalian_lima = $hasil_kali_lima </td>";
                echo "</tr>";
                $bil++;
            }
            ?>
        </tbody>
    </table>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</html>