//document.getElementById("home_body").style.display = "none";
//document.getElementById("resume_body").style.display ="none";
 //document.getElementById("service_body").style.display ="none";
 //document.getElementById("project_body").style.display ="none";
 //document.getElementById("contact_body").style.display ="none";


function home(){
    document.getElementById("home_body").style.display = "block";
    document.getElementById("resume_body").style.display ="none";
    document.getElementById("service_body").style.display ="none";
    document.getElementById("project_body").style.display ="none";
    document.getElementById("contact_body").style.display ="none";
}

function resume(){
  document.getElementById("home_body").style.display = "none";
  document.getElementById("resume_body").style.display ="block";
  document.getElementById("service_body").style.display ="none";
  document.getElementById("project_body").style.display ="none";
  document.getElementById("contact_body").style.display ="none";
}

function services(){
  document.getElementById("home_body").style.display = "none";
  document.getElementById("resume_body").style.display ="none";
  document.getElementById("service_body").style.display ="block";
  document.getElementById("project_body").style.display ="none";
  document.getElementById("contact_body").style.display ="none";
}

function project(){
  document.getElementById("home_body").style.display = "none";
  document.getElementById("resume_body").style.display ="none";
  document.getElementById("service_body").style.display ="none";
  document.getElementById("project_body").style.display ="block";
  document.getElementById("contact_body").style.display ="none";
}

function contact(){
  document.getElementById("home_body").style.display = "none";
  document.getElementById("resume_body").style.display ="none";
  document.getElementById("service_body").style.display ="none";
  document.getElementById("project_body").style.display ="none";
  document.getElementById("contact_body").style.display ="block";
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


function initMap() {
   map = new google.maps.Map(document.getElementById("contact_info_body_map"), {
     center: { lat:  -37.840935, lng: 144.946457 },
     zoom: 8,
   });
 }