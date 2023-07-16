
  var originalText = "<a href>Click the button to change this text.</a>";
var isTextChanged = false;

function changeText() {
  var element = document.getElementById("demo");

  var element1 =document.getElementById("boss");
  
  var ortext="HAIDIZ";
  if (isTextChanged) {
    element.innerHTML = originalText;
    isTextChanged = false;
    element1.innerHTML=ortext;

    
  } else {
    element1.innerHTML="HATz"
    element.innerHTML = "<a href>Text has been changed!</a>";
    isTextChanged = true;
  }

}
  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create an HTTP request object
    var xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open('POST', 'store_input.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Define the data to be sent
    var data = 'name=' + encodeURIComponent(name) +
               '&email=' + encodeURIComponent(email) +
               '&message=' + encodeURIComponent(message);

    // Send the request
    xhr.send(data);
  }

  // Attach the submitForm function to the form's submit event
 document.getElementById('userForm').addEventListener('submit', submitForm);
  



