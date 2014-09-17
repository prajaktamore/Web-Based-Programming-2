var myArray = new Array();
var loc = -1;
var insertflag1;

var scrollstatus;
var upstatus;
function handleChange()
{
	if(radio1.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("name1").value;
				var s = document.getElementById("ssn1").value;
				var b = document.getElementById("birth1").value;
				var x = document.getElementById("xxxx1").value;
				
				delete_(n,s,b,x);
				select_All();
				radio1.checked = false;
			}
			else
			{
				radio1.checked = false;
			}
	}else if(radio2.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("name2").value;
				var s = document.getElementById("ssn2").value;
				var b = document.getElementById("birth2").value;
				var x = document.getElementById("xxxx2").value;
				
				delete_(n,s,b,x);
				select_All();
				radio2.checked = false;
			}
			else
			{
				radio2.checked = false;
			}
	}else if(radio3.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("name3").value;
				var s = document.getElementById("ssn3").value;
				var b = document.getElementById("birth3").value;
				var x = document.getElementById("xxxx3").value;
				
				delete_(n,s,b,x);
				select_All();
				radio3.checked = false;
			}
			else
			{
				radio3.checked = false;
			}
	}else if(radio4.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("name4").value;
				var s = document.getElementById("ssn4").value;
				var b = document.getElementById("birth4").value;
				var x = document.getElementById("xxxx4").value;
				
				delete_(n,s,b,x);
				select_All();
				radio4.checked = false;
			}
			else
			{
				radio4.checked = false;
			}
	}else if(radio5.checked == true)
	{
			var r=confirm("If you want to delete the row click 'OK' else click 'Cancel'");
			if (r==true)
			{
				var n = document.getElementById("name5").value;
				var s = document.getElementById("ssn5").value;
				var b = document.getElementById("birth5").value;
				var x = document.getElementById("xxxx5").value;
				
				delete_(n,s,b,x);
				select_All();
				radio5.checked = false;
			}
			else
			{
				
				radio5.checked = false;
			}
	}

}

function scrollDown()
{	
var curLocation = document.getElementById("pos1").value;
		scrollstatus = curLocation;
		upstatus = 1;
		select_All_updown();
}

function scrollUp()
{
	var curLocation = document.getElementById("pos5").value;
		scrollstatus = curLocation;
		upstatus = 2;
		select_All_updown();
}

function checkDate(varBirthDate) {

            var month = varBirthDate.substring(0, 2);
            var date = varBirthDate.substring(3, 5);
            var year = varBirthDate.substring(6, 10);

			if(parseInt(month) < 1 || parseInt(month) > 12){
			return false;
			}else if(parseInt(date) < 1 || parseInt(date) > 31){
			return false;
			}else if(parseInt(year) < 1900 || parseInt(year) > 2014){
			return false;
			}
			
            var myDate = new Date(year, month - 1, date);

            var today = new Date();
			
			
            if (myDate > today) {
                return false;
            }
            else {
                return true;
            }
}

function Check1()
{
	return true;
}

function Check()
{
		
		var varnameflag = /^[a-zA-Z\s]*$/;
		var varnameflag1 = checkName(document.getElementById("namei").value);			
		
		if(!(varnameflag.test(document.getElementById("namei").value) && varnameflag1))
			{
				alert("Please enter a valid Name of length greater than 2. Name can only contain alphabets and white spaces");
				document.getElementById("namei").select();
				document.getElementById("namei").focus();
				return false;
			}
			
		var varSSN = /^\d{3}-?\d{2}-?\d{4}$/;
		if(!(varSSN.test(document.getElementById("ssni").value)))
		{
			alert("Please enter a valid SSN. Valid SSN consist of 9 digits in format like 123-45-6789");
			document.getElementById("ssni").select();
			document.getElementById("ssni").focus();
			return false;
		}

		var varBirthDate = /^(\d{2,2})(\/)(\d{2,2})\2(\d{4}|\d{4})$/;
		if(!(varBirthDate.test(document.getElementById("birthi").value) && checkDate(document.getElementById("birthi").value)))
		{
			alert("Please enter a valid birth date MM/DD/YYYY (YY - 19|20) and Date Not Greater Than Today.");
			document.getElementById("birthi").select();
			document.getElementById("birthi").focus();
			return false;
		}
		
		
		if(!checkSalary(document.getElementById("xxxxi").value))
		{
			alert("Please enter a valid monthly salary.Max eight digits, a dot, max two digits after dot");
			document.getElementById("xxxxi").select();
			document.getElementById("xxxxi").focus();
			return false;
		}
		
		insert();
		select_All();
}


/* function for checking name is a string with minimum 3 characters */
function checkName(username)
{
		if((isFinite(username))){
				return false;
		}
		if( username.length>2){
				return true;
		}
		else
		{
				return false;
		}
}

function checkSalary(salary) {
    var re = /^\d{1,8}\.\d{0,2}$/;
		return re.test(salary);
}
   
function select_All(){
var value;
	$.ajax({
        url: 'select.php',
        success: function(response) {
            successCallback(response);
        }
    });

}

