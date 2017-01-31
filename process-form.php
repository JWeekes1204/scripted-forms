<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$resp = [
  "status"=>"ok",
  "message"=>"your request was successful"
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if(!isset($_POST['foo']) || $_POST['foo'] != "bar") {
    $resp['status'] = "error";
    $resp['message'] = "you request does not include the correct value for the 'foo' parameter";
  }
}

echo json_encode($resp);
