<?php 
include_once("html/Clinic.html"); 
require_once('phpmailer/PHPMailerAutoload.php');
if($_POST['submit']){
$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 587; // or 587
$mail->IsHTML(true);
$mail->Username = "abhinavkumar8008@gmail.com";
$mail->Password = "Newpass19";
$mail->SetFrom("abhinavkumar8008@gmail");
$mail->Subject = "Test";
$mail->Body = "Name : " . $_POST['name'] . "<br />" . "Email Id : " . $_POST['emailid'] . "<br />" . "Phone Number : " . $_POST['phonenumber'] . "<br />" . "Message : " . $_POST['message'] . "<br />" . "Gender : " . $_POST['gender'];
$mail->AddAddress("abhinavkumar08@gmail.com");
 header('Location: html/redirect.html');
 if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
 		echo "REDIRECTING TO DIFFERENT PAGE <br />";
	
 }

}
?>
