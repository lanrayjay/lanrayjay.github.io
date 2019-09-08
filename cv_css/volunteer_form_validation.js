function formValidation()
{

var fname = document.registration.fname;
var uemail = document.registration.email;
var utitle = document.registration.utitle;
var umessage = document.registration.note;

	if(allLetter(fname))
	{	
		if(ValidateEmail(uemail))
		{	
			if(ValidateTitle(utitle))
			{
				if(ValidateNote(umessage))
				{
				}
			}
		}
	}
	return false;
} 

function allLetter(fname)
{ 
	var letters = /^[A-Za-z\s]+$/;
	var flen = fname.value;
	if(fname.value.match(letters) && (flen.length > 3))
	{
		return true;
	}
	else
	{
		alert('Fullname must have at least four (4) characters.');
		fname.focus();
		return false;
	}
}

function ValidateEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
}

function ValidateTitle(utitle)
{ 
	var letters = /^[A-Za-z\s]+$/;
	
	if(utitle.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Message title must have alphabet characters only');
		utitle.focus();
		return false;
	}
}

function ValidateNote(umessage)
{ 
	var letters = /^[A-Za-z\s]+$/;
	
	var mesl = umessage.value; 
	
	if(umessage.value.match(letters) && (mesl.length > 19))
	{
		alert('Form Succesfully Submitted');
		window.location.reload();

		return true;
	}
	else
	{
		alert('Message must have alphabet characters only');
		umessage.focus();
		return false;
	}
}
