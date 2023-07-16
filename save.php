if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Process the data or perform necessary actions
  // ...

  // Redirect or display a success message
  header("Location: success.html");
  exit();
}