function successCallback(responseObj){
     var mydata = JSON.stringify(responseObj);
	 var obj = JSON.parse( responseObj );

	var salary = new Array();
	var empname = new Array();
	var ssn = new Array();
	var dob = new Array();

    for(var i in obj) {
        salary[i] = obj[i][0];
		empname[i] = obj[i][1];
		dob[i] = obj[i][2];
		ssn[i] = obj[i][3];
    }
		loc = -1;
		
 		for (var i = 0; i < 5 ; i++) {
					var num = i + 1;
					var n = num.toString(); 
					
					var name = "name".concat(n);
					document.getElementById(name).value = "";
					
					var sssn = "ssn".concat(n);
					document.getElementById(sssn).value = "";
					
					var birth = "birth".concat(n);
					document.getElementById(birth).value = "";
					
					var xxxx = "xxxx".concat(n);
					document.getElementById(xxxx).value = "";
					
					var pos = "pos".concat(n);
					document.getElementById(pos).value = "";
		}
										
		for (var i = 0; i < salary.length ; i++) {
					if(i >= 5) {
					var num;
					loc = loc + 1;

					
							document.getElementById("name1").value = empname[i-4];
							document.getElementById("ssn1").value = ssn[i-4];
							document.getElementById("birth1").value = dob[i-4];
							document.getElementById("xxxx1").value = salary[i-4];
							document.getElementById("pos1").value = i-4;

							document.getElementById("name2").value = empname[i-3];
							document.getElementById("ssn2").value = ssn[i-3];
							document.getElementById("birth2").value = dob[i-3];
							document.getElementById("xxxx2").value = salary[i-3];
							document.getElementById("pos2").value = i-3;

							document.getElementById("name3").value = empname[i-2];
							document.getElementById("ssn3").value = ssn[i-2];
							document.getElementById("birth3").value =dob[i-2];
							document.getElementById("xxxx3").value = salary[i-2];
							document.getElementById("pos3").value = i-2;

							document.getElementById("name4").value = empname[i-1];
							document.getElementById("ssn4").value = ssn[i-1];
							document.getElementById("birth4").value = dob[i-1];
							document.getElementById("xxxx4").value = salary[i-1];
							document.getElementById("pos4").value = i-1;
						
							document.getElementById("name5").value = empname[i];
							document.getElementById("ssn5").value = ssn[i];
							document.getElementById("birth5").value = dob[i];
							document.getElementById("xxxx5").value = salary[i];
							document.getElementById("pos5").value = i;
						
					}
					else{
					loc = loc + 1;
					var num = i + 1;
					var n = num.toString(); 
					
					var name = "name".concat(n);
					document.getElementById(name).value = empname[i];
					
					var sssn = "ssn".concat(n);
					document.getElementById(sssn).value = ssn[i];
					
					var birth = "birth".concat(n);
					document.getElementById(birth).value = dob[i];
					
					var xxxx = "xxxx".concat(n);
					document.getElementById(xxxx).value = salary[i];
					
					var pos = "pos".concat(n);
					document.getElementById(pos).value = i;
					}
					
				}
				
}


function insert() {  
	
		var id, namei, ssni, birthi, xxxxi, xmlString, data;   
		namei = document.getElementById("namei").value;  
		ssni = document.getElementById("ssni").value;  
		birthi = document.getElementById("birthi").value;  
		xxxxi = document.getElementById("xxxxi").value;  
		  
		//creating XMLhttpRequest object  
		 var xhr;  
			 if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
			xhr = new XMLHttpRequest();  
		} else if (window.ActiveXObject) { // IE 8 and older  
			xhr = new ActiveXObject("Microsoft.XMLHTTP");  
		}  
		  
		//creating the xml string  
			xmlString = "<userinfo>" +  
			"  <namei>" + escape(namei) + "</namei>" +  
			"  <ssni>" + escape(ssni) + "</ssni>" +  
			"  <birthi>" + escape(birthi) + "</birthi>" +  
			"  <xxxxi>" + escape(xxxxi) + "</xxxxi>" +   
			"</userinfo>";  
		  
		  // Build the URL to connect to  
		   var url = "insert.php";
		  
		  // Open a connection to the server  
		  xhr.open("POST", url, true);  
		  
		  // declaring that the data being sent is in XML format  
		  xhr.setRequestHeader("Content-Type", "text/xml");  
		  xhr.setRequestHeader("Content-length", xmlString.length);
		  
			xhr.onreadystatechange = function() {//Call a function when the state changes.
			   if(xhr.readyState == 4 && xhr.status == 200) {
				  alert(xhr.responseText);
			   }
			}
		  // Send the request  
		  xhr.send(xmlString);  
		  
		//return xhr.responseText;
}  

