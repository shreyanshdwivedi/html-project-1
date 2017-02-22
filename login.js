function visibility()
{
  hides();
  hidead1();
  document.getElementById("adbutton1").className="ad-buttonh";
  document.getElementById("adbutton2").className="ad-buttonh";
  var l=document.getElementById("d-login");
  l.style.height="450px";
  l.style.width="400px";
  l.style.padding="10px";
  l.className = "show"; // Fade in
}
function hide()
{
  document.getElementById("adbutton1").className="ad-button";
  document.getElementById("adbutton2").className="ad-button";
  showad1();
  document.getElementById("d-login").className = "hide";

}

function validate()
{
var name=document.fm.name.value;
var pass=document.fm.pass.value;
var status=false;
if(name.length<1)
{	document.getElementById("nameloc").innerHTML="<img height=15 width=15 src='unchecked.png'></img>";
status=false;
}
else
{
document.getElementById("nameloc").innerHTML="<img height=15 width=15 src='checked.png'></img>";
status=true;
}

if(pass.length<6)
{
document.getElementById("pas").innerHTML="<img height=15 width=15 src='unchecked.png'></img>";
status=false;
}
else
{
document.getElementById("pas").innerHTML="<img height=15 width=15 src='checked.png'></img>";
status=true;
}
return status;
}
