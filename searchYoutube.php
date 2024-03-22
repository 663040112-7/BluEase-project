<?php require 'connect.php';
$search = $_GET['search'];
$sql = "SELECT * FROM youtube WHERE Title LIKE '%$search%' ORDER BY Title ASC";
$result = mysqli_query($connect, $sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" type="image/x-icon" href="picture/bluEaseIcon.jpg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Result</title>
    <script src="https://kit.fontawesome.com/274a0dc0b6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="KnowStyle.css">
    <link rel="stylesheet" href="MainStyle.css">
    <link rel="stylesheet" href="Kn_YoutubeStyle.css">
    <link rel="stylesheet" href="CardStyle.css">
</head>

<body>
    <div class="container">
        <input type="checkbox" name="" id="check">
        <nav class="menu">
            <a class="main" href="index.html">BluEase</a>
            <ul>
                <li><a class="choice choice1" href="Evaluation.html">แบบประเมิน</a></li>
                <li><a class="choice choice2" href="Kn_Youtube.html">คลังความรู้</a></li>
                <li><a class="choice choice3" href="Hospital.html">สถานที่รักษา</a></li>
                <li><a class="choice choice4" href="Ot.disease.html">โรคที่เกี่ยวข้อง</a></li>
            </ul>
            <li>
                <div class="Search">
                    <form id="searchForm" name="search" method="get" action="searchYoutube.php">
                        <input type="text" placeholder="ค้นหา..." name="search" required>
                        <a href="javascript:void(0);" onclick="document.getElementById('searchForm').submit();">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </form>
                </div>
            <li>
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
        </nav>
        <div class="Knowledge-choice">
            <a id="youtube1">Youtube & Podcast</a>
            <a id="youtube2">Youtube <br> & <br> Podcast</a>
            <a id="app" href="searchApp.php?search=<?php echo urlencode($search); ?>">Application</a>
            <a id="books" href="searchBook.php?search=<?php echo urlencode($search); ?>">Books</a>
        </div>
        <div class="allCard">
            <?php while ($row = mysqli_fetch_assoc($result)) { ?>
                <div class="card">
                    <img src=<?php echo $row["Image"]; ?> alt="">
                    <a href=<?php echo $row["Link"]; ?> target="_blank"> <?php echo $row["Title"]; ?> </a>
                    <p>
                        <?php echo $row["Author"]; ?>
                    </p>
                </div>
            <?php } ?>
        </div>
    </div>
</body>

</html>