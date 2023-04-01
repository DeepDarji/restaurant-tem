<?php
$cus_date=$_POST['userdate'];
$cus_event=$_POST['uevent'];
$cus_ppl=$_POST['uppl'];
$cus_area=$_POST['uarea'];
$cus_name=$_POST['uname'];
$cus_num=$_POST['unum'];
$cus_email=$_POST['uemail'];

$us_num=$_POST['usernum'];
$us_email=$_POST['uemail'];
$us=$_POST['eventStr'];
if( trim($cus_name)!="user name" && trim($cus_date)!="event date" && trim($cus_num)!="your number" && trim($cus_email)!="your email" && trim($cus_event)!="your event" && trim($cus_area)!="your area" && trim($cus_ppl)!="No of people")
{
	if(filter_var($cus_email, FILTER_VALIDATE_EMAIL))
	{
		$message='Hi Admin..<p>New Booking</p>
		    <p> Event Date :'.$cus_date.' </p>
			<p>Event : '.$cus_event.'</p>
			<p>No. of people : '.$cus_ppl.'</p>
			<p>Name : '.$cus_name.'</p>
			<p>Email : '.$cus_email.'</p>
			<p>Phone : '.$cus_num.'</p>

		';
		
		$message_user='
		   	<div style="background-color: #f8f8f8; padding: 60px; margin-bottom: 40px; border-radius: 0px 0 0px 0; border-bottom: 3px solid #cd3131;">
			<p style="font-size: 16px; margin-bottom:20px;">Hi,</p>
			
			<p style="font-size:25px; font-weight:bold; color:#36434d; margin-bottom:20px;">Welcome to Catering 1.0!</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">Thank you for your Order</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">  Name: '.$us_name.'</p>
			<p style="font-size: 16px; margin-bottom:20px;">  Email: '.$us_email.'</p>
			<p style="font-size: 16px; margin-bottom:20px;">  Phone No: '.$us_num.'</p>
			<p style="font-size: 16px; margin-bottom:20px;">  Event Date: '.$us_date.'</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">If you have any further questions, please let us know. and send your feedback to <a style="color:#cd3131; font-weight:bold;" href="jhini.mehta@gmail.com">support@catering.com</a></p>
			
			<p style="font-size: 16px;">Have a good day!</p>
		</div>
		';
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <support@catering.com>' . "\r\n";

		if(mail('jhini.mehta@gmail.com','Query for Catering',$message,$headers ))
		{
		mail($cus_email,'Reply from Catering Template Team',$message_user,$headers );
			
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