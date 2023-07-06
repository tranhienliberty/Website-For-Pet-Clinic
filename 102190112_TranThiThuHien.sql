-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 02, 2023 lúc 07:21 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `datn`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`username`, `password`, `role`) VALUES
('admin1', '123456', 'admin'),
('user1', '123456', 'user'),
('user2', '123456', 'user');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `animal_type`
--

CREATE TABLE `animal_type` (
  `id_animal_type` int(11) NOT NULL,
  `name_animal_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `animal_type`
--

INSERT INTO `animal_type` (`id_animal_type`, `name_animal_type`) VALUES
(1, 'Chó'),
(2, 'Mèo');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `appointment`
--

CREATE TABLE `appointment` (
  `id_appointment` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `appointment_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `information` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `appointment_status` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_service` int(11) DEFAULT NULL,
  `id_animal_type` int(11) DEFAULT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `appointment`
--

INSERT INTO `appointment` (`id_appointment`, `name`, `phone`, `appointment_date`, `email`, `note`, `token`, `information`, `appointment_status`, `id_service`, `id_animal_type`, `username`, `is_deleted`) VALUES
(1, 'Trần Thị Thu Hiền', '0935466618', '2023-07-01 21:35:44', 'yonnatran2001@gmail.com', 'Tôi muốn tắm cho chó', 'NXBp3lMRji', 'Không có thông báo', 'Đã xong', 8, 1, 'user1', 0),
(2, 'Trần Thị Thu Hà', '0235978465', '2023-07-01 21:35:06', 'hatran@gmail.com', 'Tôi muốn triệt sản mèo', 'NBwwkUNjGk', 'Không có thông báo', 'Bị hủy', 10, 2, 'user1', 0),
(3, 'Nguyễn Thu Thủy', '0958746123', '2023-07-01 21:36:35', 'thuthuy@gmail.com', 'Tôi muốn triệt sản chó', 'fpG8jhKNlv', 'Không có thông báo', 'Đã xong', 3, 2, NULL, 0),
(4, 'Đậu Quỳnh Mai', '0974581256', '2023-07-01 21:36:42', 'tranhien@example.com', 'Khám định kỳ', 'XNxSl7erZY', 'Không có thông báo', 'Chưa tới', 4, 1, NULL, 0),
(6, 'Trần Thanh Tâm', '0974856123', '2023-07-01 21:36:53', 'a1@gmail.com', 'Khám cho chó', 'boPud0D8bB', 'Không có thông báo', 'Chưa tới', 2, 2, 'user1', 0),
(15, 'Trần Thị Thu Hiền', '0935466618', '2023-07-16 03:55:00', 'yonnatran2001@gmail.com', 'Tiêm chó', 'Fpr2on5LFd', 'Không có thông báo', NULL, 3, 1, NULL, 0),
(16, 'MAFIA', '0123456789', '2023-07-02 05:06:00', 'aaaaaaaa@gmail.com', 'Chó đau răng', 'HYSdSnU7hY', 'Không có thông báo', NULL, 5, 1, NULL, 0),
(17, 'MAFIA', '0123456789', '2023-07-02 05:06:00', 'aaaaaaaa@gmail.com', 'Chó đau răng', 'U4N9aqG3Op', 'Không có thông báo', NULL, 5, 1, NULL, 0),
(18, 'Thu Hằng', '0987654321', '2023-07-15 04:26:00', 'aaaaaaaa@gmail.com', 'Muốn tỉa lông cho chó', '4ac0TcSwI4', 'Không có thông báo', NULL, 6, 1, NULL, 0),
(19, 'Thu Hằng', '0987654321', '2023-07-15 04:26:00', 'aaaaaaaa@gmail.com', 'Muốn tỉa lông cho chó', '5CUniFsCUy', 'Không có thông báo', NULL, 6, 1, NULL, 0),
(20, 'Thu Hằng', '0987654321', '2023-07-15 04:26:00', 'aaaaaaaa@gmail.com', 'Muốn tỉa lông cho chó', 'RDmAJMZGyO', 'Không có thông báo', NULL, 6, 1, NULL, 0),
(21, 'Thu Hằng', '0987654321', '2023-07-15 04:26:00', 'aaaaaaaa@gmail.com', 'Muốn tỉa lông cho chó', 'SwXhzSbe21', 'Không có thông báo', NULL, 6, 1, NULL, 0),
(22, 'Thu Hằng', '0987654321', '2023-07-15 04:26:00', 'aaaaaaaa@gmail.com', 'Muốn tỉa lông cho chó', '6U77qFPrx4', 'Không có thông báo', NULL, 6, 1, NULL, 0),
(23, 'Trần Hiền ', '0123456789', '2023-07-12 04:33:00', 'tranhien@example.com', 'khám định kỳ', '2I0NwxfusB', 'Không có thông báo', NULL, 2, 1, 'user1', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill`
--

CREATE TABLE `bill` (
  `id_bill` int(11) NOT NULL,
  `total_amount` double DEFAULT NULL,
  `payment_status` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_cart` int(11) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `payment_method` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivered` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Chưa giao hàng'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `bill`
--

INSERT INTO `bill` (`id_bill`, `total_amount`, `payment_status`, `id_cart`, `time`, `payment_method`, `delivered`) VALUES
(1, 200000, 'Đã thanh toán!', 1, '2023-06-25 20:18:01', 'Thanh toán bằng Paypal', 'Đã giao hàng'),
(2, 730000, 'Chưa thanh toán!', 1, '2023-06-25 20:25:09', 'Thanh toán bằng tiền mặt', 'Chưa giao hàng'),
(3, 730000, 'Đã thanh toán!', 1, '2023-06-25 20:18:09', 'Thanh toán bằng tiền mặt', 'Đã giao hàng'),
(4, 730000, 'Đã thanh toán!', 1, '2023-06-25 20:18:16', 'Thanh toán bằng tiền mặt', 'Đã giao hàng'),
(5, 300000, 'Chưa thanh toán!', 1, '2023-06-25 20:25:35', 'Thanh toán bằng tiền mặt', 'Chưa giao hàng'),
(6, 300000, 'Chưa thanh toán!', 1, '2023-06-25 20:25:37', 'Thanh toán bằng tiền mặt', 'Chưa giao hàng'),
(7, 250000, 'Đã thanh toán!', 1, '2023-06-25 20:18:22', 'Thanh toán bằng Paypal', 'Đã giao hàng'),
(8, 600000, 'Đã thanh toán!', 1, '2023-06-25 20:18:27', 'Thanh toán bằng tiền mặt', 'Đã giao hàng'),
(9, 1350000, 'Chưa thanh toán!', 1, '2023-06-25 20:25:41', 'Thanh toán bằng tiền mặt', 'Chưa giao hàng'),
(10, 25000000, 'Đã thanh toán!', 1, '2023-06-25 20:18:33', 'Thanh toán bằng Paypal', 'Đã giao hàng'),
(11, 200000, 'Đã thanh toán!', 1, '2023-06-25 20:29:07', 'Thanh toán bằng Paypal', 'Chưa giao hàng'),
(12, 100000, 'Đã thanh toán!', 1, '2023-06-25 20:18:39', 'Thanh toán bằng Paypal', 'Đã giao hàng'),
(13, 650000, 'Đã thanh toán!', 1, '2023-07-01 20:04:37', 'Thanh toán bằng tiền mặt', 'Chưa giao hàng'),
(14, 250000, 'Đã thanh toán!', 1, '2023-07-01 20:08:12', 'Paypal', 'Chưa giao hàng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill_detail`
--

CREATE TABLE `bill_detail` (
  `id_bill_detail` int(11) NOT NULL,
  `id_bill` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `total_price` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `bill_detail`
--

INSERT INTO `bill_detail` (`id_bill_detail`, `id_bill`, `id_product`, `quantity`, `total_price`) VALUES
(1, 1, 1, 1, 200000),
(2, 3, 1, 2, 400000),
(3, 3, 59, 1, 120000),
(4, 3, 4, 1, 210000),
(5, 4, 1, 2, 400000),
(6, 4, 59, 1, 120000),
(7, 4, 4, 1, 210000),
(8, 5, 1, 1, 200000),
(9, 5, 51, 2, 100000),
(10, 6, 51, 2, 100000),
(11, 6, 1, 1, 200000),
(12, 7, 1, 1, 200000),
(13, 7, 51, 1, 50000),
(14, 8, 1, 3, 600000),
(15, 9, 1, 3, 600000),
(16, 9, 7, 3, 750000),
(17, 10, 46, 5, 25000000),
(18, 11, 1, 1, 200000),
(19, 12, 2, 1, 100000),
(20, 13, 1, 2, 400000),
(21, 13, 3, 1, 250000),
(22, 14, 3, 1, 250000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blog`
--

CREATE TABLE `blog` (
  `id_blog` int(11) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content1` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image2` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content2` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image3` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content3` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_animal_type` int(11) NOT NULL,
  `isDeleted` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `blog`
--

INSERT INTO `blog` (`id_blog`, `created_date`, `title`, `image1`, `content1`, `image2`, `content2`, `image3`, `content3`, `id_animal_type`, `isDeleted`) VALUES
(1, '2023-06-20 03:33:14', 'Chó Samoyed có khó hay dễ nuôi không?', 'https://huanluyenchosieutoc.com/wp-content/uploads/2020/02/cho-samoyed-3.jpg', 'Trước khi tìm hiểu về quá trình nuôi Samoyed, chúng ta hãy cùng nhau điểm qua những thông tin cơ bản nhất về dòng chó này nhé.\r\n\r\nXuất thân của Samoyed\r\nSamoyed là dòng chó có nguồn gốc xuất xứ từ Siberia. Ở thời điểm trước đây là một trong những giống chó săn cực kỳ nổi tiếng với thể chất nhanh nhẹn. Chó Samoyed sở hữu bộ lông tuyệt phẩm màu trắng mà không có quá nhiều dòng trên thế giới có được. Siberia là vương quốc xứ lạnh nên nuôi chó samoyed phù hợp nhất cũng là thời tiết khí lạnh.\r\n\r\nTư chất thông minh của Samoyed\r\nKhông quá ngạc nhiên khi chúng ta có Samoyed là dòng chó cực kỳ thông minh và xuất chúng. Theo nghiên cứu được thu nhận từ những nhà phân tích động vật, Samoyed có khả năng học hỏi rất nhanh, xuất phát từ chó săn nên khả năng tư duy của chúng rất tốt. Ở thời điểm cuối thế kỷ 18, Samoyed chuyên được sử dụng để giúp con người trong công việc chăn nuôi gia súc.\r\nTính tình thân thiện\r\nNuôi chó samoyed, bạn không chỉ cảm nhận rõ được yếu tố thông minh mà còn là cả sự nhiệt tình thân thiện của dòng này. Hiện nay ở phương Tây, Samoyed được cho là xu hướng nuôi chó của những gia đình đang có trẻ nhỏ. Chúng cực kỳ thích tiếp xúc với trẻ em, có thể chăm sóc và chơi đùa với các bạn nhỏ cả ngày mà không biết chán.\r\n\r\nĐặc biệt hơn khi người ta rất ít khi thấy Samoyed nổi cáu và trêu chọc người khác. Đây là dòng chó đặc biệt kiên nhẫn với trẻ em nên nó giúp ích khá nhiều cho hành trình phát triển của những đứa trẻ nhà bạn. Một thời gian đủ dài, chủ nuôi sẽ dần cảm thấy Samoyed không khác gì một người thân trong gia đình của mình vậy.\r\n\r\nCực kỳ trung thành với chủ\r\nNuôi chó samoyed, người ta cũng cực kỳ ấn tượng về tính trung thành của dòng chó này. Đây cũng là một đặc điểm được nhiều người đặc biệt quan tâm. Samoyed luôn có những cách riêng để bảo vệ chủ nhân và những mục tiêu được chủ định. Tính cách này xuất hiện một phần là nhờ vào chuỗi công việc chăn nuôi gia súc từ tổ tiên. Khả năng quản lý đã cho Samoyed bản năng bảo vệ tương đối tốt.', 'https://thudaumot.edu.vn/wp-content/uploads/2020/11/tinh-cach-cho-samoyed.jpg', 'Chó Samoyed có dễ nuôi không?\r\nSố lượng chó Samoyed tại Việt Nam tính đến thời điểm hiện tại là không ít nhưng phần lớn chúng ta thấy sự xuất hiện của chúng ở những gia đình có kinh tế tốt. Sở dĩ Samoyed là dòng chó đến từ xứ lạnh nên về điều kiện thời tiết cũng như chế độ ăn có phần khác so với bình thường.\r\n\r\nVới Samoyed chúng cần một nguồn cung vừa đủ để có thể phát triển cơ thể một cách khỏe mạnh nhất. Theo như nghiên cứu protein đang là chất mà cơ thể của Samoyed cần nhất trong hành trình lớn lên của mình. Đặc biệt dòng chó này còn xuất phát từ xứ lạnh nên chủ nuôi phải đảm bảo được về điều kiện ăn ở cho chúng. Thông thường nuôi Samoyed hay là các hộ gia đình nhà có vườn tược hoặc ít nhất phải thường xuyên sử dụng điều hòa làm mát.\r\n\r\nChế độ dinh dưỡng của Samoyed như nào?\r\nNghiên cứu kỹ hơn một chút về chế độ dinh dưỡng đặc biệt dành riêng cho Samoyed. Một vài những gạch đầu dòng có lẽ sẽ giúp anh em nắm được chính xác hơn.\r\nSamoyed dưới 8 tháng tuổi là giai đoạn phát triển cực kỳ nhanh nên cần bổ sung dinh dưỡng cấp tốc. Như chúng tôi đề cập ở trên protein là dưỡng chất quan trọng nhất, quá trình phát triển khoảng từ nửa cân đến 10 cân chỉ trong vòng 6-8 tháng.\r\nNhững thức ăn quen thuộc của Samoyed khi được nuôi bởi các hộ gia đình là thịt bò, thịt gà, cá hoặc nội tạng lợn. Lưu ý các dạng thức ăn này cần hạn chế tối đa về lượng dầu mỡ, chất béo,…\r\nCó thể đan xen kết hợp giữa việc cung cấp cho Samoyed thêm ít trái cây, rau củ quả và đôi khi là cả phần tinh bột để cơ thể được phát triển một cách toàn diện.\r\nNghiêm cấm việc sử dụng các loại thức ăn không có nguồn gốc, hạn chế cho ăn các thức ăn để thừa và có khả năng gây hại cho sức khỏe.\r\nCách chăm sóc Samoyed là gì?\r\nChó Samoyed có dễ nuôi không chủ yếu xuất phát từ cách chăm sóc chính xác dòng này như thế nào. Thông thường những người nuôi dòng này thường phải dành rất nhiều thời gian để bên cạnh và chăm sóc chúng. Đặc biệt là bạn phải nuôi từ khi còn bé để dễ dàng tạo ra cho chúng những thói quen tốt.', 'https://www.thukieng.com/wp-content/uploads/2016/01/giong-cho-samoyed-2.jpg', 'Người nuôi nên tận dụng thời gian rảnh để dẫn Samoyed đi dạo, chơi đùa và âu yếm chúng. Có thể anh em chưa biết, Samoyed là dòng chó cực kỳ thích nói chuyện với con người. Cũng chính vì khả năng quấn người ở tần suất cao nên chúng hợp để chăm sóc trẻ nhỏ trong gia đình.\r\n\r\nChủ nuôi nên hạn chế để Samoyed tiếp xúc với các mặt đất cứng và gồ ghề trong thời điểm trước 8 tháng. Đây là lúc mà cơ thể Samoyed vẫn chưa phát triển hoàn chỉnh, các phần cơ xương vẫn còn tương đối yếu nên nếu vấp ngã sẽ tương đối nguy hiểm. Tuy nhiên không phải vì thế mà anh em cứ nhốt dòng chó này ở trong các không gian chật hẹp cố định đâu nhé. Như vậy sẽ là điều làm ảnh hưởng khá nhiều đến tâm lý của chúng.\r\n\r\nCông việc có thể làm với Samoyed là gì?\r\nThật vậy chó Samoyed có dễ nuôi không chỉ là câu hỏi của những người mới tiếp xúc và đang muốn tìm hiểu. Vốn dĩ việc nuôi Samoyed cũng tương tự như một vài dòng chó tây khác tại Việt Nam. Dưới đây tiếp tục là một vài công việc cụ thể khác mà người chơi Samoyed có thể làm với chúng.\r\n\r\nChải lông\r\nChải lông là công việc cực kỳ cần thiết mà chủ nuôi Samoyed phải dành thời gian để thực hiện. Vốn dĩ Samoyed là dòng chó có 2 lớp lông nên chúng tương đối dễ xù và rối. Việc chải lông là để cho lông của chúng về đúng lớp và cũng là cách để xử lý phần lông đã bị rụng trên cơ thể của Samoyed. Thời gian chải lông theo nghiên cứu của các chuyên gia là khoảng 1 lần/1 tuần.\r\n\r\nCắt tỉa móng chân\r\nNuôi Samoyed hay bất kỳ dòng nào khác cũng nên quan tâm đến việc cắt tỉa móng cho chúng. Sở dĩ các dòng chó vẫn hay có thói quen gãi ngứa trên cơ thể bằng bàn chân rất mạnh. Điều này có thể làm ảnh hưởng đến phần da nếu như móng trên chân quá dài mà không được cắt đều đặn. Lưu ý anh em chỉ được cắt ở phần móng không có thịt để tránh làm tổn hại đến phần da thịt của Samoyed nhé.\r\nVệ sinh cơ thể\r\nSamoyed nên được vệ sinh cơ thể khoảng 2 lần/1 tuần. Đây là mốc thời gian không dài cũng không ngắn. Việc tắm rửa cho chúng sẽ giúp khử đi lượng vi khuẩn đáng kể cũng như mùi hôi bám trên cơ thể. Đặc biệt với việc sống ở khí hậu của Việt Nam thì anh em càng lên làm điều này đều đặn. Lưu ý phải sấy khô sau khi tắm để tránh trường hợp chúng liếm lông và gây ra hiện tượng nôn ọe nhé.\r\n\r\nNhững gợi ý của chúng tôi trên đây là câu trả lời thích đáng cho thắc mắc chó Samoyed có dễ nuôi không. Tùy vào mong muốn và đôi khi là cả tính năng khiếu của từng người mà việc nuôi chó Samoyed có thể đơn giản hoặc phức tạp hơn. Chúc cho quá trình nuôi và huấn luyện Samoyed của anh em trở nên hiệu quả và đơn giản hơn.', 1, b'0'),
(2, '2023-06-20 03:33:14', 'Chó Phốc Sóc Mini Precio ', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 2', NULL, NULL, NULL, NULL, 1, b'0'),
(3, '2023-06-20 03:33:14', 'Có gì đặc biệt giữa hai giống chó Cardigan Pembroke Corgi\n', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 3', NULL, NULL, NULL, NULL, 1, b'0'),
(4, '2023-06-20 03:33:14', 'Chó Pembroke Corgi giá bao nhiêu tiền? {Dogily Q&A}', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 4', NULL, NULL, NULL, NULL, 1, b'0'),
(5, '2023-06-20 03:33:14', 'Kinh Nghiệm, Cách Nuôi Chó Shiba Phát Triển Theo Từng Giai Đoạn', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 5', NULL, NULL, NULL, NULL, 1, b'0'),
(6, '2023-06-20 03:33:14', 'Chó Black Golden Retriever thường mắc bệnh gì, có nên nuôi không?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 6', NULL, NULL, NULL, NULL, 1, b'0'),
(7, '2023-06-20 03:33:14', 'Chó Bướm Papillon, thông tin, đặc điểm, cách nuôi & giá bán', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 7', NULL, NULL, NULL, NULL, 1, b'0'),
(8, '2023-06-20 03:33:14', 'Cách cắt móng cho chó an toàn tại nhà? {Góc tư vấn}', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 8', NULL, NULL, NULL, NULL, 1, b'0'),
(9, '2023-06-20 03:33:14', 'Cách đánh răng cho chó, bạn đã làm đúng chưa?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 9', NULL, NULL, NULL, NULL, 1, b'0'),
(10, '2023-06-20 03:33:14', 'Bệnh viêm da ở chó và cách điều trị chó bị viêm da hiệu quả?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 10', NULL, NULL, NULL, NULL, 1, b'0'),
(12, '2023-06-20 03:33:14', 'Màu mắt mèo Anh lông ngắn, mèo Aln mắt màu gì đẹp nhất?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 12', NULL, NULL, NULL, NULL, 2, b'0'),
(13, '2023-06-20 03:33:14', 'Huấn luyện mèo Anh lông ngắn Aln khôn như chó được không?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 13', NULL, NULL, NULL, NULL, 2, b'0'),
(14, '2023-06-20 03:33:14', 'Giống mèo Golden – “Cục vàng” đáng yêu không thể bỏ qua\n', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 14', NULL, NULL, NULL, NULL, 2, b'0'),
(15, '2023-06-20 03:33:14', 'Mèo Anh giá bao nhiêu tiền? Ở đâu rẻ nhất?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 15', NULL, NULL, NULL, NULL, 2, b'0'),
(16, '2023-06-20 03:33:14', 'Mèo da báo giá bao nhiêu, mua bán ở đâu tại Tphcm, Hà nội', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 16', NULL, NULL, NULL, NULL, 2, b'0'),
(17, '2023-06-20 03:33:14', 'Mua mèo con giá rẻ, chất lượng, thuần chủng nhất ở đâu?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 17', NULL, NULL, NULL, NULL, 2, b'0'),
(18, '2023-06-20 03:33:14', 'Mèo Nhân Sư giá rẻ nhất là bao nhiêu? Cập nhật giá mèo Nhân Sư 2023', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 18', NULL, NULL, NULL, NULL, 2, b'0'),
(19, '2023-06-20 03:33:14', 'Giá mèo Sphynx bao nhiêu tiền?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 19', NULL, NULL, NULL, NULL, 2, b'0'),
(20, '2023-06-20 03:33:14', 'Màu lông của loài mèo?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 20', NULL, NULL, NULL, NULL, 2, b'0'),
(21, '2023-06-20 03:33:14', 'Mèo Ragdoll – Đặc điểm ngoại hình, cách nuôi, chăm sóc & giá bán. Mua ở đâu uy tín', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 21', NULL, NULL, NULL, NULL, 2, b'0'),
(22, '2023-06-20 03:33:14', 'Blog Post 22', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 22', NULL, NULL, NULL, NULL, 2, b'0'),
(23, '2023-06-20 03:33:14', 'Blog Post 23', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 23', NULL, NULL, NULL, NULL, 2, b'0'),
(24, '2023-06-20 03:33:14', 'Blog Post 24', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 24', NULL, NULL, NULL, NULL, 2, b'0'),
(25, '2023-06-20 03:33:14', 'Mèo ta hay mèo tây?', 'https://i.pinimg.com/564x/c3/d3/3f/c3d33ffcb318fd84b114770652758f06.jpg', 'Content of Blog Post 25', NULL, 'Content of Blog Post 25', NULL, 'Content of Blog Post 25', 2, b'0');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id_cart`, `username`) VALUES
(3, 'test'),
(1, 'user1'),
(2, 'user2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart_items`
--

CREATE TABLE `cart_items` (
  `id_cart_item` int(11) NOT NULL,
  `id_cart` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cart_items`
--

INSERT INTO `cart_items` (`id_cart_item`, `id_cart`, `id_product`, `count`) VALUES
(30, 3, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contract`
--

CREATE TABLE `contract` (
  `id_contract` int(11) NOT NULL,
  `date_sign` date DEFAULT NULL,
  `date_begin` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `job_descript` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `salary` float DEFAULT NULL,
  `isdeleted` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `contract`
--

INSERT INTO `contract` (`id_contract`, `date_sign`, `date_begin`, `date_end`, `job_descript`, `salary`, `isdeleted`) VALUES
(1, '2023-01-01', '2023-02-01', '2024-01-01', 'Job Description 1', 5000000, 0),
(2, '2023-02-01', '2023-03-01', '2024-02-01', 'Job Description 2', 7000000, 0),
(3, '2023-03-01', '2023-04-01', '2024-03-01', 'Job Description 3', 9000000, 0),
(4, '2023-04-01', '2023-05-01', '2024-04-01', 'Job Description 4', 6000000, 0),
(5, '2023-05-01', '2023-06-01', '2024-05-01', 'Job Description 5', 10000000, 0),
(6, '2023-06-01', '2023-07-01', '2024-06-01', 'Job Description 6', 4000000, 0),
(7, '2023-07-01', '2023-08-01', '2024-07-01', 'Job Description 7', 8000000, 0),
(8, '2023-08-01', '2023-09-01', '2024-08-01', 'Job Description 8', 20000000, 0),
(9, '2023-09-01', '2023-10-01', '2024-09-01', 'Job Description 9', 25000000, 0),
(10, '2023-10-01', '2023-11-01', '2024-10-01', 'Job Description 10', 5000000, 0),
(11, '2023-11-01', '2023-12-01', '2024-11-01', 'Job Description 11', 7000000, 0),
(12, '2023-12-01', '2024-01-01', '2025-01-01', 'Job Description 12', 9000000, 0),
(13, '2024-01-01', '2024-02-01', '2025-02-01', 'Job Description 13', 6000000, 0),
(14, '2024-02-01', '2024-03-01', '2025-03-01', 'Job Description 14', 10000000, 0),
(15, '2024-03-01', '2024-04-01', '2025-04-01', 'Job Description 15', 4000000, 0),
(16, '2024-04-01', '2024-05-01', '2025-05-01', 'Job Description 16', 8000000, 0),
(17, '2024-05-01', '2024-06-01', '2025-06-01', 'Job Description 17', 20000000, 0),
(18, '2024-06-01', '2024-07-01', '2025-07-01', 'Job Description 18', 25000000, 0),
(19, '2024-07-01', '2024-08-01', '2025-08-01', 'Job Description 19', 5000000, 0),
(20, '2024-08-01', '2024-09-01', '2025-09-01', 'Job Description 20', 7000000, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id_customer` int(11) NOT NULL,
  `name_customer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `phone` int(50) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `isDeleted` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id_customer`, `name_customer`, `date_of_birth`, `phone`, `email`, `address`, `username`, `isDeleted`) VALUES
(1, 'Trần Hiền ', '1990-01-01', 123456789, 'tranhien@example.com', '74 Ngô Thì Nhậm', 'user1', 0),
(2, 'Trần Thị B', '1995-05-10', 987654321, 'jane@example.com', '456 Đường Hai', NULL, 0),
(3, 'Lê Thanh C', '1988-09-15', 555555555, 'michael@example.com', '789 Đường Ba', NULL, 0),
(4, 'Phạm Thị D', '1992-07-20', 111111111, 'emily@example.com', '321 Đường Bốn', NULL, 0),
(5, 'Hoàng Văn E', '1985-03-05', 999999999, 'daniel@example.com', '789 Đường Năm', NULL, 0),
(6, 'Nguyễn Thị F', '1998-12-12', 777777777, 'sarah@example.com', '654 Đường Sáu', NULL, 0),
(7, 'Đặng Văn G', '1993-09-30', 444444444, 'matthew@example.com', '987 Đường Bảy', NULL, 0),
(8, 'Trần Thị H', '1997-06-25', 222222222, 'olivia@example.com', '567 Đường Tám', NULL, 0),
(9, 'Lý Văn I', '1991-04-15', 888888888, 'william@example.com', '432 Đường Chín', NULL, 0),
(10, 'Phan Thị K', '1994-11-05', 333333333, 'sophia@example.com', '876 Đường Mười', NULL, 0),
(11, 'Nguyễn Văn L', '1989-08-18', 666666666, 'christopher@example.com', '765 Đường Mười Một', NULL, 0),
(12, 'Trần Thị M', '1996-02-28', 555555555, 'ava@example.com', '543 Đường Mười Hai', NULL, 0),
(13, 'Lê Văn N', '1999-10-10', 111111111, 'jacob@example.com', '987 Đường Mười Ba', NULL, 0),
(14, 'Phạm Thị P', '1993-07-15', 888888888, 'mia@example.com', '876 Đường Mười Bốn', NULL, 0),
(15, 'Hoàng Văn Q', '1997-04-20', 444444444, 'ethan@example.com', '321 Đường Mười Lăm', NULL, 0),
(16, 'Nguyễn Thị R', '1991-12-25', 999999999, 'isabella@example.com', '567 Đường Mười Sáu', NULL, 0),
(17, 'Trần Văn S', '1986-09-08', 777777777, 'james@example.com', '432 Đường Mười Bảy', NULL, 0),
(18, 'Lý Thị T', '1995-06-12', 333333333, 'charlotte@example.com', '654 Đường Mười Tám', NULL, 0),
(19, 'Phan Văn U', '1998-03-30', 666666666, 'alexander@example.com', '987 Đường Mười Chín', NULL, 0),
(20, 'Nguyễn Thị V', '1992-10-25', 555555555, 'amelia@example.com', '321 Đường Hai Mươi', NULL, 0),
(21, 'Trần Văn X', '1996-08-15', 222222222, 'benjamin@example.com', '654 Đường Hai Mươi Một', NULL, 0),
(22, 'Lê Thị Y', '1990-05-05', 888888888, 'elizabeth@example.com', '876 Đường Hai Mươi Hai', NULL, 0),
(23, 'Phạm Văn Z', '1994-02-18', 444444444, 'daniel@example.com', '543 Đường Hai Mươi Ba', NULL, 0),
(24, 'Hoàng Thị K', '1989-11-30', 555555555, 'grace@example.com', '765 Đường Hai Mươi Bốn', NULL, 0),
(25, 'Nguyễn Văn H', '1993-08-28', 333333333, 'hannah@example.com', '987 Đường Hai Mươi Lăm', NULL, 0),
(26, 'Trần Thị L', '1997-05-15', 666666666, 'liam@example.com', '321 Đường Hai Mươi Sáu', NULL, 0),
(27, 'Lý Văn M', '1991-02-10', 222222222, 'mila@example.com', '654 Đường Hai Mươi Bảy', NULL, 0),
(28, 'Phan Thị N', '1995-09-25', 999999999, 'noah@example.com', '876 Đường Hai Mươi Tám', NULL, 0),
(29, 'Hoàng Văn P', '1986-06-18', 777777777, 'penelope@example.com', '432 Đường Hai Mươi Chín', NULL, 0),
(30, 'Nguyễn Thị Q', '1999-03-30', 444444444, 'quinn@example.com', '567 Đường Ba Mươi', NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `position`
--

CREATE TABLE `position` (
  `id_position` int(11) NOT NULL,
  `name_position` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `position`
--

INSERT INTO `position` (`id_position`, `name_position`, `is_deleted`) VALUES
(1, 'Bác sĩ', 0),
(2, 'Y tá', 0),
(3, 'Nhân viên bán hàng', 0),
(4, 'Nhân viên kỹ thuật', 0),
(5, 'Chăm sóc chó mèo', 0),
(6, 'Lễ tân', 0),
(7, 'Nhân viên xét nghiệm', 0),
(8, 'Kế toán', 0),
(9, 'Nhân viên vệ sinh', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id_product` int(11) NOT NULL,
  `name_product` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `benefit` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `note` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `producer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double DEFAULT 0,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isDeleted` tinyint(1) DEFAULT 0,
  `id_animal_type` int(11) DEFAULT NULL,
  `id_product_type` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id_product`, `name_product`, `benefit`, `note`, `producer`, `price`, `image`, `isDeleted`, `id_animal_type`, `id_product_type`, `quantity`) VALUES
(1, 'Thức ăn cho chó Smartheart 500g', 'Thực ăn khô Smartheart có thể sử dụng trực tiếp mà không cần qua chế biến, bảo quản dễ dàng.\nSản phẩm được qua kiểm nghiệm kĩ càng.\nCác dòng sản phẩm Smartheart còn có thành phần đạm và vitamin cao tốt cho sức khỏe tim mạch, tạo nguồn dinh dưỡng dồi dào phát triển linh hoạt hơn.', 'Có thể dùng trực tiếp. Gía thành rẻ, hợp lý.', 'Smartheart', 200000, 'https://www.perfectcompanion.com.vn/vnt_upload/product/12_2019/smartheart-mother-_-baby-dog-new.png', 0, 1, 1, 10),
(2, 'Thức ăn cho chó Smartheart 200g', 'Benefit 2', 'Note 2', 'Smartheart', 100000, 'https://chiaki.vn/upload/news/content/2020/10/thuc-an-hat-cho-cho-smartheart-puppy-beef-milk-flavo-1r-png-1602905611-17102020103331.png', 0, 1, 1, 3),
(3, 'Thức ăn cho chó Smartheart 1kg', 'Benefit 3', 'Note 3', 'Smartheart', 250000, 'https://fagopet.vn/uploads/images/62571ca89487f653775a40cc/thuc-an-cho-cho-smartheart-adult-roast-beef-flavor-3kg.webp', 0, 1, 1, 6),
(4, 'Thức ăn cho chó Smartheart 700g', 'Benefit 4', 'Note 4', 'Smartheart', 210000, 'https://kinpetshop.com/wp-content/uploads/thuc-an-hat-smartheart-danh-cho-cho-con-vi-bo-va-sua-.jpg', 0, 1, 1, 10),
(5, 'Thức ăn cho chó Smartheart 2kg', 'Benefit 5', 'Note 5', 'Smartheart', 350000, 'https://bizweb.dktcdn.net/100/229/172/products/thuc-an-cho-cho-con-smartheart-power-pack-min.jpg?v=1533267095000', 0, 1, 1, 6),
(6, 'Thức ăn cho chó Smartheart 5kg', 'Benefit 6', 'Note 6', 'Smartheart', 400000, 'https://cdn.tgdd.vn/Products/Images/9818/273065/bhx/thuc-an-cho-cho-lon-smartheart-vi-thit-bo-nuong-tui-3kg-202203200123235113.jpg', 0, 1, 1, 20),
(7, 'Thức ăn cho chó Royal Canin 500g', 'Benefit 7', 'Note 7', 'Royal Canin', 250000, 'https://bizweb.dktcdn.net/100/298/319/products/thu-y-viet-duc-royal-canin-medium-adult.jpg?v=1580898245660', 0, 1, 1, 19),
(8, 'Thức ăn cho chó Royal Canin 1kg', 'Benefit 8', 'Note 8', 'Royal Canin', 400000, 'https://cdn.shopify.com/s/files/1/0093/8059/3743/products/royal-canin-golden-retriever-adult-dry-dog-food-895770.jpg?v=1659055941', 0, 1, 1, 16),
(9, 'Thức ăn cho chó Royal Canin 2kg', 'Benefit 9', 'Note 9', 'Royal Canin', 600000, 'https://mew.vn/wp-content/uploads/2021/03/royal-canin-x-small-puppy-dry-dog-food-1.jpg', 0, 1, 1, 2),
(10, 'Thức ăn cho chó Royal Canin 5kg', 'Benefit 10', 'Note 10', 'Royal Canin', 700000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrD0sJuPut5vzhUxSvrZhpml18LB4ATQH7g&usqp=CAU', 0, 1, 1, 20),
(11, 'Thức ăn cho chó Royal Canin 200g', 'Benefit 11', 'Note 11', 'Royal Canin', 90000, 'https://mew.vn/wp-content/uploads/2021/03/royal-canin-x-small-puppy-dry-dog-food-1.jpg', 0, 1, 1, 15),
(12, 'Thức ăn cho chó  Pedigree 200g', 'Benefit 12', 'Note 12', ' Pedigree', 50000, 'https://m.media-amazon.com/images/I/61IUJIyK2yL.jpg', 0, 1, 1, 16),
(13, 'Thức ăn cho chó Pedigree 500g', 'Benefit 13', 'Note 13', ' Pedigree', 80000, 'https://i5.walmartimages.com/asr/b4a14c3a-5f41-4de8-8bbb-beb9a547252f.9341f81c95fafe9a795fbbd276443713.jpeg', 0, 1, 1, 14),
(14, 'Thức ăn cho chó Pedigree 1kg', 'Benefit 14', 'Note 14', ' Pedigree', 150000, 'https://cdn.shopify.com/s/files/1/0312/8826/2795/products/Untitleddesign_23.jpg?v=1676372860', 0, 1, 1, 3),
(15, 'Thức ăn cho chó Pedigree 2kg', 'Benefit 15', 'Note 15', ' Pedigree', 250000, 'https://cdn.shopify.com/s/files/1/0386/4113/9843/products/10164740-Pedigree-Puppy-Chicken-Egg-with-Milk-Dry-Dog-Food-1.3kg-front.jpg?v=1645174042', 0, 1, 1, 10),
(16, 'Thức ăn cho chó Pedigree 5kg', 'Benefit 16', 'Note 16', ' Pedigree', 400000, 'https://www.pedigree.in/cdn-cgi/image/format%3Dauto%2Cq%3D90/sites/g/files/fnmzdf3131/files/2023-01/see-the-difference-in-six-weeks-list-image.png', 0, 1, 1, 2),
(17, 'Thức ăn hạt mềm Zenith cho chó 500g', 'Benefit 17', 'Note 17', 'Producer 17', 150000, 'https://cf.shopee.ph/file/237f2bc11b99c91305b07eea41d83b8f', 0, 1, 1, 18),
(18, 'Thức ăn hạt mềm Zenith cho chó 1kg ', 'Benefit 18', 'Note 18', 'Producer 18', 230000, 'https://ivetcenter.com/uploaded/san-pham/thuc-an-hat-mem-cho-con-zenith-puppy.jpg', 0, 1, 1, 4),
(19, 'Thức ăn hạt mềm Zenith cho chó 2kg', 'Benefit 19', 'Note 19', 'Producer 19', 300000, 'https://bizweb.dktcdn.net/thumb/grande/100/383/944/products/hinh-website-nen-trang.png?v=1626424496443', 0, 1, 1, 6),
(20, 'Thức ăn hạt mềm Zenith cho chó 5kg', 'Benefit 20', 'Note 20', 'Producer 20', 400000, 'https://papapetshop.com/wp-content/uploads/Small-Breed-Lamb-Potato-01.png', 0, 1, 1, 16),
(22, 'Snack cho chó Vitamin', 'Benefit 22', 'Note 22', 'Producer 22', 20000, 'https://toplist.vn/images/800px/banh-thuong-pedigree-479210.jpg', 0, 1, 1, 8),
(23, 'Snack cho chó vị cá ngừ Vitamin', 'Benefit 23', 'Note 23', 'Producer 23', 20000, 'https://bizweb.dktcdn.net/100/229/172/products/doggyman-snack-911590083364-1000px-min-min.jpg?v=1533462353327', 0, 1, 1, 8),
(24, 'Snack cho chó loại mềm Vitamin', 'Benefit 24', 'Note 24', 'Producer 24', 25000, 'https://bucket.nhanh.vn/19b837-49111/ps/20201210_1P8IjNarLotvh177EjgmBqoS.jpg', 0, 1, 1, 15),
(25, 'Xương thưởng cho chó Vitamin 200g ', 'Benefit 25', 'Note 25', 'Producer 25', 50000, 'https://bizweb.dktcdn.net/100/307/433/products/b-nh-th-ng-th-t-b-s-y-kh-snack-foods-500g-d-nh-cho-ch-cutepets-ph-ki-n-th-c-ng-pet-shop-h-n-i-3.jpg?v=1587225785630', 0, 1, 1, 9),
(26, 'Xương thưởng cho chó Vitamin 500g', 'Benefit 26', 'Note 26', 'Producer 26', 70000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqXEivOHmSh9ss64jxxxfZy_DRqgsNGS30A&usqp=CAU', 0, 1, 1, 2),
(27, 'Xương thưởng cho chó Vitamin 100g', 'Benefit 27', 'Note 27', 'Producer 27', 35000, 'https://product.hstatic.net/200000264739/product/snack_xuong_orgo_cho_cho_vi_pho_mai_2_6ece4c97e67f4fe8a00e8abe0b47efdb_master.jpg', 0, 1, 1, 3),
(33, 'Sữa cho chó hộp 380ml', 'Benefit 33', 'Note 33', 'Producer 33', 400000, 'https://cdn-img-v2.webbnc.net/uploadv2/web/12/12107/product/2019/08/27/04/01/1566878476_bio-milk.jpg', 0, 1, 1, 15),
(34, 'Sữa cho chó dạng bột', 'Benefit 34', 'Note 34', 'Producer 34', 30000, 'https://kinpetshop.com/wp-content/uploads/sua-danh-cho-cho-con-moi-sinh.jpg', 0, 1, 1, 8),
(35, 'Thực phẩm chức năng dưỡng lông cho chó Royal Canin(gói 100g)', 'Benefit 35', 'Note 35', 'Producer 35', 32000, 'https://drive.google.com/uc?id=1OVVF8j5mJUKuO4qkF7FpacSvwz5tB4Wm', 0, 1, 1, 14),
(36, 'Thực phẩm chức năng dưỡng lông cho chó Vitamin(gói 100g)', 'Benefit 36', 'Note 36', 'Producer 36', 28000, 'https://drive.google.com/uc?id=1OVVF8j5mJUKuO4qkF7FpacSvwz5tB4Wm', 0, 1, 1, 4),
(38, 'Thực phẩm chức năng dưỡng lông cho chó Royal Canin(gói 200g)', 'Benefit 38', 'Note 38', 'Producer 38', 7000000, 'https://drive.google.com/uc?id=1OVVF8j5mJUKuO4qkF7FpacSvwz5tB4Wm', 0, 1, 1, 5),
(39, 'Thực phẩm chức năng dưỡng lông cho chó Vitamin(gói 200g)', 'Benefit 39', 'Note 39', 'Producer 39', 9000000, 'https://drive.google.com/uc?id=1OVVF8j5mJUKuO4qkF7FpacSvwz5tB4Wm', 0, 1, 1, 5),
(40, 'Thức ăn Me-O gói lớn cho mèo', 'Benefit 40', 'Note 40', 'Producer 40', 6000000, 'https://vietgiftmarket.com/wp-content/uploads/2021/10/thuc-an-cho-cho-meo-ma-taccm67.jpg', 0, 2, 2, 12),
(46, 'Thức ăn whiskas gói lớn cho mèo', 'Benefit 46', 'Note 46', 'Producer 46', 5000000, 'https://drive.google.com/uc?id=1qowzRPPR028gv0Zu5eVwZoU85_BbrU1E', 0, 2, 6, 19),
(49, 'Sữa cho mèo KMR', 'Benefit 49', 'Note 49', 'Producer 49', 6000000, 'https://cdn.tgdd.vn/Files/2021/04/23/1345730/meo-uong-sua-lieu-co-tot-khong-top-7-loai-sua-bot-cho-meo-con-tot-nhat-hien-nay-202206061448102335.jpg', 0, 1, 9, 3),
(51, 'Thức ăn cho mèo Whiskas gói 200g', 'Dùng cho mèo ăn.\r\nDễ ăn, dễ bảo quản', 'Không có', 'Whiskas', 50000, 'https://cdn-img-v2.webbnc.net/uploadv2/web/12/12107/product/2019/09/13/02/59/1568343569_pate-whiskas-cho-meo-con.jpg', 0, 2, 10, 2),
(52, 'Thức ăn cho mèo Whiskas gói 500g', 'Dùng cho mèo ăn. Dễ ăn, dễ bảo quản', 'Không có', 'Whiskas', 70000, 'https://bizweb.dktcdn.net/100/118/405/products/f02433e11729ecf617ff9e8016ee5f92.jpg?v=1571837043690', 0, 2, 10, 7),
(53, 'Thức ăn cho mèo Whiskas gói 1kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Whiskas', 90000, 'https://product.hstatic.net/200000264739/product/hat_whiskas1_f9d9751ff0654fb59fc0914f212be940_master.jpg', 0, 2, 10, 9),
(54, 'Thức ăn cho mèo Whiskas gói 2kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Whiskas', 150000, 'https://meocun.com/wp-content/uploads/thuc-an-hat-whiskas-junior-cho-meo-con.jpg', 0, 2, 10, 1),
(55, 'Thức ăn cho mèo Whiskas gói 5kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Whiskas', 250000, 'https://filebroker-cdn.lazada.vn/kf/Sdefda8119f414806aaf7fc000f37a0ebx.jpg', 0, 2, 10, 20),
(56, 'Thức ăn cho mèo Me-O gói 200g', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Me-O', 30000, 'https://cf.shopee.vn/file/62d5877004c5e221b071b131133b9a04', 0, 2, 10, 16),
(57, 'Thức ăn cho mèo Me-O gói 500g', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Me-O', 40000, 'https://img.susureview.com/Blogs/thuc-an-cho-meo.jpg', 0, 2, 10, 19),
(58, 'Thức ăn cho mèo Me-O gói 1kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Me-O', 70000, 'https://img.websosanh.vn/v10/users/review/images/jc1fsggjp59x8/hat-me-o-cho-meo-con.jpg?compress=85', 0, 2, 10, 8),
(59, 'Thức ăn cho mèo Me-O gói 2kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Me-O', 120000, 'https://cdn.chotot.com/BSTzMV3143SqPLTqrO3kce23iBIGBkI6ltDmGDZbt9o/preset:view/plain/5eac947ef3b1b9a0e69aa67970e29504-2830923894153179052.jpg', 0, 2, 10, 2),
(60, 'Thức ăn cho mèo Me-O gói 5kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Me-O', 240000, 'https://product.hstatic.net/200000350119/product/dd616cafa94d4d98b59598f2ca5b8cfb.jpg_720x720q80_b47ba38784b74023a8e3fd3d35ea7ffa_master.jpg', 0, 2, 10, 4),
(61, 'Thức ăn cho mèo Royal Canin gói 200g', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Royal Canin', 50000, 'https://chiaki.vn/upload/news/content/2020/12/thuc-an-cho-meo-royal-canin-indoor-jpg-1607334049-07122020164049.jpg', 0, 2, 10, 13),
(62, 'Thức ăn cho mèo Royal Canin gói 500g', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Royal Canin', 70000, 'https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-meo-con-va-meo-me-royal-canin-mother-babycat.jpg', 0, 2, 10, 15),
(63, 'Thức ăn cho mèo Royal Canin gói 1kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Royal Canin', 130000, 'https://vinpet.com.vn/wp-content/uploads/2020/11/Thuc-an-cho-meo-royal-canin-kitten.jpg', 0, 2, 10, 15),
(64, 'Thức ăn cho mèo Royal Canin gói 2kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Royal Canin', 250000, 'https://product.hstatic.net/200000264739/product/hat_royal_canin_kitten_bich_chiet_1kg_cho_meo_ebe5e2e1e7c54e00affc7e99052382af_master.jpg', 0, 2, 10, 8),
(65, 'Thức ăn cho mèo Catsrang gói 200g', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Catsrang', 60000, 'https://img.websosanh.vn/v10/users/review/images/a2u8g9s8c376c/thuc-an-cho-meo-catsrang1.jpg?compress=85', 0, 2, 10, 16),
(66, 'Thức ăn cho mèo Catsrang gói 500g', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Catsrang', 100000, 'https://cdn-img-v2.webbnc.net/uploadv2/web/12/12107/product/2019/10/17/04/14/1571285687_thuc-an-meo-catsrang-400g-nhap-khau-han-quoc.jpg', 0, 2, 10, 13),
(67, 'Thức ăn cho mèo Catsrang gói 1kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Catsrang', 180000, 'https://vinpet.com.vn/wp-content/uploads/2020/11/Thuc-an-cho-meo-catsrang.jpg', 0, 2, 10, 17),
(68, 'Thức ăn cho mèo Catsrang gói 2kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Catsrang', 320000, 'https://chiaki.vn/upload/product/2020/08/thuc-an-hat-catsrang-cho-meo-nho-400g-5f48d1cbce824-28082020164339.jpg', 0, 2, 10, 8),
(69, 'Thức ăn cho mèo Catsrang gói 5kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Catsrang', 550000, 'https://bizweb.dktcdn.net/100/346/633/products/2861e2e15d24b97ae035.jpg?v=1562813630627', 0, 2, 10, 7),
(71, 'Thức ăn cho mèo Cateye gói 500g', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Cateye', 70000, 'https://i.imgur.com/Ghz1Fia.png?1', 0, 2, 10, 7),
(72, 'Thức ăn cho mèo Cateye gói 1kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Cateye', 100000, 'https://product.hstatic.net/200000104537/product/q4_17e1f8dd0bdf49a697bb2a3c45a9307a_master.jpg', 0, 2, 10, 8),
(73, 'Thức ăn cho mèo Cateye gói 2kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Cateye', 170000, 'https://meocun.com/wp-content/uploads/Cats-Eye1.jpg', 0, 2, 10, 15),
(74, 'Thức ăn cho mèo Cateye gói 5kg', 'Dùng cho mèo ăn.Dễ ăn, dễ bảo quản', 'Không có', 'Cateye', 300000, 'https://ampet.vn/wp-content/uploads/2022/10/Hat-Cateye-2.jpg', 0, 2, 10, 14);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_type`
--

CREATE TABLE `product_type` (
  `id_product_type` int(11) NOT NULL,
  `name_product_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_type`
--

INSERT INTO `product_type` (`id_product_type`, `name_product_type`) VALUES
(1, 'Thức ăn cho chó'),
(2, 'Pate cho chó'),
(3, 'Bát ăn & bình uống nước cho chó'),
(4, 'Vòng cổ, dây dắt, rọ mõm'),
(5, 'Chuồng, nhà, nệm, túi cho chó'),
(6, 'Vệ sinh & chăm sóc chó'),
(7, 'Quần áo, váy, mũ, trang sức cho chó'),
(8, 'Đồ chơi & Huấn luyện chó'),
(9, 'Y tế & Thuốc cho chó'),
(10, 'Thức ăn cho mèo'),
(11, 'Pate cho mèo'),
(12, 'Cát vệ sinh cho mèo'),
(13, 'Bát ăn & Bình uống nước cho mèo'),
(14, 'Đồ dùng vệ sinh, tắm, sấy'),
(15, 'Chuồng, nệm, túi, cattree'),
(16, 'Quần áo, vòng cổ, dây dắt'),
(17, 'Đồ chơi & Huấn luyện mèo'),
(18, 'Y tế & Thuốc cho mèo');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `service`
--

CREATE TABLE `service` (
  `id_service` int(11) NOT NULL,
  `name_service` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `service`
--

INSERT INTO `service` (`id_service`, `name_service`, `is_deleted`) VALUES
(1, 'Tắm sấy, cắt móng', 0),
(2, 'Khám định kỳ', 0),
(3, 'Tiêm chủng', 0),
(4, 'Phẫu thuật', 0),
(5, 'Nha khoa', 0),
(6, 'Tỉa lông', 0),
(7, 'Xét nghiệm', 0),
(8, 'Siêu âm, X-quang', 0),
(9, 'Khám bệnh thường', 0),
(10, 'Triệt sản', 0),
(11, 'Chỉnh hình', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `staff`
--

CREATE TABLE `staff` (
  `id_staff` int(11) NOT NULL,
  `name_staff` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `identity_card` bigint(20) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `phone` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `certificate` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experience` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_number` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_deleted` tinyint(4) DEFAULT 0,
  `id_position` int(11) DEFAULT NULL,
  `id_contract` int(11) DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `staff`
--

INSERT INTO `staff` (`id_staff`, `name_staff`, `identity_card`, `date_of_birth`, `phone`, `email`, `address`, `certificate`, `experience`, `bank_number`, `bank_name`, `is_deleted`, `id_position`, `id_contract`, `username`) VALUES
(1, 'Trần Khánh Ly', 0, '1990-01-01', '0935466618', 'a1@gmail.com', '66 Võ Nguyên Gíap', 'Tốt nghiệp đại học kinh tế Đà Nẵng', '3 năm', '12345678', 'BIDV', 0, 8, 17, 'staff1'),
(2, 'Nguyễn Hữu Thọ', 0, '1992-02-02', '0987654321', 'a2@gmail.com', '08 Hà Văn Tính', 'Không có', '4 năm', NULL, NULL, 0, 9, 12, NULL),
(3, 'Trương Thị Nhãn', 0, '1988-03-03', '0935466645', 'a3@gmail.com', '08 Thái Thị Bôi', 'Không có ', '3 năm', NULL, NULL, 0, 9, 15, NULL),
(4, 'Bùi Anh Tuấn', 0, '1995-04-04', '0935466777', 'a4@gmail.com', '16 Võ Nguyên Giáp', 'Tốt nghiệp đại học Y Huế', '5 năm', NULL, NULL, 0, 1, 20, NULL),
(5, 'Hà Anh Tuấn', 0, '1991-05-05', '0123454342', 'a5@gmail.com', '55 Hà Huy Tập', 'Tốt nghiệp đại học Kinh tế Quốc Dân HN', '7 năm', NULL, NULL, 0, 8, 2, NULL),
(6, 'Ngô Ngọc ', 0, '1993-06-06', '0935466618', 'a6@gmail.com', '77 Dũng Sĩ Thanh Khê', 'Không có', '6 năm', NULL, NULL, 0, 9, 6, NULL),
(7, 'Trần Bảo Châu', 0, '1989-07-07', '0935466619', 'a7@gmail.com', '50 Lý Thái Tổ', 'Tốt nghiệp đại học Y Huế', '8 năm', NULL, NULL, 0, 2, 1, NULL),
(8, 'Trần Ngọc Bảo Nam', 0, '1994-08-08', '0935566618', 'a8@gmail.com', '106 Lý Thái Tông', 'Tốt nghiệp đại học Y Huế', '4 năm', NULL, NULL, 0, 2, 18, NULL),
(9, 'Trần Kiên Cường', 0, '1990-09-09', '0935467618', 'a9@gmail.com', '33 Yên Bái', 'Không có', '5 năm', NULL, NULL, 0, 9, 7, NULL),
(10, 'Nguyễn Thị Chiều', 0, '1992-10-10', '0944466618', 'a10@gmail.com', '66 Châu Thị Vĩnh Tế', 'Tốt nghiệp đại học Y Huế', '1 năm', NULL, NULL, 0, 7, 14, NULL),
(11, 'Phạm Thanh Sang', 0, '1988-11-11', '0915485124', 'a11@gmail.com', '70 Hàm Nghi', 'Tốt nghiệp đại học Y Huế', '2 năm', NULL, NULL, 0, 2, 13, NULL),
(12, 'Nguyễn Văn Phúc', 0, '1993-12-12', '0486125479', 'a12@gmail.com', '10 Ngô Văn Sở', 'Tốt nghiệp đại học Y Huế', '6 năm', NULL, NULL, 0, 7, 13, NULL),
(13, 'Phạm Thanh Thảo', 0, '1989-01-13', '0954875123', 'a13@gmail.com', '15 Ngô Thì Nhậm', 'Không có', '1 năm', NULL, NULL, 0, 9, 4, NULL),
(14, 'Nguyễn Thanh Tú', 0, '1991-02-14', '0969871357', 'a14@gmail.com', '56 Trần Thánh Tông', 'Tốt nghiệp đại học Duy Tân', '4 năm', NULL, NULL, 0, 5, 9, NULL),
(15, 'Phạm Ngọc Toàn', 0, '1994-03-15', '0197457485', 'a15@gmail.com', '12 Nguyễn Tất Thành', 'Tốt nghiệp đại học Y Huế', '5 năm', NULL, NULL, 0, 5, 1, NULL),
(16, 'Emma Moore', 0, '1990-04-16', '123456789', NULL, NULL, NULL, NULL, NULL, NULL, 0, 5, 14, NULL),
(17, 'James Smith', 0, '1992-05-17', '777777777', NULL, NULL, NULL, NULL, NULL, NULL, 0, 6, 6, NULL),
(18, 'Mia Johnson', 0, '1988-06-18', '888888888', NULL, NULL, NULL, NULL, NULL, NULL, 0, 4, 5, NULL),
(19, 'Ethan Davis', 0, '1995-07-19', '999999999', NULL, NULL, NULL, NULL, NULL, NULL, 0, 9, 16, NULL),
(20, 'Olivia Taylor', 0, '1991-08-20', '111111111', NULL, NULL, NULL, NULL, NULL, NULL, 0, 3, 17, NULL),
(21, 'Noah Wilson', 0, '1993-09-21', '666666666', NULL, NULL, NULL, NULL, NULL, NULL, 1, 4, 15, NULL),
(24, 'Trần Thị Thu Hiền', 1111111, '2001-07-11', '935466618', 'tranthithuhiena1ddt@gmail.com', '11', 'aaaaaaaaaaa', 'aaaaaaa', '124135435sdsgs', 'aaaaaaaa', 1, 2, NULL, NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`username`) USING BTREE;

--
-- Chỉ mục cho bảng `animal_type`
--
ALTER TABLE `animal_type`
  ADD PRIMARY KEY (`id_animal_type`);

--
-- Chỉ mục cho bảng `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id_appointment`),
  ADD KEY `id_service` (`id_service`),
  ADD KEY `id_animal_type` (`id_animal_type`),
  ADD KEY `username` (`username`);

--
-- Chỉ mục cho bảng `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id_bill`),
  ADD KEY `id_cart` (`id_cart`);

--
-- Chỉ mục cho bảng `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD PRIMARY KEY (`id_bill_detail`),
  ADD KEY `id_bill` (`id_bill`),
  ADD KEY `id_product` (`id_product`);

--
-- Chỉ mục cho bảng `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id_blog`),
  ADD KEY `fk_blog_animal_type` (`id_animal_type`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`),
  ADD KEY `username` (`username`);

--
-- Chỉ mục cho bảng `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id_cart_item`),
  ADD KEY `id_cart` (`id_cart`),
  ADD KEY `id_product` (`id_product`);

--
-- Chỉ mục cho bảng `contract`
--
ALTER TABLE `contract`
  ADD PRIMARY KEY (`id_contract`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id_customer`),
  ADD KEY `fk_customer_account_username` (`username`);

--
-- Chỉ mục cho bảng `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`id_position`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `fk_product_animal_type` (`id_animal_type`),
  ADD KEY `fk_product_product_type` (`id_product_type`);

--
-- Chỉ mục cho bảng `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`id_product_type`);

--
-- Chỉ mục cho bảng `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id_service`);

--
-- Chỉ mục cho bảng `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id_staff`),
  ADD KEY `fk_staff_position` (`id_position`),
  ADD KEY `fk_staff_constract` (`id_contract`),
  ADD KEY `fk_staff_account_username` (`username`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `animal_type`
--
ALTER TABLE `animal_type`
  MODIFY `id_animal_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id_appointment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `bill`
--
ALTER TABLE `bill`
  MODIFY `id_bill` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `bill_detail`
--
ALTER TABLE `bill_detail`
  MODIFY `id_bill_detail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `blog`
--
ALTER TABLE `blog`
  MODIFY `id_blog` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id_cart_item` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT cho bảng `contract`
--
ALTER TABLE `contract`
  MODIFY `id_contract` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id_customer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `position`
--
ALTER TABLE `position`
  MODIFY `id_position` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT cho bảng `product_type`
--
ALTER TABLE `product_type`
  MODIFY `id_product_type` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `service`
--
ALTER TABLE `service`
  MODIFY `id_service` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `staff`
--
ALTER TABLE `staff`
  MODIFY `id_staff` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`id_service`) REFERENCES `service` (`id_service`),
  ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`id_animal_type`) REFERENCES `animal_type` (`id_animal_type`),
  ADD CONSTRAINT `appointment_ibfk_3` FOREIGN KEY (`username`) REFERENCES `account` (`username`);

--
-- Các ràng buộc cho bảng `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`id_cart`) REFERENCES `cart` (`id_cart`);

--
-- Các ràng buộc cho bảng `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD CONSTRAINT `bill_detail_ibfk_1` FOREIGN KEY (`id_bill`) REFERENCES `bill` (`id_bill`),
  ADD CONSTRAINT `bill_detail_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`);

--
-- Các ràng buộc cho bảng `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `fk_blog_animal_type` FOREIGN KEY (`id_animal_type`) REFERENCES `animal_type` (`id_animal_type`);

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`username`) REFERENCES `account` (`username`);

--
-- Các ràng buộc cho bảng `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`id_cart`) REFERENCES `cart` (`id_cart`),
  ADD CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`);

--
-- Các ràng buộc cho bảng `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `fk_customer_account_username` FOREIGN KEY (`username`) REFERENCES `account` (`username`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product_animal_type` FOREIGN KEY (`id_animal_type`) REFERENCES `animal_type` (`id_animal_type`),
  ADD CONSTRAINT `fk_product_product_type` FOREIGN KEY (`id_product_type`) REFERENCES `product_type` (`id_product_type`);

--
-- Các ràng buộc cho bảng `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `fk_staff_account_username` FOREIGN KEY (`username`) REFERENCES `account` (`username`),
  ADD CONSTRAINT `fk_staff_constract` FOREIGN KEY (`id_contract`) REFERENCES `contract` (`id_contract`),
  ADD CONSTRAINT `fk_staff_position` FOREIGN KEY (`id_position`) REFERENCES `position` (`id_position`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
