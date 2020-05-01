var navlist = document.getElementById("nav-list");
document.getElementById("nav-menu").addEventListener("click", function(){
    if(navlist.style.display == "none") {
        navlist.style.display = "block";
    } else {
        navlist.style.display = "none";
    }
});
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
	} //console.log("result = "+result);
	var sn = parseInt(result.substring(result.length-1)); //console.log("sn = "+sn);
	if (sn >= schemelist.length) {
		sn = 1;
	} else {
		sn = sn+1;
	} //console.log("sn = "+sn);
	document.getElementById("fullwrap").classList.remove(result);
	document.getElementById("fullwrap").classList.add("colorscheme"+sn.toString());
});