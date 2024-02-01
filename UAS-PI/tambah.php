<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-
scale=1.0">

    <title>Tambah Buku</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <header>
        <h1>Tambah Buku</h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
            </ul>
        </nav>
    </header>
    <section>
        <div class="form-container">
            <!-- Formulir Tambah Data -->

            <form action="proses_tambah.php" method="POST" class="add-
form">

                <div class="form-group">
                    <label for="judul">Judul Buku:</label>
                    <input type="text" id="judul" name="judul" required>

                </div>
                <div class="form-group">
                    <label for="pengarang">Pengarang:</label>
                    <input type="text" id="pengarang" name="pengarang">
                </div>
                <div class="form-group">
                    <label for="tahun_terbit">Tahun Terbit:</label>
                    <input type="text" id="tahun_terbit" name="tahun_terbit">
                </div>
                <button type="submit">Tambah</button>
            </form>
        </div>
    </section>
    <script src="js/script.js"></script>
</body>

</html>