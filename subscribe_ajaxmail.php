<?php
$em=$_POST['useremail'];
if(trim($em)!="Your Email" && trim($em)!="")
{
	if(filter_var($em, FILTER_VALIDATE_EMAIL))
	{
		$message='
		<div style="background-color: #fff; padding: 60px; margin-bottom: 40px; border-radius: 0px 0 0px 0; border-bottom: 3px solid #cd3131;">
			<p style="font-size: 16px; margin-bottom:0px;">User sent a query having email id as '.$em.' </p>
		</div>
		';
		
		$message_user='
		<div style="background-color: #f8f8f8; padding: 60px; margin-bottom: 40px; border-radius: 0px 0 0px 0; border-bottom: 3px solid #cd3131;">
			<p style="font-size: 16px; margin-bottom:20px;">Hi,</p>
			
			<p style="font-size:25px; font-weight:bold; color:#36434d; margin-bottom:20px;">Welcome to Catering 1.0!</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">Thank you for your subscription.</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">Please note that you can invite visitors to subscribe by adding a Signup form to your shoutout newsletter.</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">If you have any further questions, please let us know. and send your feedback to <a style="color:#cd3131; font-weight:bold;" href="jhini.mehta@gmail.com">support@catering.com</a></p>
			
			<p style="font-size: 16px;">Have a good day!</p>
		</div>
		';
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <jhini.mehta@gmail.com>' . "\r\n";

		if(mail('jhini.mehta@gmail.com','New user for Catering',$message,$headers ))
		{
		mail($em,'Thanks for the Catering subscription',$message_user,$headers );
			
		echo '1#Mail has been sent successfully.';
		}
		else
		{
		echo '2#Please, Try Again.';
		}
	}
	else
		echo '2#Please, provide valid Email.';
}
else
{
echo '2#Please, fill all the details.';
} 
?>