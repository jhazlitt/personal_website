<?php

$data = json_decode(file_get_contents("php://input"));
$game = $data->game;
$initials = $data->initials;
$score = $data->score;
mysql_connect("localhost","root","Default13");
mysql_select_db("personal_website");
mysql_query("INSERT INTO high_scores (game, initials, score) VALUES ('".$game."','".$initials."','".$score."');");
?>
