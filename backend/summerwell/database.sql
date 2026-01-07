-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 07, 2026 at 09:13 PM
-- Server version: 10.11.13-MariaDB-0ubuntu0.24.04.1
-- PHP Version: 8.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `summerwell`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_settings`
--

CREATE TABLE `app_settings` (
  `id` int(11) NOT NULL,
  `option_name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_settings`
--

INSERT INTO `app_settings` (`id`, `option_name`, `value`) VALUES
(1, 'edition', '2026'),
(2, 'dateStart', '2026-08-07T17:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `artist_id` bigint(20) NOT NULL,
  `year` int(11) NOT NULL,
  `name` varchar(24) NOT NULL,
  `image` varchar(500) NOT NULL,
  `stage_id` bigint(20) NOT NULL,
  `date` int(1) NOT NULL,
  `act_start` time NOT NULL,
  `act_end` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`artist_id`, `year`, `name`, `image`, `stage_id`, `date`, `act_start`, `act_end`) VALUES
(1, 2026, 'Clairo', 'https://cdn-images.dzcdn.net/images/cover/6dfa4ea965a74b93870a85daa74b7ca3/0x1900-000000-80-0-0.jpg', 1, 1, '19:45:00', '20:45:00'),
(2, 2026, 'Fontaines D.C.', 'https://i.scdn.co/image/ab67616100005174c4b9cd69cf77ce41487dd69a', 1, 1, '21:00:00', '22:30:00'),
(3, 2026, 'Chappell Roan', 'https://media.pitchfork.com/photos/64ff1676931354660ba71d8b/1:1/w_4358,h_4358,c_limit/Chappell-Roan-Princess.jpg', 1, 2, '23:00:00', '00:30:00'),
(4, 2026, 'Balu Brigada', 'https://www.atlanticrecords.com/sites/g/files/g2000015596/files/styles/artistlanding/public/2023-03/balubrigada_5.jpg?itok=I3Unslkq', 1, 1, '18:15:00', '19:30:00'),
(5, 2026, 'Wet Leg', 'https://cdn-images.dzcdn.net/images/cover/8a22859ecaf89fcb363298f165377b83/0x1900-000000-80-0-0.jpg', 1, 2, '21:40:00', '22:45:00'),
(6, 2026, 'The Last Dinner Party', 'https://cdn-images.dzcdn.net/images/cover/f038d85175069e6dd85e9e9b90db7d38/0x1900-000000-80-0-0.jpg', 1, 1, '22:45:00', '00:15:00'),
(7, 2026, 'Lola Young', 'https://cdn.craft.cloud/3747bbfe-07db-499d-aa3d-b239ba21c062/assets/albums/Lola-Young-Im-Only-Fking-Myself-cover.jpg?width=1200&format=webp&fit=cover&s=G9TUQ5bMNBTdKHZ0P3BigvfNVrOaUi9FkBsG6aanA2Y', 2, 1, '20:15:00', '21:30:00'),
(8, 2026, 'boygenius', 'https://static01.nyt.com/images/2024/01/07/magazine/07mag-boygenius/07mag-boygenius-mediumSquareAt3X.jpg', 1, 2, '20:00:00', '21:25:00'),
(9, 2026, 'PinkPantheress', 'https://www.atlanticrecords.com/sites/g/files/g2000015596/files/styles/artist_image_detail/public/2025-10/ATL_PINKPANTHERESS%20%281%29.jpg?itok=XE4UKSDC', 1, 3, '22:35:00', '23:50:00'),
(10, 2026, 'Men I Trust', 'https://cdn-images.dzcdn.net/images/artist/6ba5514f705f2d77a99ee62a28aa358a/1900x1900-000000-80-0-0.jpg', 1, 3, '18:15:00', '19:30:00'),
(11, 2026, 'Madison Beer', 'https://imgix.ranker.com/user_node_img/50150/1002984038/original/1002984038-photo-u-1544504742?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355', 1, 3, '21:00:00', '22:20:00'),
(12, 2026, 'Caroline Polachek', 'https://people.com/thmb/rBlbZOf2FSnY0KZwD9nY-BACjG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(704x159:706x161)/caroline-polachek-song-040423-2-b986ebeb492c460faa0ac93b2bd4d06a.jpg', 1, 3, '19:45:00', '20:45:00'),
(13, 2026, 'Joost Klein', 'https://cdn-images.dzcdn.net/images/cover/8deddeee1f7825e8e979b01348567c66/0x1900-000000-80-0-0.jpg', 2, 2, '19:20:00', '20:40:00'),
(14, 2026, 'Djo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDEcYEkTfpD8W4dJaUu-8kXnsOYI5JKdQE_Q&s', 2, 3, '19:30:00', '20:45:00'),
(15, 2026, 'Sienna Spiro', 'https://media.vogue.fr/photos/6915fff0da2563143fc5fd49/1:1/w_3648,h_3648,c_limit/Sienna%20Spiro%20DOTH%20Lead%20Press%201.jpg', 2, 2, '20:55:00', '22:15:00'),
(16, 2026, 'Frances Anderson', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uTxZhWSeqq-paavD3bDfWNqo7E721_6oYw&s', 1, 2, '18:20:00', '19:35:00'),
(17, 2026, 'Faye Webster', 'https://yt3.googleusercontent.com/-LWvF6BtIL01DkMR8UNC4bE9rVgCdBIysmSEtYj5D0nKFK5J1WXKB28VE0i43rHb6PVuUPXzGS4=s900-c-k-c0x00ffffff-no-rj', 2, 2, '22:30:00', '23:45:00'),
(18, 2026, 'Inhaler', 'https://www.tenementtv.com/wp-content/uploads/2022/06/inhaler.jpeg', 2, 1, '21:45:00', '23:00:00'),
(19, 2026, 'Harry Strange', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lZg9lThPHrw_fA15kZRo-m9wtW7yKHYjbA&s', 2, 1, '18:30:00', '19:55:00'),
(20, 2026, 'Ski Aggu', 'https://www.tagesspiegel.de/images/10621405/alternates/BASE_1_1_W1000/1697362690000/musiker-ski-aggu-im-volkspark-wilmersdorf.jpeg', 2, 3, '18:10:00', '19:20:00'),
(21, 2026, 'King Princess', 'https://yt3.googleusercontent.com/F1TWJLGa5nnfF2ai9preH-IDLzY8dIzaLlrr1Z-PwVvTcIrE8DdAhZj4uatcmF76WlZBGqhS_ig=s900-c-k-c0x00ffffff-no-rj', 2, 3, '21:00:00', '22:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `map`
--

CREATE TABLE `map` (
  `id` bigint(20) NOT NULL,
  `edition` int(4) NOT NULL DEFAULT 2026,
  `category` varchar(255) NOT NULL,
  `id_category` varchar(255) DEFAULT NULL,
  `lon` float NOT NULL,
  `lat` float NOT NULL,
  `published` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `map`
--

INSERT INTO `map` (`id`, `edition`, `category`, `id_category`, `lon`, `lat`, `published`) VALUES
(32, 2026, 'bar', NULL, 25.9414, 44.5647, 1),
(33, 2026, 'bar', NULL, 25.9413, 44.5654, 1),
(34, 2026, 'bar', NULL, 25.9414, 44.5668, 1),
(35, 2026, 'bar', NULL, 25.9408, 44.5674, 1),
(36, 2026, 'bar', NULL, 25.9413, 44.5676, 1),
(37, 2026, 'bar', NULL, 25.9408, 44.568, 1),
(38, 2026, 'bar', NULL, 25.9404, 44.5675, 1),
(39, 2026, 'bar', NULL, 25.9399, 44.5674, 1),
(40, 2026, 'bar', NULL, 25.9403, 44.5689, 1),
(41, 2026, 'food', NULL, 25.9374, 44.5678, 1),
(42, 2026, 'toilets', NULL, 25.937, 44.568, 1),
(43, 2026, 'bar', NULL, 25.9377, 44.5679, 1),
(44, 2026, 'bar', NULL, 25.9377, 44.5683, 1),
(45, 2026, 'top-up', NULL, 25.9377, 44.5681, 1),
(46, 2026, 'bar', NULL, 25.9377, 44.5672, 1),
(47, 2026, 'stage', '2', 25.9375, 44.5666, 1),
(48, 2026, 'bar', NULL, 25.9379, 44.566, 1),
(49, 2026, 'bar', NULL, 25.939, 44.5653, 1),
(50, 2026, 'top-up', NULL, 25.9389, 44.5654, 1),
(51, 2026, 'food', NULL, 25.9391, 44.5654, 1),
(52, 2026, 'bar', NULL, 25.9392, 44.5654, 1),
(53, 2026, 'toilets', NULL, 25.9399, 44.5651, 1),
(54, 2026, 'bar', NULL, 25.94, 44.5653, 1),
(55, 2026, 'top-up', NULL, 25.9407, 44.5646, 1),
(56, 2026, 'first-aid', NULL, 25.941, 44.5652, 1),
(57, 2026, 'toilets', NULL, 25.9414, 44.5644, 1),
(58, 2026, 'food', NULL, 25.9417, 44.5646, 1),
(59, 2026, 'top-up', NULL, 25.9412, 44.5678, 1),
(60, 2026, 'toilets', NULL, 25.941, 44.5681, 1),
(61, 2026, 'stage', '1', 25.9402, 44.5667, 1),
(62, 2026, 'food', NULL, 25.9405, 44.569, 1);

-- --------------------------------------------------------

--
-- Table structure for table `stages`
--

CREATE TABLE `stages` (
  `stage_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stages`
--

INSERT INTO `stages` (`stage_id`, `name`, `color`) VALUES
(1, 'Orange Main Stage', 'orange'),
(2, 'Sunset Stage by ING x VISA', 'yellow');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `ticket_type_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `ticket_code` varchar(30) DEFAULT NULL,
  `wristband_code` varchar(12) DEFAULT NULL,
  `wristband_pin` varchar(20) DEFAULT NULL,
  `balance` decimal(10,2) DEFAULT 0.00,
  `purchase_date` datetime DEFAULT current_timestamp(),
  `is_scanned` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ticket_types`
--

CREATE TABLE `ticket_types` (
  `ticket_id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `year` int(11) NOT NULL,
  `price` decimal(38,2) NOT NULL,
  `stock` int(7) DEFAULT NULL,
  `color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ticket_types`
