$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create a string with the form data
$data = "Name: $name\nEmail: $email\nMessage: $message\n\n";

// Define the path to the text file
$filePath = 'form_data.txt';

// Open the file in append mode and write the data
$file = fopen($filePath, 'a');
if ($file) {
    fwrite($file, $data);
    fclose($file);
    echo 'Form submitted successfully!';
} else {
    echo 'Unable to open file.';
}