
<?php
    $getFile = $_POST['getFile'];
    if($getFile){
        echo file_get_contents("../data/registration.txt");
    } else {
    $perf = $_POST['performance'];
    $loc = $_POST['location'];
    $room= $_POST['room'];
    $time = $_POST['time_slot'];
    $fName= $_POST['first_name'];
    $lName= $_POST['last_name'];
    $sID= $_POST['student_id'];
    $skill = $_POST['skill'];
    $instrument = $_POST['instrument'];
    $fName2 = $_POST['first_name_2'];
    $lName2 = $_POST['last_name_2'];
    $sID2 = $_POST['student_id_2'];
    $skill2 = $_POST['skill_2'];
    $instrument2 = $_POST['instrument_2'];

    $name1 = $fName ." ". $lName;
    if ($fName2 != null) {
        $name2 = $fName2 . " " . $lName2;
        $name = $name1 . " and " . $name2;
    } else {
        $name = $name1;
    }
    $location = $loc . "\n". "Room " .$room;
    if ($skill2 != null){
        $skills = $skill ." and ". $skill2;
    } else {
        $skills = $skill;
    }
    $performance = $perf . " of ". $skills;

    $performanceDetail = "<div class=\"flex-row\">
                <div class=\"flex-item headers\">
                    <p>".$name."</p>
                </div>
                <div class=\"flex-item headers\">
                    <p>".$location."</p>
                </div>
                <div class=\"flex-item headers\">
                    <p>".$time."</p>
                </div>
                <div class=\"flex-item headers\">
                    <p>".$performance."</p>
                </div>
            </div>";

    $myfile = fopen("../data/registration.txt", "a") or die("Unable to open file!");
    fwrite($myfile, $performanceDetail);
    fclose($myfile);
    }
    echo file_get_contents("../data/registration.txt");
?>
