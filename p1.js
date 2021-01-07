function resume(){
    document.getElementById("home_body").style.display = "none";
    document.getElementById("resume_body").style.display ="block";
}

function home(){
    document.getElementById("home_body").style.display = "block";
    document.getElementById("resume_body").style.display ="none";
}

var header = document.getElementById("nav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}