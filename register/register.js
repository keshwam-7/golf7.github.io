var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
var postalCodeRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
$(document).ready(function(){
$('#sbutton').click(function(){
if ($('#firstName').val() == ""){
// alert('Please complete the field');
$('#fnamemsg').slideDown("slow");
$('#fnamemsg').html("Please Provide First Name");
$('#firstName').focus();
return false;
}
else if($('#lastName').val()==""){
$('#lnamemsg').slideDown("slow");
$("#lnamemsg").html("Please Provide Last Name");
$('#lastName').focus();
return false;
}
else if($('#streetAddress').val()==""){
$('#staddressmsg').slideDown("slow");
$("#staddressmsg").html("Please Provide Street Address");
$('#streetAddress').focus();
return false;
}
else if($('#city').val()==""){
$('#citymsg').slideDown("slow");
$("#citymsg").html("Please Provide City");
$('#city').focus();
return false;
}
else if($('#province').val()==""){
$('#provincemsg').slideDown("slow");
$("#provincemsg").html("Please Provide Province");
$('#province').focus();
return false;
}
else if($('#country').val()=="Choose Country"){
$('#countrymsg').slideDown("slow");
$("#countrymsg").html("Please Select Country");
$('#country').focus();
return false;
}
else if(!postalCodeRegex.test($('#postalCode').val())){
$('#postalcodemsg').slideDown("slow");
$("#postalcodemsg").html("Please Provide Postal Code");
$('#postalCode').focus();
return false;
}
else if(!expr.test($('#cEmail').val())){
$('#cemailmsg').slideDown("slow");
$("#cemailmsg").html("Email Address Invalied");
$('#cEmail').focus();
return false;
}
else if(!phoneNumberPattern.test($('#homePhone').val())){
$('#homephonemsg').slideDown("slow");
$("#homephonemsg").html("Please Provide Home Phone");
$('#homePhone').focus();
return false;
}
else if($('#userId').val()==""){
$('#useridmsg').slideDown("slow");
$("#useridmsg").html("Please Provide User Id");
$('#userId').focus();
return false;
}
else if($('#pass').val()==""){
$('#passmsg').slideDown("slow");
$("#passmsg").html("Please Provide Password");
$('#pass').focus();
return false;
}
else if((($('#confirmPass').val()=="")) || (($('#confirmPass').val()) != ($('#pass').val()))) {
$('#confirmpassmsg').slideDown("slow");
$("#confirmpassmsg").html("Confirm Password Empty or Missmatched");
$('#confirmPass').focus();
return false;
}
else{
    swal({
        title: "Thank you!",
        text: "Form Submitted!",
        icon: "success",
        timer: 5000, // Set the timer to 5 seconds
        buttons: false // Disable the "OK" button
    });

return true;
}
});
});
