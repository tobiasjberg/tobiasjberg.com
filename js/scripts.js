var navlist = document.getElementById("nav-list");
function toggleMenu() {
  var displayValue = window.getComputedStyle(navlist).getPropertyValue('display');
  if(displayValue == "none") {
    navlist.style.display = "block";
    navlist.setAttribute('aria-expanded', true);
  } else {
    navlist.style.display = "none";
    navlist.setAttribute('aria-expanded', false);
  }
}
window.onclick = function(event) {
  console.log("event.target",event.target);
  if (!event.target.matches('#nav-list') && !event.target.matches('#nav-menu') && !event.target.matches('#ccsbtn')) {
    navlist.style.display = "none";
    navlist.setAttribute('aria-expanded', false);
  } else if (event.target.matches('#nav-menu')) {
    toggleMenu()
  }
}

var schemelist = ["colorscheme1","colorscheme2","colorscheme3"];
document.getElementById("ccsbtn").addEventListener("click", function(){
	var cl = document.getElementById("fullwrap").classList;
	var key, value, result;
	for (key in cl) {
	    if (cl.hasOwnProperty(key) && !isNaN(parseInt(key, 10))) {
	        value = cl[key];
	        if (value.substring(0, 11) === "colorscheme") {
	            result = value;
	            break;
	        }
	    }
	}
	var sn = parseInt(result.substring(result.length-1));
	if (sn >= schemelist.length) {
		sn = 1;
	} else {
		sn = sn+1;
  }
	document.getElementById("fullwrap").classList.remove(result);
	document.getElementById("fullwrap").classList.add("colorscheme"+sn.toString());
});