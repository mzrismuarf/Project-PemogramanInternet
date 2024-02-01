-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2024 at 03:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pi_uasdbperpus`
--

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `BukuID` int(11) NOT NULL,
  `Judul` varchar(255) NOT NULL,
  `Pengarang` varchar(255) DEFAULT NULL,
  `TahunTerbit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`BukuID`, `Judul`, `Pengarang`, `TahunTerbit`) VALUES
(1, 'IMK', 'Rudi Hartono', 2023),
(2, 'Jaringan Komputer', 'Jajang Nurwahid', 2020),
(3, 'Bahasa C', 'Deden Komarudin', 2021),
(4, 'Pemograman Internet', 'Teguh Ashoy', 2001),
(5, 'Basis Data', 'Maman Joki', 2022),
(6, 'Koleksi Lengkap Software Hacking', 'Dedik Kurniawan Java Creativity', 2013),
(7, 'Rangkaian Listrik', 'Cekmas Cekdin', 2013),
(8, 'Mengatasi 1001 Kerusakan Komputer', 'Ahmad Yani', 2010),
(9, 'Analisis Jaringan Komunikasi', 'Eriyanto', 2019),
(10, 'Handbook Jaringan Komputer', 'I Putu Agus Eka Pratama', 2016),
(11, 'Buku Programming Wireless Untuk Arduino + cd', 'Abdul Kadir', 2018),
(12, '\"Arduino, Belajar Cepat Dan Pemrograman\"', 'Heri Andrianto', 2016),
(13, 'Security Jaringan Komputer Berbasis CEH', 'Rifkie Primartha', 2018);

-- --------------------------------------------------------

--
-- Table structure for table `detailpeminjaman`
--

CREATE TABLE `detailpeminjaman` (
  `PeminjamanID` int(11) DEFAULT NULL,
  `BukuID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `detailpeminjaman`
--

INSERT INTO `detailpeminjaman` (`PeminjamanID`, `BukuID`) VALUES
(62, 12),
(63, 7),
(64, 6),
(65, 13),
(66, 1),
(67, 3),
(68, 4);

-- --------------------------------------------------------

--
-- Table structure for table `peminjam`
--

CREATE TABLE `peminjam` (
  `PeminjamID` int(11) NOT NULL,
  `NamaPeminjam` varchar(255) NOT NULL,
  `Alamat` varchar(255) DEFAULT NULL,
  `NoTelepon` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjam`
--

INSERT INTO `peminjam` (`PeminjamID`, `NamaPeminjam`, `Alamat`, `NoTelepon`) VALUES
(1, 'Harley', 'Jl. Contoh No. 123', '08123456789'),
(2, 'Alucard', 'Jl. Contoh No. 456', '08234567890'),
(3, 'Zilong', 'Jl. Contoh No. 789', '08345678901'),
(4, 'Estes', 'Jl. Contoh No. 012', '08456789012'),
(5, 'Eudora', 'Jl. Contoh No. 345', '0856789123'),
(6, 'Arum', 'Jl. Contoh No. 346', '0851234567'),
(7, 'Wiro', 'Jl. Contoh No. 456', '0852345678'),
(8, 'Paine', 'Jl. Contoh No. 567', '0853456789'),
(9, 'Grakk', 'Jl. Contoh No. 678', '08545678910'),
(10, 'Zill', 'Jl. Contoh No. 789', '08556789101'),
(11, 'Deden', 'Jl. Contoh No. 890', '08567891012');

-- --------------------------------------------------------

--
-- Table structure for table `peminjaman`
--

CREATE TABLE `peminjaman` (
  `PeminjamanID` int(11) NOT NULL,
  `PeminjamID` int(11) DEFAULT NULL,
  `TanggalPinjam` date DEFAULT NULL,
  `TanggalKembali` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `peminjaman`
--

INSERT INTO `peminjaman` (`PeminjamanID`, `PeminjamID`, `TanggalPinjam`, `TanggalKembali`) VALUES
(62, 2, '2024-01-09', '2024-01-17'),
(63, 2, '2024-01-07', '2024-01-14'),
(64, 2, '2024-01-05', '2024-01-13'),
(65, 6, '2024-01-04', '2024-01-12'),
(66, 6, '2024-01-05', '2024-01-13'),
(67, 4, '2024-01-08', '2024-01-12'),
(68, 4, '2024-01-09', '2024-01-13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`BukuID`);

--
-- Indexes for table `detailpeminjaman`
--
ALTER TABLE `detailpeminjaman`
  ADD KEY `PeminjamanID` (`PeminjamanID`),
  ADD KEY `BukuID` (`BukuID`);

--
-- Indexes for table `peminjam`
--
ALTER TABLE `peminjam`
  ADD PRIMARY KEY (`PeminjamID`);

--
-- Indexes for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`PeminjamanID`),
  ADD KEY `PeminjamID` (`PeminjamID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `BukuID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `peminjam`
--
ALTER TABLE `peminjam`
  MODIFY `PeminjamID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `PeminjamanID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detailpeminjaman`
--
ALTER TABLE `detailpeminjaman`
  ADD CONSTRAINT `detailpeminjaman_ibfk_1` FOREIGN KEY (`PeminjamanID`) REFERENCES `peminjaman` (`PeminjamanID`),
  ADD CONSTRAINT `detailpeminjaman_ibfk_2` FOREIGN KEY (`BukuID`) REFERENCES `buku` (`BukuID`);

--
-- Constraints for table `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD CONSTRAINT `peminjaman_ibfk_1` FOREIGN KEY (`PeminjamID`) REFERENCES `peminjam` (`PeminjamID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
