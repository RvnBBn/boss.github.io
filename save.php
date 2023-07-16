$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create a string with the user input
$data = "Name: $name\nEmail: $email\nMessage: $message\n\n";

// Define the path to the text file
$file_path = "user_input.txt";

// Write the data to the file
file_put_contents($file_path, $data, FILE_APPEND | LOCK_EX);