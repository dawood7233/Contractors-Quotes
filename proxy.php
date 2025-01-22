<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: POST"); // Allow POST requests
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Extract the request body
    $data = file_get_contents("php://input");

    // Send the data to the external API
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://demo.pingtreesystems.com/lead/direct_post");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-Type: application/x-www-form-urlencoded"));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute the request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Return the response from the external API
    http_response_code($httpCode);
    echo $response;
} else {
    http_response_code(405); // Method not allowed
    echo json_encode(["error" => "Only POST requests are allowed."]);
}
?>
