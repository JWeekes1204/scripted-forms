<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$resp = [
  "status"=>"error",
  "message"=>"Invalid request"
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if(!empty($_POST['first_name']) || !empty($_POST['phone_number'])) {
    $resp['status'] = "ok";
    $resp['message'] = "Great job!  Post was successful!";
  }
}

echo json_encode($resp);