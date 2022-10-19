-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 19, 2022 at 11:54 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic_years`
--

CREATE TABLE `academic_years` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `academic_years`
--

INSERT INTO `academic_years` (`id`, `name`, `date`) VALUES
(1, 'year 1', '2022-10-18 19:08:59'),
(2, 'year 2', '2022-10-18 19:09:25'),
(3, 'year 3', '2022-10-18 19:09:25'),
(4, 'year 4', '2022-10-18 19:09:25');

-- --------------------------------------------------------

--
-- Table structure for table `manager`
--

CREATE TABLE `manager` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `manager`
--

INSERT INTO `manager` (`id`, `email`, `password`) VALUES
(1, 'admin@admin.com', 'd033e22ae348aeb5660fc2140aec35850c4da997'),
(2, 'admin@admin.com', 'd033e22ae348aeb5660fc2140aec35850c4da997');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(20) NOT NULL,
  `password` varchar(64) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `email`, `name`, `password`, `created_at`, `updated_at`) VALUES
(1, 'student@student.com', 'student 1', '204036a1ef6e7360e536300ea78c6aeb4a9333dd', '2022-10-18 19:16:04', '2022-10-18 19:16:04'),
(2, 'student@student.com', 'student 2', '204036a1ef6e7360e536300ea78c6aeb4a9333dd', '2022-10-18 19:16:36', '2022-10-18 19:16:36'),
(3, 'student@student.com', 'student 3', '204036a1ef6e7360e536300ea78c6aeb4a9333dd', '2022-10-18 19:16:36', '2022-10-18 19:16:36'),
(4, 'student@student.com', 'student 4', '204036a1ef6e7360e536300ea78c6aeb4a9333dd', '2022-10-18 19:16:36', '2022-10-18 19:16:36');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `cost` double NOT NULL,
  `academic_year` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `name`, `cost`, `academic_year`, `date`) VALUES
(1, 'subject 1', 0, 1, '2022-10-18 19:09:52'),
(2, 'subject 1', 0, 1, '2022-10-18 19:10:14'),
(3, 'subject 2', 0, 1, '2022-10-18 19:10:15'),
(4, 'subject 3', 0, 1, '2022-10-18 19:10:15'),
(5, 'subject 4', 0, 1, '2022-10-18 19:10:15');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `email` varchar(40) NOT NULL COMMENT 'Email Address',
  `password` varchar(64) NOT NULL,
  `name` varchar(20) NOT NULL,
  `subject` int(11) NOT NULL,
  `total_salary` double NOT NULL,
  `taken_salary` double NOT NULL DEFAULT 0,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `email`, `password`, `name`, `subject`, `total_salary`, `taken_salary`, `date`) VALUES
(1, 'teacher1@teacher.com', '4a82cb6db537ef6c5b53d144854e146de79502e8', 'teacher 1', 1, 100, 0, '2022-10-18 19:13:29'),
(2, 'teacher1@teacher.com', '4a82cb6db537ef6c5b53d144854e146de79502e8', 'teacher 2', 2, 100, 0, '2022-10-18 19:14:01'),
(3, 'teacher1@teacher.com', '4a82cb6db537ef6c5b53d144854e146de79502e8', 'teacher 3', 3, 100, 0, '2022-10-18 19:14:01'),
(4, 'teacher1@teacher.com', '4a82cb6db537ef6c5b53d144854e146de79502e8', 'teacher 4', 4, 100, 0, '2022-10-18 19:14:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic_years`
--
ALTER TABLE `academic_years`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `academic_year` (`academic_year`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject` (`subject`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academic_years`
--
ALTER TABLE `academic_years`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `manager`
--
ALTER TABLE `manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `academic_year` FOREIGN KEY (`academic_year`) REFERENCES `academic_years` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teachers`
--
ALTER TABLE `teachers`
  ADD CONSTRAINT `subject` FOREIGN KEY (`subject`) REFERENCES `subjects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
