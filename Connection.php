<?php
class Connection
{
	public $servername="localhost";
	public $username="root";
	public $password="";
	 function database()
	{
	$conn = new mysqli($servername,$username,$password);
	if($conn->connect_error)
	{
		die ("Connection failed" .$conn->connect_error);
	}
	else 
	{
		echo "connection done successfully";
	}
	}
}
$obj= new Connection;
$obj->database();
?>