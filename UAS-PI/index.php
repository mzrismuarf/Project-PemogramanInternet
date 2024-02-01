<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Buku</title>
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
    <style>
    </style>
</head>

<body>
    <header>
        <h1>Daftar Buku</h1>
        <nav>
            <ul>
                <!-- <li><a href="index.php">Home</a></li> -->
                <li><a href="index.php">Daftar Buku</a></li>
                <li><a href="peminjam/peminjam.php">Daftar Peminjam</a></li>
                <li><a href="peminjaman/peminjaman.php">Daftar Peminjaman</a></li>
            </ul>
        </nav>
    </header>
    <section>

        <!-- Formulir Pencarian -->
        <form action="index.php" method="GET" class="search-form">
            <div class="search-container">
                <input type="text" id="search" name="search" placeholder="Judul Buku" value="<?php echo isset($_GET['search']) ? $_GET['search'] : ''; ?>">
                <button type="submit" class="btn-cari">Cari</button>
            </div>
        </form>
        <a href="tambah.php"><button>Tambah Buku</button></a>
        <!-- <a href="tambah.php"><button>Tambah Buku</button></a> -->
        <!-- Tabel Daftar Buku -->
        <br><br>
        <table class="responsive-table">
            <tr>
                <th>BukuID</th>
                <th>Judul</th>
                <th>Pengarang</th>
                <th>Tahun Terbit</th>
                <th>Aksi</th>
                <!-- <a href=""></a> -->
            </tr>
            <?php
            include('config/koneksi.php');
            // Logika Pencarian
            $search = isset($_GET['search']) ? $_GET['search'] : '';
            $query = "SELECT * FROM buku WHERE Judul LIKE '%$search%'";
            $result = mysqli_query($koneksi, $query);
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo "<td>" . $row['BukuID'] . "</td>";
                echo "<td>" . $row['Judul'] . "</td>";
                echo "<td>" . $row['Pengarang'] . "</td>";
                echo "<td>" . $row['TahunTerbit'] . "</td>";
                echo "<td class='td-aksi'>";
                echo "<a href='edit.php?id=" . $row['BukuID'] . "'><button class='edit-btn'>Edit</button></a> ";

                echo "<a href='#' onclick='hapusBuku(" . $row['BukuID'] .

                    ")'><button class='hapus-btn'>Hapus</button></a>";

                echo "</td>";
                echo "</tr>";
            }
            ?>
        </table>
    </section>
    <script src="js/script.js"></script>
    <script>
        function hapusBuku(bukuID) {
            var konfirmasi = confirm("Apakah Anda yakin ingin menghapusbuku ini ? ");

            if (konfirmasi) {
                window.location.href = 'hapus.php?id=' + bukuID;
            }
        }
    </script>
    <div class="footer-love">
        <p>Made with <i class="ri-heart-fill"></i> Mizar Ismu Arief</p>
    </div>

</body>

</html>