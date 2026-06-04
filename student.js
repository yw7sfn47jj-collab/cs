// declare this variable outside of your functions
var special = 1;     // selects which item that is "on special"
function displayspecial419() {

   if (special == 1) {
	  alert("The current special is #1");
   }
   if (special == 2) {
	  alert("The current special is #2");
   }
   if (special == 3) {
	  alert("The current special is #3");
   }
   special = special + 1;
   if (special > 3) {
	 special = 1;  // wrap around
   }
}
var aname = "Izabela Ristova";
var a_message = "cs190 Javascript Lab 2";
var my_code = 875;

function displayinfo526() {
    alert(aname + "\\n" + a_message + "\\n" + my_code);
}
function confirmlink263() {
    return confirm("Do you want to continue?");
}
