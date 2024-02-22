// alert(message)
// Alert has one button: (OK)
alert("Alert Button: Click Ok to proceed");

//confrim(message)
// has two buttons: (OK and cancel)
confirm("Click OK to confirm");


// if else with confirm 
let confirmMsg = "";
 
if (confirm("Click Ok to continue")){
    confirmMsg = "You pressed OK"
}else{
    confirmMsg = "You pressed Cancel"
};
document.write(confirmMsg);