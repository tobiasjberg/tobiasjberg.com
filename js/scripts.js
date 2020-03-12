var navlist = document.getElementById("nav-list");
document.getElementById("nav-menu").addEventListener("click", function(){
    if(navlist.style.display == "none") {
        navlist.style.display = "block";
    } else {
        navlist.style.display = "none";
    }
});