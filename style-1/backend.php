<?php
    $username = $_POST['username'];
    $department = $_POST['department'];
    $rollno = $_POST['rollno'];
    $enrollment = $_POST['enrollment'];
    $email = $_POST['email'];
    $contactno = $_POST['contactno'];
    $expertise = $_POST['expertise'];
    $reason = $_POST['reason'];

    $connection = new mysqli('localhost','root','','registration');
    if($connection->connect_error) {
        die('Connection Failed :( '.$connection->connect_error);
    }
    else{
        $stmt = $connection->prepare("insert into registration(username,department,rollno,enrollment,email,contactno,expertise,reason) values(?,?,?,?,?,?,?,?)");
        $stmt->bind_param("ssiisiss",$username, $department, $rollno, $enrollment, $email, $contactno, $expertise, $reason);
        $stmt->execute();
        echo "Registration Successfully";
        $stmt->close();
        $connection->close();
    }
?>

