<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Include database connection
require "Phpconncetion.php"; // Adjust the path as needed

// Get the raw POST data as a string
$json_data = file_get_contents("php://input");

// Decode the JSON data into an associative array
$request_data = json_decode($json_data, true);

// Check if the JSON decoding was successful
if ($request_data === null && json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(array("status" => "error", "message" => "Failed to decode JSON data"));
    exit;
}

// Check if all required fields are present
$required_fields = ['patientName', 'contactNumber', 'email', 'gender', 'age', 'bloodGroup', 'username', 'password', 'reenterPassword'];
foreach ($required_fields as $field) {
    if (!isset($request_data[$field])) {
        echo json_encode(array("status" => "error", "message" => "Missing required field: $field"));
        exit;
    }
}

// Extract data from the request
$patientName = $request_data['patientName'];
$contactNumber = $request_data['contactNumber'];
$email = $request_data['email'];
$gender = $request_data['gender'];
$age = $request_data['age'];
$bloodGroup = $request_data['bloodGroup'];
$username = $request_data['username'];
$password = $request_data['password'];
$reenterPassword = $request_data['reenterPassword'];

// Check if passwords match
if ($password !== $reenterPassword) {
    echo json_encode(array("status" => "error", "message" => "Passwords do not match"));
    exit;
}

// Insert the user data into the database using prepared statements
$sql = "INSERT INTO patientsignup (patientName, contactNumber, email, gender, age, bloodGroup, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo json_encode(array("status" => "error", "message" => "Database error: " . $conn->errorInfo()[2]));
    exit;
}

// Bind parameters
$stmt->bindParam(1, $patientName);
$stmt->bindParam(2, $contactNumber);
$stmt->bindParam(3, $email);
$stmt->bindParam(4, $gender);
$stmt->bindParam(5, $age);
$stmt->bindParam(6, $bloodGroup);
$stmt->bindParam(7, $username);
$stmt->bindParam(8, $password);
 // Insert the password directly without hashing

// Execute the statement
if (!$stmt->execute()) {
    echo json_encode(array("status" => "error", "message" => "Execution error: " . $stmt->errorInfo()[2]));
    exit;
}

$response['status'] = "success";
$response['message'] = "Signup successful!";

// Free up resources by setting the statement object to null
$stmt = null;

// Respond with JSON
echo json_encode($response);
?>
