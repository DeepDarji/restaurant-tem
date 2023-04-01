<?php

$bd=$_POST['bookdate'];
$ev=$_POST['selectevent'];
$sp=$_POST['selectppl'];
$ar=$_POST['selectarea'];
$sb=$_POST['bookname'];
$sn=$_POST['bookno'];
$em=$_POST['bookmail'];
$es=$_POST['eventStr'];
if( trim($bd)!="event date" && trim($ev)!="your event" && trim($sp)!="pepople number" && trim($ar)!="your area" && trim($sb)!="your name" && trim($sn)!="your no." && trim($em)!="your mail" && trim($es)!="your Event")
{
	if(filter_var($em, FILTER_VALIDATE_EMAIL))
	{
		$message='Hi Admin..<p>New Booking</p>
			<p>Name : '.$sb.'</p>
			<p>Email : '.$em.'</p>
			<p>Phone : '.$sn.'</p>
			<p>Event : '.$es.'</p>
			<p>Date of Event : '.$bd.'</p>
			<p>Type of Event : '.$ev.'</p>
			<p>Number of people : '.$sp.'</p>
			<p>Area : '.$ar.'</p>
		';
		
		$message_user='
		   	<div style="background-color: #f8f8f8; padding: 60px; margin-bottom: 40px; border-radius: 0px 0 0px 0; border-bottom: 3px solid #cd3131;">
			<p style="font-size: 16px; margin-bottom:20px;">Hi,</p>
			
			<p style="font-size:25px; font-weight:bold; color:#36434d; margin-bottom:20px;">Welcome to Catering 1.0!</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">Thank you for your Order</p>
			
			<p style="font-size: 16px; margin-bottom:20px;"> You Have Selected These Events : '.$_POST['eventStr'].'</p>
			
			<p style="font-size: 16px; margin-bottom:20px;">If you have any further questions, please let us know. and send your feedback to <a style="color:#cd3131; font-weight:bold;" href="nousheen.shaikh@himanshusofttech.com">support@catering.com</a></p>
			
			<p style="font-size: 16px;">Have a good day!</p>
		</div>
		';
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <support@catering.com>' . "\r\n";

		if(mail('jhini.mehta@gmail.com','Query for Catering',$message,$headers ))
		{
		mail($em,'Reply from Catering Template Team',$message_user,$headers );
			
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