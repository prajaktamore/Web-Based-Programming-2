<?php

ini_set('display_errors', 1);

$con=mysqli_connect("bigyellowcat.cs.binghamton.edu","more","more7755","more");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM Employee");

$Salary = array();
$Emp_Name = array();
$DateOfBirth = array();
$SSN = array();

	while($row = mysqli_fetch_array($result))
  {      
	$Salary[] = $row['Salary'];
	$Emp_Name[] = $row['Emp_Name'];
	$DateOfBirth[] = $row['DateOfBirth'];
	$SSN[] = $row['SSN'];
  }
  /*
    $JSONarray = array();
	  $JSONarray[] = array("0" => $Salary, "1" => $Emp_Name,
    "2" => $DateOfBirth, "3" => $SSN);
    $JSONarray[] = array("Salary" => $Salary, "Emp_Name" => $Emp_Name,
    "DateOfBirth" => $DateOfBirth, "SSN" => $SSN);
	
	echo json_encode($JSONarray);
	*/
 echo json_encode(array_map(null, $Salary,$Emp_Name,$DateOfBirth,$SSN));

  // Close the database connection
  mysqli_close($con);
?>