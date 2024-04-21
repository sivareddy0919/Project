<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Include database connection
require "Phpconncetion.php"; // Connect to the database

// Get the raw POST data as a string
$json_data = file_get_contents("php://input");

// Decode the JSON data into an associative array
$request_data = json_decode($json_data, true);

// Check if 'username' and 'password' keys exist in $request_data
if (isset($request_data['username']) && isset($request_data['password'])) {
    // Get the username and password from the decoded JSON data
    $username = $request_data['username'];
    $password = $request_data['password'];

    // Query to check login credentials using prepared statements
    $sql = "SELECT * FROM patient WHERE `username` = :username AND `password` = :password";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        $response['status'] = "error";
        $response['message'] = "Database error: " . $conn->error;
    } else {
        // Bind parameters
        $stmt->bindValue(':username', $username, PDO::PARAM_STR);
        $stmt->bindValue(':password', $password, PDO::PARAM_STR);

        // Execute the prepared statement
        if (!$stmt->execute()) {
            $response['status'] = "error";
            $response['message'] = "Execution error: " . $stmt->errorInfo()[2]; // Get detailed error message
        } else {
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            // Check if login credentials are valid
            if ($result) {
                $response['status'] = "success";
                $response['message'] = "Login successful!";
                // You can include user data in the response if needed
                // $response['user'] = $result;
            } else {
                $response['status'] = "error";
                $response['message'] = "Invalid username or password";
            }
        }

        // Close the prepared statement
        $stmt->closeCursor();
    }
} else {
    // Handle the case where 'username' or 'password' is missing
    $response['status'] = "error";
    $response['message'] = "Invalid request data";
}

// Close the database connection
$conn = null;

// Respond with JSON
echo json_encode($response);
?>
