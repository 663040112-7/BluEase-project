<?php require 'connect.php';
$search = $_GET['search'];
$sql = "SELECT * FROM app WHERE Title LIKE '%$search%' ORDER BY Title ASC";
$result = mysqli_query($connect, $sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Result</title>
    <script src="https://kit.fontawesome.com/274a0dc0b6.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="KnowStyle.css">
    <link rel="stylesheet" href="MainStyle.css">
    <link rel="stylesheet" href="Kn_AppStyle.css">
    <link rel="stylesheet" href="CardStyle.css">
</head>

<body>
    <div class="container">
        <input type="checkbox" name="" id="check">
        <nav class="menu">
            <a class="main" href="Main.html">BluEase</a>
            <ul>
                <li><a class="choice choice1" href="Evaluation.html">แบบประเมิน</a></li>
                <li><a class="choice choice2" href="Kn_Youtube.html">คลังความรู้</a></li>
                <li><a class="choice choice3" href="Hospital.html">สถานที่รักษา</a></li>
                <li><a class="choice choice4" href="Ot.disease.html">โรคที่เกี่ยวข้อง</a></li>
            </ul>
            <li>
                <div class="Search">
                    <input type="text" placeholder="Search...">
                    <a href="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                </div>
            <li>
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"></i>
                </label>
        </nav>
        <div class="Knowledge-choice">
            <a id="youtube1" href="searchYoutube.php?search=<?php echo urlencode($search); ?>">Youtube & Podcast</a>
            <a id="app">Application</a>
            <a id="books" href="searchBook.php?search=<?php echo urlencode($search); ?>">Books</a>
        </div>
        <div class="allCard">
            <?php while ($row = mysqli_fetch_assoc($result)) { ?>
                <div class="card">
                    <img src=<?php echo $row["Icon"]; ?> alt="">
                    <h2>
                        <?php echo $row["Title"]; ?>
                    </h2>
                    <div>
                        <?php
                        if ($row["IOSLink"] === null) {
                            echo "<a><i class='fab fa-app-store'></i> App Store <br>(ยังไม่มีให้บริการ)</a>";
                        } else {
                            echo "<a href='" . $row["IOSLink"] . "' target='_blank'> <i class='fab fa-app-store'></i> App Store </a>";
                        }
                        ?>
                        <?php
                        if ($row["AndroidLink"] === null) {
                            echo "<a><i class='fab fa-google-play'></i> Play Store <br>(ยังไม่มีให้บริการ)</a>";
                        } else {
                            echo "<a href='" . $row["AndroidLink"] . "' target='_blank'> <i class='fab fa-google-play'></i> Play Store </a>";
                        }
                        ?>

                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</body>

</html>