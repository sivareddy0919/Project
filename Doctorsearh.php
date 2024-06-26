<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Database connection details
$servername = "localhost"; // Your database host
$username = "root"; // Your database username
$password = ""; // Your database password
$database = "mobile"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initialize response array
$response = array();

// Get the raw POST data as a string
$json_data = file_get_contents("php://input");

// Decode the JSON data into an associative array
$request_data = json_decode($json_data, true);

// Check if 'name' key exists in $request_data
if (isset($request_data['name'])) {
    // Get the name from the decoded JSON data
    $searchText = $request_data['name'];

    // Query to search for doctors based on name
    $sql = "SELECT * FROM doctor WHERE `name` LIKE ?"; // Assuming 'name' is the column name for doctor names
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        $response['status'] = "error";
        $response['message'] = "Database error: " . $conn->error;
    } else {
        // Bind parameter
        $searchText = '%' . $searchText . '%'; // Add wildcard for partial matching
        $stmt->bind_param('s', $searchText);

        // Execute the prepared statement
        if (!$stmt->execute()) {
            $response['status'] = "error";
            $response['message'] = "Execution error: " . $stmt->error;
        } else {
            $result = $stmt->get_result();

            // Check if search returned any results
            if ($result->num_rows > 0) {
                $doctors = $result->fetch_all(MYSQLI_ASSOC);
                $response['status'] = "success";
                $response['message'] = "Search successful";
                $response['doctors'] = $doctors; // Include search results in the response
            } else {
                $response['status'] = "error";
                $response['message'] = "No doctors found";
            }
        }

        // Close the prepared statement
        $stmt->close();
    }
} else {
    // Handle the case where 'name' is missing
    $response['status'] = "error";
    $response['message'] = "Invalid request data";
}

// Close the database connection
$conn->close();

// Respond with JSON
echo json_encode($response);
?>
