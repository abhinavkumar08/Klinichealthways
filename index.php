<?php 
include_once("html/Clinic.html"); 
require_once('phpmailer/PHPMailerAutoload.php');
if($_POST['submit']){
$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 587; // or 587
$mail->IsHTML(true);
$mail->Username = "klinichealthways.delhi@gmail.com";
$mail->Password = "holocaust666";
$mail->SetFrom("klinichealthways.delhi@gmail");
$mail->Subject = "klinichealthways : Request for an Appointment";
$mail->Body = "Name : " . $_POST['name'] . "<br />" . "Email Id : " . $_POST['emailid'] . "<br />" . "Phone Number : " . $_POST['phonenumber'] . "<br />" . "Message : " . $_POST['message'] . "<br />" . "Gender : " . $_POST['gender'];
$mail->AddAddress("klinichealthways.delhi@gmail.com");
 if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
 	<script>alert("We have received your message. We will contact you on your email shortly");</script>
	
 }

}
?>
