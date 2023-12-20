<?php 
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name=$_POST["name"];
    $email = $_POST["email"];
    $txt = $_POST["txt"];

    $subject = "Novo pitanje";
    $message = "Email adresa: " . $email . "\n\n" . "Pitanje: " . $txt;
    $headers = "Za " . $name;

    if (mail($email, $subject, $message, $headers)) {
        // Uspesno poslato pitanje
        echo "success";
    } else {
        // Neuspesno slanje pitanja
        echo "error";
    }
}
?>