function delete_(n,s,b,x) {  

  
//creating XMLhttpRequest object  
 var xhr;  
     if (window.XMLHttpRequest) { // Mozilla, Safari, ...  
    xhr = new XMLHttpRequest();  
} else if (window.ActiveXObject) { // IE 8 and older  
    xhr = new ActiveXObject("Microsoft.XMLHTTP");  
}  
  
//creating the xml string  
    xmlString = "<userinfo>" +  
    "  <namei>" + escape(n) + "</namei>" +  
    "  <ssni>" + escape(s) + "</ssni>" +  
    "  <birthi>" + escape(b) + "</birthi>" +  
    "  <xxxxi>" + escape(x) + "</xxxxi>" +   
    "</userinfo>";  
  
//alert(data);  
  // Build the URL to connect to  
  var url = "delete.php";  
  
  // Open a connection to the server  
  xhr.open("POST", url, true);  
  
  // declaring that the data being sent is in XML format  
  xhr.setRequestHeader("Content-Type", "text/xml");  
  
  // Send the request  
  xhr.send(xmlString);  
}  

function select_All_updown(){
var value;
	$.ajax({
        url: 'select.php',
        success: function(response) {
            successCallback_updown(response);
        }
    });

}

function successCallback_updown(responseObj){
     var mydata = JSON.stringify(responseObj);
	 var obj = JSON.parse( responseObj );

	var salary = new Array();
	var empname = new Array();
	var ssn = new Array();
	var dob = new Array();

    for(var i in obj) {
        salary[i] = obj[i][0];
		empname[i] = obj[i][1];
		dob[i] = obj[i][2];
		ssn[i] = obj[i][3];
    }
		loc = -1;
		
	if(upstatus == 2 && (parseInt(parseInt(scrollstatus) - 5)) < 0){
			alert("Cannot scroll up");
	}else if(upstatus == 1 && (parseInt(parseInt(scrollstatus) + 5)) == salary.length){
			alert("Cannot scroll down");
	}else {
 		for (var i = 0; i < 5 ; i++) {
					var num = i + 1;
					var n = num.toString(); 
					
					var name = "name".concat(n);
					document.getElementById(name).value = "";
					
					var sssn = "ssn".concat(n);
					document.getElementById(sssn).value = "";
					
					var birth = "birth".concat(n);
					document.getElementById(birth).value = "";
					
					var xxxx = "xxxx".concat(n);
					document.getElementById(xxxx).value = "";
					
					var pos = "pos".concat(n);
					document.getElementById(pos).value = "";
		}
	
		var i = parseInt(parseInt(scrollstatus));
					if(upstatus == 2) {
					
							document.getElementById("name1").value = empname[i-5];
							document.getElementById("ssn1").value = ssn[i-5];
							document.getElementById("birth1").value = dob[i-5];
							document.getElementById("xxxx1").value = salary[i-5];
							document.getElementById("pos1").value = i-5;

							document.getElementById("name2").value = empname[i-4];
							document.getElementById("ssn2").value = ssn[i-4];
							document.getElementById("birth2").value = dob[i-4];
							document.getElementById("xxxx2").value = salary[i-4];
							document.getElementById("pos2").value = i-4;

							document.getElementById("name3").value = empname[i-3];
							document.getElementById("ssn3").value = ssn[i-3];
							document.getElementById("birth3").value =dob[i-3];
							document.getElementById("xxxx3").value = salary[i-3];
							document.getElementById("pos3").value = i-3;

							document.getElementById("name4").value = empname[i-2];
							document.getElementById("ssn4").value = ssn[i-2];
							document.getElementById("birth4").value = dob[i-2];
							document.getElementById("xxxx4").value = salary[i-2];
							document.getElementById("pos4").value = i-2;
						
							document.getElementById("name5").value = empname[i-1];
							document.getElementById("ssn5").value = ssn[i-1];
							document.getElementById("birth5").value = dob[i-1];
							document.getElementById("xxxx5").value = salary[i-1];
							document.getElementById("pos5").value = i-1;
						
					}
					else if(upstatus == 1){
							document.getElementById("name1").value = empname[i+1];
							document.getElementById("ssn1").value = ssn[i+1];
							document.getElementById("birth1").value = dob[i+1];
							document.getElementById("xxxx1").value = salary[i+1];
							document.getElementById("pos1").value = i+1;

							document.getElementById("name2").value = empname[i+2];
							document.getElementById("ssn2").value = ssn[i+2];
							document.getElementById("birth2").value = dob[i+2];
							document.getElementById("xxxx2").value = salary[i+2];
							document.getElementById("pos2").value = i+2;

							document.getElementById("name3").value = empname[i+3];
							document.getElementById("ssn3").value = ssn[i+3];
							document.getElementById("birth3").value =dob[i+3];
							document.getElementById("xxxx3").value = salary[i+3];
							document.getElementById("pos3").value = i+3;

							document.getElementById("name4").value = empname[i+4];
							document.getElementById("ssn4").value = ssn[i+4];
							document.getElementById("birth4").value = dob[i+4];
							document.getElementById("xxxx4").value = salary[i+4];
							document.getElementById("pos4").value = i+4;
						
							document.getElementById("name5").value = empname[i+5];
							document.getElementById("ssn5").value = ssn[i+5];
							document.getElementById("birth5").value = dob[i+5];
							document.getElementById("xxxx5").value = salary[i+5];
							document.getElementById("pos5").value = i+5;					
					}
		}
}

