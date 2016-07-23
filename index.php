<?php 

include_once("html/Clinic.html"); 
require_once('phpmailer/PHPMailerAutoload.php');

if($_POST['submit'])
{
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
$mail->Body = "Name : "$_POST['name'] . "\r\n" . "Email Id : " $_POST['emailid'] . "\r\n" . "Phone Number : " $_POST['phonenumber'] . "\r\n" . "Message : " $_POST['message'] . "\r\n" . "Gender : " $_POST['gender'];
$mail->AddAddress("abhinavkumar08@gmail.com");

 if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
	 header('Location: http://www.google.com');
 }

}


?>