--

INSERT INTO `ticket_types` (`ticket_id`, `name`, `type`, `year`, `price`, `stock`, `color`) VALUES
(1, 'Super Early Bird', 'General Access', 2026, 350.00, NULL, 'cyan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_settings`
--
ALTER TABLE `app_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`artist_id`),
  ADD UNIQUE KEY `artist_id` (`artist_id`),
  ADD KEY `FK5wy74y1w5u0cayxtd5kcvgfvg` (`stage_id`);

--
-- Indexes for table `map`
--
ALTER TABLE `map`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stages`
--
ALTER TABLE `stages`
  ADD PRIMARY KEY (`stage_id`),
  ADD UNIQUE KEY `stage_id` (`stage_id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticket_types`
--
ALTER TABLE `ticket_types`
  ADD PRIMARY KEY (`ticket_id`),
  ADD UNIQUE KEY `ticket_id` (`ticket_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_settings`
--
ALTER TABLE `app_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `artist_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `map`
--
ALTER TABLE `map`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ticket_types`
--
ALTER TABLE `ticket_types`
  MODIFY `ticket_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `artists`
--
ALTER TABLE `artists`
  ADD CONSTRAINT `FK5wy74y1w5u0cayxtd5kcvgfvg` FOREIGN KEY (`stage_id`) REFERENCES `stages` (`stage_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
