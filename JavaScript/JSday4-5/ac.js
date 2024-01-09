// alert(message)
// Alert has one button
alert("Alert button: click OK to proceed");


// confirm(message)
// Confirm has two buttons: (OK and Cancel)

// uses if/else for the two buttons
let confirmMsg = "";

if (confirm("Click OK to proceed")){
    document.write("You pressed OK")
    console.log("You pressed OK")
} else {
    document.write("You pressed Cancel")
    console.log("You pressed Cancel")
};

