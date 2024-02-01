<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-
scale=1.0">

    <title>Edit Peminjam</title>
    <link rel="stylesheet" href="../css/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />

</head>

<body>
    <header>
        <h1>Edit Peminjam</h1>
        <nav>
            <ul>
                <li><a href="../index.php">Home</a></li>
            </ul>
        </nav>
    </header>
    <section>
        <?php
        include('../config/koneksi.php');

        // Memastikan bahwa parameter 'id' telah diberikan dalam URL
        if (isset($_GET['id'])) {
            // Mendapatkan ID buku dari parameter URL
            $PeminjamID = $_GET['id'];

            // Query untuk mengambil data buku berdasarkan ID
            $queryEdit = "SELECT * FROM peminjam WHERE PeminjamID = $PeminjamID";
            $resultEdit = mysqli_query($koneksi, $queryEdit);

            if (mysqli_num_rows($resultEdit) == 1) {
                $rowEdit = mysqli_fetch_assoc($resultEdit);
        ?>
                <!-- Formulir Edit Data -->
                <form action="proses_edit_peminjam.php" method="POST" class="edit-form">
                    <input type="hidden" name="PeminjamID" value="<?php echo $rowEdit['PeminjamID']; ?>">
                    <label for="NamaPeminjam">Nama Peminjam:</label>
                    <input type="text" id="NamaPeminjam" name="NamaPeminjam" value="<?php echo $rowEdit['NamaPeminjam']; ?>" required>
                    <label for="Alamat">Alamat:</label>
                    <input type="text" id="Alamat" name="Alamat" value="<?php echo $rowEdit['Alamat']; ?>">
                    <label for="NoTelepon">No Telepon:</label>
                    <input type="text" id="NoTelepon" name="NoTelepon" value="<?php echo $rowEdit['NoTelepon']; ?>">
                    <div><br></div>
                    <div>
                        <button type="submit">Simpan Perubahan</button>
                    </div>
                </form>
        <?php
            } else {
                echo "Data buku tidak ditemukan.";
            }
        } else {
            // Jika parameter 'id' tidak diberikan, redirect ke peminjam.php
            header("Location: peminjam.php");
            exit(); // Pastikan tidak ada kode eksekusi setelah redirect
        }
        ?>

    </section>
    <script src="../js/script.js"></script>
    <div class="footer-love">
        <p>Made with <i class="ri-heart-fill"></i> Mizar Ismu Arief</p>
    </div>
</body>

</html>