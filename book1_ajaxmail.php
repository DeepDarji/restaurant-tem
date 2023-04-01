<?php

$u_name=$_POST['username'];
$u_date=$_POST['userdate'];
$u_num=$_POST['usernum'];
$u_email=$_POST['uemail'];
if( trim($u_name)!="user name" && trim($u_date)!="event date" && trim($u_num)!="your number" && trim($u_email)!="your email")
{
	if(filter_var($u_email, FILTER_VALIDATE_EMAIL))
	{
		$message='Hi Admin..<p>New Booking</p>
			<p>Name : '.$u_name.'</p>
			<p>Email : '.$u_email.'</p>
			<p>Phone : '.$u_num.'</p>
			<p>Event : '.$u_date.'</p>
		';
		
		$message_user='
		   	<div style="background-color: #f8f8f8; padding: 60px; margin-bottom: 40px; border-radius: 0px 0 0px 0; border-bottom: 3px solid #cd3131;">
			<p style="font-size: 16px; margin-bottom:20px;">Hi,</p>
			
			<p style="font-size:25px; font-weight:bold; color:#36434d; margin-bottom:20px;">Welcome to Catering 1.0!</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">Thank you for your Booking</p>
			<p style="font-size: 16px; margin-bottom:20px;">  Name: '.$u_name.'</p>
			<p style="font-size: 16px; margin-bottom:20px;">  Email: '.$u_email.'</p>
			<p style="font-size: 16px; margin-bottom:20px;">  Phone No: '.$u_num.'</p>
			<p style="font-size: 16px; margin-bottom:20px;">  Event Date: '.$u_date.'</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">If you have any further questions, please let us know. and send your feedback to <a style="color:#cd3131; font-weight:bold;" href="jhini.mehta@gmail.com">support@catering.com</a></p>
			
			<p style="font-size: 16px;">Have a good day!</p>
		</div>
		';
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <support@catering.com>' . "\r\n";

		if(mail('nousheen.shaikh@himanshusofttech','Query for Catering',$message,$headers ))
		{
		mail($u_email,'Reply from Catering Template Team',$message_user,$headers );
			
		echo '1#<p style="color:green;">Mail has been sent successfully.</p>';
		}
		else
		{
		echo '2#<p style="color:red;">Please, Try Again.</p>';
		}
	}
	else
		echo '2#<p style="color:red">Please, provide valid Email.</p>';
}
else
{
echo '2#<p style="color:red">Please, fill all the details.</p>';
} 
?>