<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Peminjam</title>
    <link rel="stylesheet" href="../css/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
    <style>
        select {
            width: 200px;
            padding: 8px;
            box-sizing: border-box;
        }
    </style>
</head>

<body>
    <header>
        <h1>Daftar Peminjaman</h1>
        <nav>
            <ul>
                <li><a href="../index.php">Daftar Buku</a></li>
                <li><a href="../peminjam/peminjam.php">Daftar Peminjam</a></li>
                <li><a href="peminjaman.php">Daftar Peminjaman</a></li>
            </ul>
        </nav>
    </header>
    <section>
        <!-- Formulir Pencarian -->
        <form action="" method="GET" id="peminjaman">

            <div class="form-group">
                <label for="">Nama Peminjam: </label>
                <select name="peminjam" id="peminjamSelect">
                    <option value="">Pilih</option>
                    <?php
                    include('../config/koneksi.php');
                    $query = "SELECT * FROM peminjam order by NamaPeminjam";
                    $result = mysqli_query($koneksi, $query);
                    while ($row = mysqli_fetch_assoc($result)) {
                        echo "<option>" . $row['NamaPeminjam'] . "</option>";
                    }
                    ?>
                </select>
            </div>
            <div class="form-group">
                <label for="TanggalPinjam">Tanggal Pinjam:</label>
                <input type="date" id="TanggalPinjam" name="TanggalPinjam">
            </div>
            <div class="form-group">
                <label for="TanggalKembali">Tanggal Kembali:</label>
                <input type="date" id="TanggalKembali" name="TanggalKembali">
            </div>
            <div class="form-group">
                <label for="buku">Buku yang dipinjam: </label>
                <select name="Buku" id="buku">
                    <option value="">Pilih</option>
                    <?php
                    include('../config/koneksi.php');
                    $query = "SELECT * FROM buku order by Judul";
                    $result = mysqli_query($koneksi, $query);
                    while ($row = mysqli_fetch_assoc($result)) {
                        echo "<option>" . $row['Judul'] . "</option>";
                    }
                    ?>
                </select>
            </div>
        </form>
        <a href="../peminjam/tambah_peminjam.php"><button>Tambah Peminjam</button></a><br><br>
        <!-- Tabel Daftar Buku -->
        <table class="responsive-table" id="daftarBuku">
            <tr>
                <th>No</th>
                <th>Judul Buku</th>
                <th>Aksi</th>
            </tr>
        </table>
        <button type="button" onclick="pinjamBuku()" class="btn-pinjamBuku">Pinjam Buku</button>
    </section>
    <script src="../js/script.js"></script>
    <script>
        function pinjamBuku() {
            // Get the form data
            var formData = new FormData(document.getElementById('peminjaman'));

            // Send an AJAX request to pinjam_buku.php
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'pinjam_buku.php', true);
            xhr.onload = function() {
                // Reload the table on success
                if (xhr.status === 200) {
                    reloadTable();
                } else {
                    // Handle errors if needed
                    alert('Failed to add book loan.');
                }
            };
            xhr.send(formData);
        }


        function hapusPeminjam(PeminjamanID) {
            var konfirmasi = confirm("Apakah Anda yakin ingin menghapus peminjaman ini ? ");

            if (konfirmasi) {
                // Buat XMLHttpRequest untuk menghapus peminjaman dari server
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'hapus_peminjaman.php?id=' + PeminjamanID, true);

                xhr.onload = function() {
                    if (xhr.status == 200) {
                        // Jika penghapusan berhasil, reload tabel
                        reloadTable();
                    } else {
                        // Handle errors if needed
                        alert('Failed to delete book loan.');
                    }
                };

                xhr.send();
            }
        }

        //fungsi reloadTable versi baru
        function reloadTable() {
            // Reload the table by updating its content
            var table = document.getElementById('daftarBuku');

            // You may need to modify the following line based on your implementation
            table.innerHTML = '<tr><th>No</th><th>Judul Buku</th><th>Aksi</th></tr>';

            // Reload the data from the server using the existing change event
            var event = new Event('change');
            document.getElementById('peminjamSelect').dispatchEvent(event);
        }
    </script>
    <div class="footer-love">
        <p>Made with <i class="ri-heart-fill"></i> Mizar Ismu Arief</p>
    </div>
</body>

</html>