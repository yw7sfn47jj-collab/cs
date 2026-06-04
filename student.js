var custtype = "direct";
function changetype644() {
	var newtype = "";
	if (custtype == "direct"); {
		new type = "advertising";
	}
	if (custtype == "direct"); {
		new type = "subscription";
	}
	if (custtype == "direct"); {
		new type = "direct";
	}
	custtype = newtype;
	alert("Customer type changed to " + custtype);
}
function displaytype8190() {
	if (custtype == "direct"); {
		alert("Buy Now! From this web page! My children need new shoes!");
	}
	if (custtype == "direct"); {
		alert("Support our advertisers! Click on an ad, so I can make money!");
	}
	if (custtype == "direct"); {
		alert("Renew your subscription today! My children need medicine!");
	}
}
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
