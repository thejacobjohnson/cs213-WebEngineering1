
<?php
    $getfile = $_GET['getFile'];
    if ($getfile){
        echo file_get_contents("../data/registration.txt");
    } else {
        $perf = $_GET['performance'];
        $loc = $_GET['location'];
        $room = $_GET['room'];
        $time = $_GET['time_slot'];
        $fName = $_GET['first_name'];
        $lName = $_GET['last_name'];
        $sID = $_GET['student_id'];
        $skill = $_GET['skill'];
        $instrument = $_GET['instrument'];
        $fName2 = $_GET['first_name2'];
        $lName2 = $_GET['last_name2'];
        $sID2 = $_GET['student_id2'];
        $skill2 = $_GET['skill2'];
        $instrument2 = $_GET['instrument2'];

        $name1 = $fName . " " . $lName;
        if ($perf == "Duet") {
            $name2 = $fName2 . " " . $lName2;
            $name = $name1 . " and " . $name2;
        } else {
            $name = $name1;
        }
        $location = $loc . "\n" . "Room " . $room;
        if ($perf == "Duet") {
            $skills = $skill . " and " . $skill2;
        } else {
            $skills = $skill;
        }
        $performance = $perf . ", skill level " . $skills;

        $performanceDetail = "<div class=\"flex-row\">
                <div class=\"flex-item headers\">
                    <p>" . $name . "</p>
                </div>
                <div class=\"flex-item headers\">
                    <p>" . $location . "</p>
                </div>
                <div class=\"flex-item headers\">
                    <p>" . $time . "</p>
                </div>
                <div class=\"flex-item headers\">
                    <p>" . $performance . "</p>
                </div>
            </div>
            <hr>";
        if ($name != null) {
            $myfile = fopen("../data/registration.txt", "a") or die("Unable to open file!");
            fwrite($myfile, $performanceDetail);
            fclose($myfile);
        }
        echo file_get_contents("../data/registration.txt");
    }
?>
